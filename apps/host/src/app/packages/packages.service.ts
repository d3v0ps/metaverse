import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { camel } from 'case';
import { spawn } from 'child_process';
import {
  ensureDir,
  lstat,
  pathExists,
  readdir,
  readFile,
  readJSON,
  writeFile,
} from 'fs-extra';
import { extname, resolve } from 'path';
import { parse as parseYaml } from 'yaml';

export type Workspace = {
  projects: Record<string, WorkspaceProject>;
};

export type WorkspaceProject = {
  root: string;
};

export type Package = {
  name: string;
  models: PackageModelToken[];
  project: WorkspaceProject;
  readme: string;
};

export type PackageModelToken = {
  name: string;
  file: string;
};

const logger = new Logger('PackagesGenerator');

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

  async createModel(packageName: string, name: string) {
    const workspace: Workspace = await readJSON(
      resolve(process.cwd(), 'angular.json')
    );

    const project = workspace.projects[packageName];

    if (!project) {
      throw new Error('Package not found');
    }

    const projectFolder = resolve(process.cwd(), project.root);
    const modelsFolder = resolve(projectFolder, 'src', 'lib', 'models');

    const template = `
      types:
        ${camel(name)}:
          id:
            type: string
            required: true
    `;

    await ensureDir(modelsFolder);
    await writeFile(resolve(modelsFolder, `${name}.yaml`), template);

    logger.log(`Model successfully created in ${packageName}/${name}`);
  }

  async getPackage(name: string): Promise<Package> {
    if (Object.keys(this.packages).length === 0) {
      await this.fetchPackages();
    }

    return this.packages[name];
  }

  async getPackages(): Promise<Package[]> {
    if (Object.keys(this.packages).length === 0) {
      await this.fetchPackages();
    }

    return Object.values(this.packages);
  }

  async getModels(packageName: string): Promise<PackageModelToken[]> {
    const pkg = await this.getPackage(packageName);

    return Promise.all(
      pkg.models.map((model) => this.getPackageModel(pkg, model.name))
    );
  }

  async getModel(
    packageName: string,
    name: string
  ): Promise<PackageModelToken> {
    const pkg = await this.getPackage(packageName);
    return this.getPackageModel(pkg, name);
  }

  private async fetchPackages() {
    const workspace: Workspace = await readJSON(
      resolve(process.cwd(), 'angular.json')
    );

    const packages: Package[] = (
      await Promise.all(
        Object.entries(workspace.projects).map(async ([name, project]) => {
          const projectFolder = resolve(process.cwd(), project.root);
          const isDirectory = (await lstat(projectFolder)).isDirectory();
          const readmePath = resolve(projectFolder, 'README.md');
          const readme = (await pathExists(readmePath))
            ? await readFile(readmePath, 'utf8')
            : '';

          if (!isDirectory) {
            return null;
          }

          const models = await this.fetchModels(project);

          return {
            name,
            models,
            project,
            readme,
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

  private async fetchModels(
    project: WorkspaceProject
  ): Promise<PackageModelToken[]> {
    const projectFolder = resolve(process.cwd(), project.root);
    const modelsFolder = resolve(projectFolder, 'src', 'lib', 'models');

    const modelsExists = await pathExists(modelsFolder);

    if (modelsExists) {
      const modelNames = await (
        await readdir(modelsFolder)
      ).filter((file) => file.endsWith('.yaml') || file.endsWith('.yml'));

      return Promise.all(
        modelNames.map(async (model) => {
          const hasExtension =
            model.endsWith('.yaml') || model.endsWith('.yml');
          const tokenPath = resolve(
            process.cwd(),
            project.root,
            'src',
            'lib',
            'models',
            hasExtension ? model : `${model}.yaml`
          );

          const content = await readFile(tokenPath, 'utf8');

          return {
            name: model.replace(extname(model), ''),
            file: model,
            ...parseYaml(content),
          };
        })
      );
    }

    return [];
  }

  private async getPackageModel(
    pkg: Package,
    model: string
  ): Promise<PackageModelToken> {
    const hasExtension = model.endsWith('.yaml') || model.endsWith('.yml');
    const tokenPath = resolve(
      process.cwd(),
      pkg.project.root,
      'src',
      'lib',
      'models',
      hasExtension ? model : `${model}.yaml`
    );

    const name = model.replace(extname(model), '');

    const content = await readFile(tokenPath, 'utf8');

    return { name, file: model, ...parseYaml(content) };
  }
}
