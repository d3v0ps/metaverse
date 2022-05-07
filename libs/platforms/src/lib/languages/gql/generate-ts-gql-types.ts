import { Logger } from '@nestjs/common';
import { ensureDir, writeFile } from 'fs-extra';
import { dirname } from 'path';
import { JSONSchema } from '../json/types/json-schema';
import { renderGqlTypes } from './render-gql-types';

const logger = new Logger('Generate GQL Types');

export const generateTypeScriptGqlTypesFromSchema = async (
  schema: JSONSchema,
  output: string
): Promise<void> => {
  if (!schema.definitions) {
    throw new Error(`Schema ${schema.title} does not contain definitions`);
  }

  const definitions = Object.assign({}, schema.definitions);
  delete definitions['Root'];

  const templateParams = {
    definitions: Object.entries(definitions).map(([name, schema]) => ({
      ...schema,
      name,
      templateProperties: schema.properties
        ? Object.entries(schema.properties).map(([name, propSchema]) => ({
            ...propSchema,
            name,
            required: Array.isArray(propSchema.required)
              ? propSchema.required?.includes(name)
              : propSchema.required === true,
            templateProperties: [],
          }))
        : [],
    })),
  };

  const content = await renderGqlTypes(templateParams);

  await ensureDir(dirname(output));
  await writeFile(output, content);
};
