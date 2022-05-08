import {
  AugmentedJSONSchema,
  JSONSchema,
  NamedJSONSchema,
} from '../types/json-schema';
import { getType } from './get-type';

export const parseUnionTypes = (
  schema: NamedJSONSchema,
  definitions: NamedJSONSchema[]
): AugmentedJSONSchema => {
  const { result } = getType(schema, definitions);
  return result
    .map(
      (ref) => definitions.find((def) => def.name === ref) as NamedJSONSchema
    )
    .reduce<AugmentedJSONSchema>(
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
        ...schema,
        name: schema.name,
        type: 'object',
        properties: {},
        required: [],
        templateProperties: [],
      }
    );
};

export const isUnion = (schema: JSONSchema): boolean =>
  schema.allOf || schema.anyOf || schema.$ref ? true : false;

export const augmentSchema = (
  schema: NamedJSONSchema,
  definitions: NamedJSONSchema[]
): AugmentedJSONSchema => {
  schema = isUnion(schema) ? parseUnionTypes(schema, definitions) : schema;

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
};
