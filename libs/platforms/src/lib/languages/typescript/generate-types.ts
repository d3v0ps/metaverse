import type { HelperParams } from '@central-factory/platforms/engines/handlebars/helpers';
import { render } from '@central-factory/platforms/engines/handlebars/render';
import { Logger } from '@nestjs/common';
import { ensureDir, rmdir, writeFile } from 'fs-extra';
import { resolve } from 'path';
import { AugmentedJSONSchema, JSONSchema } from '../json/types/json-schema';
import { getSchemasFromRoot } from '../json/utils/get-schemas-from-root';
import { getType } from '../json/utils/get-type';

const logger = new Logger('Generate Typescript Types');

const typeTemplatePath = resolve(
  process.cwd(),
  'libs/platforms/src/lib/languages/typescript/templates/type.ts.hbs'
);

const indexTemplatePath = resolve(
  process.cwd(),
  'libs/platforms/src/lib/languages/typescript/templates/types-index.ts.hbs'
);

const typeProperty =
  (schemas: AugmentedJSONSchema[]) =>
  (
    properties: AugmentedJSONSchema['templateProperties'],
    { fn }: HelperParams
  ) => {
    if (!properties) {
      return '';
    }

    const propertiesRender = properties.map((property) => {
      const { tsType, decoratorType } = getType(property, schemas);
      return `${fn({ ...property, tsType, decoratorType })}`;
    });

    return propertiesRender.join('\n');
  };

export const generateTypeScriptTypesFromSchema = async (
  schema: JSONSchema,
  outputFolder: string
): Promise<void> => {
  const schemas = getSchemasFromRoot(schema);

  await rmdir(outputFolder, { recursive: true, force: true } as any);
  await ensureDir(outputFolder);

  // await Promise.all(
  //   schemas.map(async (schema) => {
  //     const content = await render(
  //       typeTemplatePath,
  //       {
  //         schema,
  //       },
  //       {
  //         typeProperty: typeProperty(schemas),
  //       }
  //     );
  //     await writeFile(
  //       resolve(outputFolder, `${kebabCase(schema.name)}.ts`),
  //       content
  //     );
  //   })
  // );

  const content = await render(
    indexTemplatePath,
    {
      schemas,
    },
    {
      typeProperty: typeProperty(schemas),
    }
  );

  await writeFile(resolve(outputFolder, 'index.ts'), content);

  logger.log(
    `[${schema.title}]: Generated. Total: ${
      Object.keys(schema.definitions as any)?.length
    }`
  );
};
