import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { spawn } from 'child_process';
import { lstat, pathExists, readdir, readFile, readJSON } from 'fs-extra';
import { extname, resolve } from 'path';
import { forkJoin, from, map, Observable, of, switchMap } from 'rxjs';
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
    return new Promise<void>((resolve, reject) => {
      const child = spawn('node_modules/.bin/nx', ['g', type, name]);
      child.stdout.on('data', (data) => {
        resolve();
      });

      child.on('close', () => resolve());
    });
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

  getPackages(): Observable<Package[]> {
    if (Object.keys(this.packages).length === 0) {
      return from(this.fetchPackages()).pipe(
        switchMap(() => this.getPackages())
      );
    }

    return of(Object.values(this.packages));
  }

  getModels(packageName: string): Observable<PackageModelToken[]> {
    return this.getPackage(packageName).pipe(
      switchMap((pkg) => {
        return forkJoin(
          pkg.models.map((name) => this.getPackageModel(pkg, name))
        );
      })
    );
  }

  getModel(packageName: string, name: string): Observable<PackageModelToken> {
    return this.getPackage(packageName).pipe(
      switchMap((pkg: Package) => this.getPackageModel(pkg, name))
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

      return modelNames.map((model) => ({
        name: model.replace(extname(model), ''),
        file: model,
      }));
    }

    return [];
  }

  private getPackageModel(
    pkg: Package,
    model: string
  ): Observable<PackageModelToken> {
    const tokenPath = resolve(
      process.cwd(),
      pkg.project.root,
      'src',
      'lib',
      'models',
      model
    );

    const name = model.replace(extname(model), '');

    return from(readFile(tokenPath, 'utf8')).pipe(
      map((content) => ({ name, file: model, ...parseYaml(content) }))
    );
  }
}
