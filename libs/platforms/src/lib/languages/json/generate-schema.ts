import { Logger } from '@nestjs/common';
import { kebab as kebabCase } from 'case';
import { ensureDir, writeFile } from 'fs-extra';
import { resolve } from 'path';
import { JSONSchema } from '../json/types/json-schema';
import { renderRxDBIndex } from './render-rxdb-index';
import { renderRxDBSchema } from './render-rxdb-schema';
import { getRootTypeNamesFromSchema } from './utils/get-root-type-names-from-schema';

const logger = new Logger('Generate RxDB Schemas');

export const generateRxDBSchemasFromSchema = async (
  schema: JSONSchema,
  outputFolder: string
): Promise<void> => {
  if (!schema.definitions) {
    throw new Error(`Schema ${schema.title} does not contain definitions`);
  }

  const schemaDefinitions = Object.assign({}, schema.definitions);
  const rootTypeNames = getRootTypeNamesFromSchema('Root', schema);

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
