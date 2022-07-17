import type { HelperParams } from '@central-factory/platforms/engines/handlebars/helpers';
import { render } from '@central-factory/platforms/engines/handlebars/render';
import { Logger } from '@nestjs/common';
import { ensureDir, writeFile } from 'fs-extra';
import { resolve } from 'path';
import { AugmentedJSONSchema, JSONSchema } from '../json/types/json-schema';
import { getNameFromRef } from '../json/utils/get-name-from-ref';
import { getSchemasFromRoot } from '../json/utils/get-schemas-from-root';
import { getType } from '../json/utils/get-type';

const logger = new Logger('generateTypeScriptTypesFromSchema');

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
      const { tsType, decoratorType } = getType(
        { name: property.name },
        {
          tokens: schemas as any,
        }
      );
      return `${fn({ ...property, tsType, decoratorType })}`;
    });

    return propertiesRender.join('\n');
  };

const ifRecord = (schema: AugmentedJSONSchema, { fn }: HelperParams) => {
  const isRecord =
    schema.type === 'object' && !schema.templateProperties?.length;
  const typeRef =
    typeof schema.additionalProperties === 'object'
      ? schema.additionalProperties.$ref
      : undefined;

  if (!isRecord || !typeRef) {
    return '';
  }

  const name = getNameFromRef(typeRef);

  return isRecord ? fn({ key: 'string', value: name }) : '';
};

export const generateTypeScriptTypesFromSchema = async (
  schema: JSONSchema,
  outputFolder: string
): Promise<void> => {
  const schemas = getSchemasFromRoot(schema);

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
      ifRecord,
    }
  );

  await writeFile(resolve(outputFolder, 'index.ts'), content);

  logger.log(
    `[${schema.title}]: Generated. Total: ${
      Object.keys(schema.definitions as any)?.length
    }`
  );
};
