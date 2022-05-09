import { generateTypeScriptGqlTypesFromSchema } from '@central-factory/platforms/languages/gql/generate-ts-gql-types';
import { getRootTypeNamesFromSchema } from '@central-factory/platforms/languages/json/utils/get-root-type-names-from-schema';
import { generateRxDBSchemasFromSchema } from '@central-factory/platforms/languages/typescript/generate-rxdb-schema';
import { generateTypescriptTokens } from '@central-factory/platforms/languages/typescript/generate-tokens';
import { generateTypeScriptTypesFromSchema } from '@central-factory/platforms/languages/typescript/generate-types';
import { parseTypes } from '@central-factory/platforms/languages/typescript/parse-types';
import { Injectable, Logger } from '@nestjs/common';
import { outputJSON, pathExists, readdir, readFile, rmdir } from 'fs-extra';
import { extname, resolve } from 'path';
import { parse as parseYaml } from 'yaml';
import { PackagesService } from './packages.service';

const logger = new Logger('PackagesGenerator');

@Injectable()
export class PackagesGenerator {
  constructor(private service: PackagesService) {}

  async generate(packageNames?: string[]) {
    const packages = (await this.service.getPackages()).filter(
      (pkg) => !packageNames || packageNames.includes(pkg.name)
    );

    logger.log(
      'Will generate schemas for modules: ' +
        packages.map((pkg) => pkg.name).join(', ')
    );

    await Promise.all(
      packages.map(async (mod) => {
        const libFolder = resolve(
          process.cwd(),
          'libs',
          mod.name,
          'src',
          'lib'
        );
        const inputFolder = resolve(libFolder, 'models');
        const output = resolve(libFolder, '__generated__');

        await rmdir(output, { force: true, recursive: true } as any);

        const inputFolderExists = await pathExists(inputFolder);

        if (!inputFolderExists) {
          logger.verbose(`No models found for module: ${mod.name}`);
          return;
        }

        try {
          const tokens = (await readdir(inputFolder)).filter(
            (file) => file.endsWith('.yaml') || file.endsWith('.yml')
          );

          if (tokens.length) {
            await Promise.all(
              tokens.map(async (token) => {
                const input = resolve(inputFolder, token);
                const content = await readFile(input, 'utf8');
                const schema = await parseYaml(content);
                const extension = extname(token);

                schema.name = token.replace(extension, '');
                schema.file = input;
                await generateTypescriptTokens(
                  schema,
                  resolve(output, 'types', token.replace(extension, '.d.ts'))
                );
              })
            );
          }

          const filesFolder = tokens.length
            ? resolve(output, 'types')
            : inputFolder;

          const files = (await readdir(filesFolder)).filter((file) =>
            file.endsWith('index.d.ts')
          );

          return Promise.all(
            files.map(async (file) => {
              const input = resolve(filesFolder, file);
              const schema = await parseTypes(input);

              if (!schema) {
                logger.error(`Failed to parse module: ${mod} at ${input}`);
                return;
              }

              schema.title = mod.name;

              const rootTypeNames = getRootTypeNamesFromSchema('Root', schema);

              logger.log(
                `[${schema.title}]: Root definitions: [${rootTypeNames.join(
                  ', '
                )}]. Total: ${Object.keys(schema.definitions)?.length}`
              );

              return Promise.all([
                outputJSON(resolve(output, 'schema.json'), schema, {
                  spaces: 2,
                }),
                generateTypeScriptGqlTypesFromSchema(
                  schema,
                  resolve(output, 'gql', 'index.gql.ts')
                ),
                generateTypeScriptTypesFromSchema(
                  schema,
                  resolve(output, 'models')
                ),
                generateRxDBSchemasFromSchema(
                  schema,
                  resolve(output, 'collections')
                ),
              ]);
            })
          );
        } catch (err) {
          logger.error(err);
        }
      })
    );
  }
}
