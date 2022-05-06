import { Logger } from '@nestjs/common';
import { kebab as kebabCase } from 'case';
import { ensureDir, writeFile } from 'fs-extra';
import { resolve } from 'path';
import { JSONSchema } from '../json/types/json-schema';
import { getNameFromRef } from '../json/utils/get-name-from-ref';
import { renderRxDBIndex } from './render-rxdb-index';
import { renderRxDBSchema } from './render-rxdb-schema';

const logger = new Logger('Generate RxDB Schemas');

export const generateRxDBSchemasFromSchema = async (
  schema: JSONSchema,
  outputFolder: string
): Promise<void> => {
  if (!schema.definitions) {
    throw new Error(`Schema ${schema.title} does not contain definitions`);
  }

  logger.verbose(
    `[${
      schema.title
    }]: Generating schemas for the following root definitions: [${schema.definitions[
      'Root'
    ].anyOf
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      ?.map((x) => getNameFromRef(x.$ref!))
      .join(', ')}]. Total definitions found: ${
      Object.keys(schema.definitions)?.length
    }`
  );

  const schemaDefinitions = Object.assign({}, schema.definitions);
  const rootTypes = schemaDefinitions['Root'].anyOf as any as JSONSchema[];
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const rootTypeNames = rootTypes.map((x) => getNameFromRef(x.$ref!));
  delete schemaDefinitions['Root'];

  const definitions = Object.entries(schemaDefinitions).map(
    ([name, schema]) => ({
      ...schema,
      name,
      templateProperties: schema.properties
        ? Object.entries(schema.properties).map(([name, propSchema]) => {
            const requiredInRoot = Array.isArray(schema.required)
              ? schema.required?.includes(name)
              : false;

            return {
              ...propSchema,
              name,
              required:
                requiredInRoot ||
                (Array.isArray(propSchema.required)
                  ? propSchema.required?.includes(name)
                  : propSchema.required === true),
              templateProperties: [],
            };
          })
        : [],
    })
  );

  const rootDefinitions = definitions.filter((def) =>
    rootTypeNames.includes(def.name)
  );

  await ensureDir(outputFolder);
  await Promise.all(
    rootDefinitions.map(async (definition) => {
      const content = await renderRxDBSchema({
        schema,
        definition,
        definitions,
      });

      await writeFile(
        resolve(outputFolder, `${kebabCase(definition.name)}.ts`),
        content
      );
    })
  );

  const indexContent = await renderRxDBIndex({
    schema,
    rootDefinitions,
    definitions,
  });
  await writeFile(resolve(outputFolder, `index.ts`), indexContent);
};
