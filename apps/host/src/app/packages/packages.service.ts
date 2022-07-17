import { augmentTokensSchema } from '@central-factory/platforms/languages/typescript/utils/augment-tokens-schema';
import { Logger } from '@nestjs/common';
import { camel } from 'case';
import {
  ensureDir,
  pathExists,
  readdir,
  readFile,
  readJSON,
  writeFile,
} from 'fs-extra';
import { extname, resolve } from 'path';
import { parse as parseYaml } from 'yaml';

import { Repository } from '@central-factory/persistence/repository';
import {
  Package,
  TokensSchema,
  Workspace,
  WorkspaceProject,
} from '@central-factory/platforms/__generated__/models';
import { lastValueFrom, Observable } from 'rxjs';

const logger = new Logger('PackagesService');

import { FSPackagesRepositoryAdapter } from '@central-factory/persistence/adapters/fs-packages.adapter';

type IdParam = string | string[];
export type PackagesQuery = {
  id?: IdParam;
  name?: string;
  type?: 'app' | 'lib';
};

export class PackagesService {
  constructor(private repository: Repository<Package, PackagesQuery>) {}

  getPackage(name: string): Observable<Package> {
    return this.repository.findOne({ name });
  }

  getPackages(): Observable<Package[]> {
    return this.repository.find();
  }

  createPackage(name: string, type: 'app' | 'lib') {
    return this.repository.insert({
      name,
      type,
    });
  }

  generatePackages(id: IdParam) {
    const adapter = this.repository.getAdapter<FSPackagesRepositoryAdapter>();
    if (!('generate' in adapter)) {
      throw new Error(
        `Generate not implemented in ${adapter.constructor.name}`
      );
    }

    return adapter.generate({ id });
  }

  retypePackage(name: string, type: 'app' | 'lib') {
    const adapter = this.repository.getAdapter<FSPackagesRepositoryAdapter>();
    if (!('retype' in adapter)) {
      throw new Error(
        `Generate not implemented in ${adapter.constructor.name}`
      );
    }

    return adapter.retype(name, type);
  }

  renamePackage(name: string, newName: string) {
    const adapter = this.repository.getAdapter<FSPackagesRepositoryAdapter>();
    if (!('rename' in adapter)) {
      throw new Error(
        `Generate not implemented in ${adapter.constructor.name}`
      );
    }

    return adapter.rename(name, newName);
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

  async getModels(packageName: string): Promise<TokensSchema[]> {
    const pkg = await lastValueFrom(this.getPackage(packageName));
    return Promise.all(
      (pkg as unknown as { models: { name: string }[] }).models.map((model) =>
        this.getPackageModel(pkg, model.name)
      )
    );
  }

  async getModel(packageName: string, name: string): Promise<TokensSchema> {
    const pkg = await lastValueFrom(this.getPackage(packageName));
    return this.getPackageModel(pkg, name);
  }

  private async fetchModels(
    project: WorkspaceProject
  ): Promise<TokensSchema[]> {
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

          return augmentTokensSchema({
            ...parseYaml(content),
            name: model.replace(extname(model), ''),
            file: model,
          });
        })
      );
    }

    return [];
  }

  private async getPackageModel(
    pkg: Package,
    model: string
  ): Promise<TokensSchema> {
    const hasExtension = model.endsWith('.yaml') || model.endsWith('.yml');
    const tokenPath = resolve(
      process.cwd(),
      (pkg as unknown as { project: WorkspaceProject }).project.root,
      'src',
      'lib',
      'models',
      hasExtension ? model : `${model}.yaml`
    );

    const name = model.replace(extname(model), '');

    const content = await readFile(tokenPath, 'utf8');

    const augmentedSchema = augmentTokensSchema({
      name,
      file: model,
      ...parseYaml(content),
    });

    if (name !== 'index') {
      augmentedSchema.roots = [];
    }

    return augmentedSchema;
  }
}
