import type { HelperParams } from '@central-factory/platforms/engines/handlebars/helpers';
import { render } from '@central-factory/platforms/engines/handlebars/render';
import { Logger } from '@nestjs/common';
import { ensureDir, writeFile } from 'fs-extra';
import { dirname, resolve } from 'path';
import { AugmentedJSONSchema, JSONSchema } from '../json/types/json-schema';
import { getNameFromRef } from '../json/utils/get-name-from-ref';
import { getSchemasFromRoot } from '../json/utils/get-schemas-from-root';
import { getType } from '../json/utils/get-type';

const logger = new Logger('Generate GQL Types');

const templatePath = resolve(
  process.cwd(),
  'libs/platforms/src/lib/languages/gql/templates/gql-type.ts.hbs'
);

const gqlProperty =
  (schemas: AugmentedJSONSchema[]) =>
  (properties: AugmentedJSONSchema[], { fn }: HelperParams) => {
    const propertiesRender = properties.map((property) => {
      const { tsType, decoratorType } = getType(property, schemas);
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

export const generateTypeScriptGqlTypesFromSchema = async (
  schema: JSONSchema,
  output: string
): Promise<void> => {
  const schemas = getSchemasFromRoot(schema);

  const content = await render(
    templatePath,
    {
      schemas,
    },
    {
      gqlProperty: gqlProperty(schemas),
      ifRecord,
    }
  );

  await ensureDir(dirname(output));
  await writeFile(output, content);

  logger.log(
    `[${schema.title}]: Generated. Total: ${
      Object.keys(schema.definitions as any)?.length
    }`
  );
};
