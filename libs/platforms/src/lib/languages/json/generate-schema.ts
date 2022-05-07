import { Logger } from '@nestjs/common';
import { kebab as kebabCase } from 'case';
import { ensureDir, writeFile } from 'fs-extra';
import { resolve } from 'path';
import { JSONSchema } from '../json/types/json-schema';
import { renderRxDBIndex } from './render-rxdb-index';
import { renderRxDBSchema } from './render-rxdb-schema';
import { getRootTypeNamesFromSchema } from './utils/get-root-type-names-from-schema';
import { getType } from './utils/get-type';

const logger = new Logger('Generate RxDB Schemas');

export const generateRxDBSchemasFromSchema = async (
  schema: JSONSchema,
  outputFolder: string
): Promise<void> => {
  const schemaDefinitions = Object.assign({}, schema.definitions);
  const rootTypeNames = getRootTypeNamesFromSchema('Root', schema);
  const namedDefinitions = Object.entries(schemaDefinitions).map(
    ([name, definition]) => ({ ...definition, name })
  );

  delete schemaDefinitions['Root'];

  const definitions = namedDefinitions.map((definition) => {
    let schema: JSONSchema & { name: string } = definition;
    if (definition.allOf || definition.anyOf || definition.$ref) {
      const { result } = getType(definition, namedDefinitions);
      schema = result
        .map((ref) => schemaDefinitions[ref] as JSONSchema)
        .reduce<typeof schema>(
          (acc, def) => ({
            ...acc,
            properties: {
              ...acc.properties,
              ...def.properties,
            },
            required: Array.isArray(acc.required)
              ? acc.required.concat(def.required as string[])
              : (def.required as string[]),
          }),
          {
            name: definition.name,
            type: 'object',
            properties: {},
            required: [],
          }
        );
    }

    return {
      ...schema,
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
    };
  });

  const rootDefinitions = definitions.filter((def) =>
    rootTypeNames.includes(def.name)
  );

  await ensureDir(outputFolder);
  await Promise.all(
    rootDefinitions.map(async (definition) => {
      const name = definition.name;
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
