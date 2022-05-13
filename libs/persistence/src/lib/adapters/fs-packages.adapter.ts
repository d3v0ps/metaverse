import { spawnWithResult } from '@central-factory/platforms/engines/nodejs/child-process/spawn';
import {
  Package,
  Workspace,
  WorkspaceProject,
} from '@central-factory/platforms/__generated__/models';
import { lstat, readJSON } from 'fs-extra';
import { resolve } from 'path';
import { from, map, Observable, of, switchMap } from 'rxjs';
import { RepositoryAdapter } from '../adapter';
import { Generator, TemplateNode } from '../interfaces/generator';

type IdParam = string | string[];

export type PackagesQuery = {
  id?: IdParam;
  name?: string;
  type?: 'app' | 'lib';
};

const idIsIncluded = (id: string, param: IdParam) =>
  Array.isArray(param) ? param.includes(id) : param === id;

export class FSPackagesRepositoryAdapter
  implements RepositoryAdapter<Package, PackagesQuery>
{
  private packages = new Map<string, Package>();

  constructor(private packageGenerator: Generator<TemplateNode, Package[]>) {
    this.fetchPackages();
  }

  find({ id = undefined }: PackagesQuery = {}): Observable<Package[]> {
    if (this.packages.size <= 0) {
      return from(this.fetchPackages()).pipe(
        switchMap(() => this.find({ id }))
      );
    }

    const packages = Array.from(this.packages.values());

    return of(id ? packages.filter((p) => idIsIncluded(p.name, id)) : packages);
  }

  findOne({ id }: PackagesQuery): Observable<Package | null> {
    if (this.packages.size <= 0) {
      return from(this.fetchPackages()).pipe(
        switchMap(() => this.findOne({ id }))
      );
    }

    const packages = Array.from(this.packages.values());

    return of(
      (id ? packages.find((p) => idIsIncluded(p.name, id)) : packages[0]) ||
        null
    );
  }

  insert({ name, type = 'lib' }: Package): Observable<Package> {
    if (!name) {
      throw new Error('Package name is required');
    }

    return spawnWithResult('node_modules/.bin/nx', ['g', type, name]).pipe(
      switchMap(() => this.findOne({ name }) as Observable<Package>)
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  retype(name: string, type: 'app' | 'lib') {
    throw new Error('Method not implemented.');
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  rename(name: string, newName: string) {
    throw new Error('Method not implemented.');
  }

  generate(query: PackagesQuery): Observable<TemplateNode> {
    return this.find(query).pipe(
      map((packages) =>
        packages.filter((pkg) => pkg.name !== '@central-factory/metaverse')
      ),
      switchMap((p) => this.packageGenerator.generate(p))
    );
  }

  private async fetchPackages(): Promise<Package[]> {
    const workspace: Workspace = await readJSON(
      resolve(process.cwd(), 'angular.json')
    );

    const rootPackagePath = resolve(process.cwd(), 'package.json');
    const rootPackage: Package = await readJSON(rootPackagePath);

    const packages: Package[] = (
      await Promise.all(
        Object.entries(
          workspace.projects as Record<string, WorkspaceProject>
        ).map(async ([name, project]) => {
          const projectFolder = resolve(
            process.cwd(),
            project.root || 'libs/not_found'
          );
          const isDirectory = (await lstat(projectFolder)).isDirectory();
          if (!isDirectory) {
            throw new Error(
              `Project root folder not found for project ${name}`
            );
          }

          const pkg: Package = await readJSON(
            resolve(projectFolder, 'package.json')
          )
            .then((content) => ({
              name,
              ...content,
            }))
            .catch(() => ({
              name,
            }));

          return pkg;
        })
      )
    ).filter(Boolean);

    this.packages = new Map([
      ['@central-factory/metaverse', rootPackage],
      ...(packages.map((p) => [p.name, p]) as [string, Package][]),
    ]);

    return packages;
  }
}
