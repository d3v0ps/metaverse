import type { HelperParams } from '@central-factory/platforms/engines/handlebars/helpers';
import { render } from '@central-factory/platforms/engines/handlebars/render';
import { Logger } from '@nestjs/common';
import { ensureDir, writeFile } from 'fs-extra';
import { dirname, resolve } from 'path';
import { AugmentedJSONSchema, JSONSchema } from '../json/types/json-schema';
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
