import { generateTypeScriptGqlTypesFromSchema } from '@central-factory/platforms/languages/gql/generate-ts-gql-types';
import { getRootTypeNamesFromSchema } from '@central-factory/platforms/languages/json/utils/get-root-type-names-from-schema';
import { generateRxDBSchemasFromSchema } from '@central-factory/platforms/languages/typescript/generate-rxdb-schema';
import { generateTypescriptTokens } from '@central-factory/platforms/languages/typescript/generate-tokens';
import { generateTypeScriptTypesFromSchema } from '@central-factory/platforms/languages/typescript/generate-types';
import { parseTypes } from '@central-factory/platforms/languages/typescript/parse-types';
import { Logger } from '@nestjs/common';
import { outputJSON, readdir, readFile } from 'fs-extra';
import { extname, resolve } from 'path';
import { parse as parseYaml } from 'yaml';
import { environment } from './environments/environment';

const logger = new Logger('Generator');

(async () => {
  const modules = environment.modules;
  logger.log('Will generate schemas for modules: ' + modules.join(', '));

  await Promise.all(
    modules.map(async (mod) => {
      const libFolder = resolve(process.cwd(), 'libs', mod, 'src', 'lib');
      const inputFolder = resolve(libFolder, 'models');
      const output = resolve(libFolder, '__generated__');

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
              logger.log(`module: ${mod}`);
              logger.error(`Failed to parse ${input}`);
              return;
            }

            schema.title = mod;

            const rootTypeNames = getRootTypeNamesFromSchema('Root', schema);

            logger.verbose(
              `[${schema.title}]: Root definitions: [${rootTypeNames.join(
                ', '
              )}]. Total: ${Object.keys(schema.definitions)?.length}`
            );

            return Promise.all([
              outputJSON(resolve(output, 'schema.json'), schema, { spaces: 2 }),
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
})();
