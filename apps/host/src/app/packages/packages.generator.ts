/* eslint-disable @typescript-eslint/no-unused-vars */

import { Generator } from '@central-factory/persistence/interfaces/generator';
import { pascalCase } from '@central-factory/platforms/engines/handlebars/helpers';
import { render } from '@central-factory/platforms/engines/handlebars/render';
import { asyncForEach } from '@central-factory/platforms/languages/typescript/std/async/foreach';
import { asyncReduce } from '@central-factory/platforms/languages/typescript/std/async/reduce';
import {
  Domain,
  Package,
  TokensSchema,
  TypeToken,
  Workspace,
} from '@central-factory/platforms/__generated__/models';
import { Logger } from '@nestjs/common';
import { ensureFile, readJSON, writeFile } from 'fs-extra';
import { extname, resolve } from 'path';
import * as prettier from 'prettier';
import { lastValueFrom } from 'rxjs';
import { DomainService } from '../domain/domain.service';
import { TemplateNode } from '../providers/generators.providers';

const logger = new Logger('PackagesGenerator');

export const templateNodeToString = (
  node: TemplateNode,
  level = 0,
  result = ''
) => {
  result = `${result}\nCREATED${Array(level + 3)
    .fill('..')
    .join('')}${node.name}`;
  if (node.children) {
    node.children.forEach(
      (child) => (result = templateNodeToString(child, level + 1, result))
    );
  }

  return result;
};

export class PackagesGenerator extends Generator {
  constructor(
    private domainsService: DomainService,
    private readonly generatorTemplates: Record<string, TemplateNode>
  ) {
    super();
  }

  async generate(packages?: Package[]) {
    const configPath = resolve(process.cwd(), 'angular.json');
    const workspace: Workspace = await readJSON(configPath);

    const domains = (
      await lastValueFrom(
        this.domainsService.find({ packages: packages.map((p) => p.name) })
      )
    ).map((domain) => ({
      domain,
      package: packages.find((pkg) => pkg.name === domain.name),
      project: Object.entries(workspace.projects).find(
        ([k, v]) => k === domain.name
      )[1],
    }));

    logger.log(
      'Will generate schemas for modules: ' +
        packages.map((pkg) => pkg.name).join(', ')
    );

    const output = await asyncReduce(
      domains,
      async (acc, { domain: d, project }) => {
        logger.log(`Now processing domain: ${d.name}`);

        await asyncForEach(
          Object.entries(this.generatorTemplates),
          async ([k, v]) =>
            acc.children.push(
              await this._generate(
                resolve(
                  process.cwd(),
                  project.sourceRoot,
                  project.projectType === 'library' ? 'lib' : 'app',
                  '__generated__'
                ),
                v,
                d
              )
            )
        );

        return acc;
      },
      {
        type: 'folder',
        name: '__generated__',
        children: [],
      } as TemplateNode
    );

    logger.log('Packages succesfully generated', templateNodeToString(output));

    return output;
  }

  private async _generate(
    baseUrl: string,
    node: TemplateNode,
    domain: Domain & { token?: TokensSchema }
  ) {
    if (node.children) {
      await asyncForEach(node.children, (child) =>
        this._generate(resolve(baseUrl, node.name), child, domain)
      );
    }

    if (node.name.includes('{...tokens}')) {
      return this.generateTokens(baseUrl, node, domain);
    }

    if (node.name.includes('{...roots}')) {
      return this.generateRoots(baseUrl, node, domain);
    }

    if (node.name.includes('index.')) {
      return this.renderTemplate(baseUrl, node, {
        ...domain,
        token: domain.tokens.find((token) => token.name === 'index'),
        index: true,
      } as unknown);
    }

    if (node.template) {
      return this.renderTemplate(baseUrl, node, domain);
    }

    return node;
  }

  private async generateTokens(
    baseUrl: string,
    node: TemplateNode,
    domain: Domain
  ) {
    await asyncForEach(
      domain.tokens.filter((token) => token.name !== 'index'),
      async (token) => {
        const tokenNode = {
          ...node,
          name: node.name.replace('{...tokens}', token.name),
        };

        try {
          const result = await this._generate(baseUrl, tokenNode, {
            ...domain,
            token,
          });
          return result;
        } catch (err) {
          console.error(`Error generating ${token.name}`, err);
          throw err;
        }
      }
    );
    return node;
  }

  private async generateRoots(
    baseUrl: string,
    node: TemplateNode,
    domain: Domain
  ) {
    const domainRoot = domain.tokens.find((token) => token.name === 'index');

    if (!domainRoot) {
      return;
    }

    const rootTypes: [TypeToken, TokensSchema][] = domain.tokens
      .reduce(
        (acc, token) =>
          acc.concat([
            [
              token.types.find((t) =>
                domainRoot.roots.includes(pascalCase(t.name))
              ),
              token,
            ],
          ]),
        []
      )
      .filter(([t]) => t);

    await asyncForEach(rootTypes, async ([type, token]) => {
      const rootNode = {
        ...node,
        name: node.name.replace('{...roots}', type.name),
      };

      try {
        const result = await this._generate(baseUrl, rootNode, {
          ...domain,
          token: {
            ...token,
            types: [type],
            roots: [type.name],
          },
        });
        return result;
      } catch (err) {
        console.error(`Error generating ${type.name}`, err);
        throw err;
      }
    });

    return node;
  }

  private async renderTemplate(
    baseUrl: string,
    node: TemplateNode,
    domain: Domain
  ) {
    const templateUrl = resolve(
      process.cwd(),
      'libs/platforms/src/lib/templates',
      `${node.template}${extname(node.name)}.hbs`
    );

    try {
      const outputUrl = resolve(baseUrl, node.name);

      node.content = await render(templateUrl, {
        ...domain,
        singleRegistry: {},
      });
      const formatted = node.content || prettier.format(node.content);
      await ensureFile(outputUrl);
      await writeFile(outputUrl, formatted, 'utf-8');
    } catch (err) {
      console.error(`Error rendering ${templateUrl}`, err);
      console.error('Node', node);
      return node;
    }
  }
}
