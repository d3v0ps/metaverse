import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lstat, pathExists, readdir, readFile, readJSON } from 'fs-extra';
import { resolve } from 'path';
import { from, map, Observable, of, switchMap } from 'rxjs';
import { parse as parseYaml } from 'yaml';

export type Workspace = {
  projects: Record<string, WorkspaceProject>;
};

export type WorkspaceProject = {
  root: string;
};

export type Package = {
  name: string;
  models: string[];
  project: WorkspaceProject;
};

export type PackageModelToken = {
  name: string;
};

@Injectable()
export class PackagesService {
  private packages: Record<string, Package> = {};

  constructor(private http: HttpService) {
    this.fetchPackages();
  }

  createPackage(name: string, type: 'app' | 'lib') {
    throw new Error('Method not implemented.');
  }

  retypePackage(name: string, type: 'app' | 'lib') {
    throw new Error('Method not implemented.');
  }

  renamePackage(name: string, newName: string) {
    throw new Error('Method not implemented.');
  }

  createModel(packageName: string, name: string) {
    throw new Error('Method not implemented.');
  }

  getPackage(name: string): Observable<Package> {
    if (Object.keys(this.packages).length === 0) {
      return from(this.fetchPackages()).pipe(
        switchMap(() => this.getPackage(name))
      );
    }

    return of(this.packages[name]);
  }

  getPackages(): Observable<Record<string, Package>> {
    if (Object.keys(this.packages).length === 0) {
      return from(this.fetchPackages()).pipe(
        switchMap(() => this.getPackages())
      );
    }

    return of(this.packages);
  }

  getModels(packageName: string): Observable<PackageModelToken[]> {
    return this.getPackage(packageName).pipe(
      switchMap((pkg) => {
        return Promise.all(
          pkg.models.map(async (name) => {
            const tokenPath = resolve(
              process.cwd(),
              pkg.project.root,
              'src',
              'lib',
              'models',
              name
            );
            const content = parseYaml(await readFile(tokenPath, 'utf8'));
            return { name, ...content };
          })
        );
      })
    );
  }

  getModel(packageName: string, name: string): Observable<PackageModelToken> {
    return this.getPackage(packageName).pipe(
      switchMap((pkg: Package) => {
        const tokenPath = resolve(
          process.cwd(),
          pkg.project.root,
          'src',
          'lib',
          'models',
          name
        );

        return from(readFile(tokenPath, 'utf8')).pipe(
          map((content) => ({ name, ...parseYaml(content) }))
        );
      })
    );
  }

  private async fetchPackages() {
    const workspace: Workspace = await readJSON(
      resolve(process.cwd(), 'angular.json')
    );

    const packages = (
      await Promise.all(
        Object.entries(workspace.projects).map(async ([name, project]) => {
          const projectFolder = resolve(process.cwd(), project.root);
          const isDirectory = (await lstat(projectFolder)).isDirectory();

          if (!isDirectory) {
            return null;
          }

          const models = await this.fetchModels(project);

          return {
            name,
            models,
            project,
          };
        })
      )
    ).filter(Boolean);

    this.packages = packages.reduce(
      (acc, curr) => Object.assign(acc, { [curr.name]: curr }),
      {}
    );

    packages;
  }

  private async fetchModels(project: WorkspaceProject) {
    const projectFolder = resolve(process.cwd(), project.root);
    const modelsFolder = resolve(projectFolder, 'src', 'lib', 'models');

    const modelsExists = await pathExists(modelsFolder);

    if (modelsExists) {
      const modelNames = await (
        await readdir(modelsFolder)
      ).filter((file) => file.endsWith('.yaml') || file.endsWith('.yml'));

      return modelNames;
    }

    return [];
  }
}
