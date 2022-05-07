import { Logger } from '@nestjs/common';
import { ensureDir, writeFile } from 'fs-extra';
import { dirname } from 'path';
import { JSONSchema } from '../json/types/json-schema';
import { getType } from '../json/utils/get-type';
import { AugmentedJSONSchema, renderGqlTypes } from './render-gql-types';

const logger = new Logger('Generate GQL Types');

export const generateTypeScriptGqlTypesFromSchema = async (
  schema: JSONSchema,
  output: string
): Promise<void> => {
  const definitions = Object.assign({}, schema.definitions);
  delete definitions['Root'];

  const namedDefinitions = Object.entries(definitions).map(
    ([name, definition]) => ({ ...definition, name })
  );

  const templateParams = {
    definitions: Object.entries(definitions).reduce<AugmentedJSONSchema[]>(
      (acc, [name, schema]) => {
        let resultSchema = schema;
        if (schema.allOf || schema.anyOf || schema.$ref) {
          const { result } = getType(schema, namedDefinitions);
          resultSchema = result
            .map((ref) => definitions[ref])
            .reduce(
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
                type: 'object',
                properties: {},
                required: [],
              }
            );
        }

        const result: AugmentedJSONSchema = {
          ...resultSchema,
          name,
          templateProperties: resultSchema.properties
            ? Object.entries(resultSchema.properties).map(
                ([name, propSchema]) => ({
                  ...propSchema,
                  name,
                  required: Array.isArray(propSchema.required)
                    ? propSchema.required?.includes(name)
                    : propSchema.required === true,
                  templateProperties: [],
                })
              )
            : [],
        };

        acc.push(result);

        return acc;
      },
      []
    ),
  };

  const content = await renderGqlTypes(templateParams);

  await ensureDir(dirname(output));
  await writeFile(output, content);
};
