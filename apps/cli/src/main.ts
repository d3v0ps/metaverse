import { generateTypescriptGqlTypesFromFolder } from '@central-factory/platforms/languages/gql/generate-ts-gql-types';
import { generateTypescriptTypesFromFolder } from '@central-factory/platforms/languages/typescript/generate-types';
import { Logger } from '@nestjs/common';
import { resolve } from 'path';

const logger = new Logger('Main');

(async () => {
  const modules = ['worlds', 'finances'];

  await Promise.all(
    modules.map(async (module) => {
      const inputFolder = resolve(
        process.cwd(),
        'libs',
        module,
        'src',
        'lib',
        'models'
      );
      try {
        console.log('inputFolder', inputFolder);
        return Promise.all([
          generateTypescriptGqlTypesFromFolder(inputFolder),
          generateTypescriptTypesFromFolder(inputFolder),
        ]);
      } catch (err) {
        logger.error(err);
      }
    })
  );
})();
