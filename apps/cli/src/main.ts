import { generateTypeScriptGqlTypesFromSchema } from '@central-factory/platforms/languages/gql/generate-ts-gql-types';
import { generateRxDBSchemasFromSchema } from '@central-factory/platforms/languages/json/generate-schema';
import { generateTypeScriptTypesFromSchema } from '@central-factory/platforms/languages/typescript/generate-types';
import { parseTypes } from '@central-factory/platforms/languages/typescript/parse-types';
import { Logger } from '@nestjs/common';
import { outputJSON, readdir } from 'fs-extra';
import { resolve } from 'path';
import { environment } from './environments/environment';

const logger = new Logger('Main');

(async () => {
  const modules = environment.modules;
  logger.log('Will generate schemas for modules: ' + modules.join(', '));

  await Promise.all(
    modules.map(async (mod) => {
      const inputFolder = resolve(
        process.cwd(),
        'libs',
        mod,
        'src',
        'lib',
        'models'
      );
      try {
        const files = (await readdir(inputFolder)).filter((file) =>
          file.endsWith('index.d.ts')
        );

        return Promise.all(
          files.map(async (file) => {
            const input = resolve(inputFolder, file);
            const output = resolve(inputFolder, '__generated__');
            const schema = await parseTypes(input);

            if (!schema) {
              logger.log(`module: ${mod}`);
              logger.error(`Failed to parse ${input}`);
              return;
            }

            schema.title = mod;

            return Promise.all([
              outputJSON(resolve(output, 'schema.json'), schema, { spaces: 2 }),
              generateTypeScriptGqlTypesFromSchema(
                schema,
                resolve(output, 'gql', 'index.gql.ts')
              ),
              generateTypeScriptTypesFromSchema(
                schema,
                resolve(output, 'types', 'index.ts')
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
