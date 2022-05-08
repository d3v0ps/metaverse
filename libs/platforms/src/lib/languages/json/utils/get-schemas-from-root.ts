import { AugmentedJSONSchema, JSONSchema } from '../types/json-schema';
import { augmentSchema } from './augment-schema';

export const getSchemasFromRoot = (
  schema: JSONSchema,
  rootType = 'Root'
): AugmentedJSONSchema[] => {
  const schemaDefinitions = Object.assign({}, schema.definitions);
  delete schemaDefinitions[rootType];
  const namedSchemas = Object.entries(schemaDefinitions).map(
    ([name, definition]) => ({ ...definition, name })
  );

  return namedSchemas.map((schema) => augmentSchema(schema, namedSchemas));
};
