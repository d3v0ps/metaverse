import { JSONSchema } from '../types/json-schema';
import { getNameFromRef } from './get-name-from-ref';

export const getRootTypeNamesFromSchema = (
  rootType: string,
  schema: JSONSchema
) => {
  const schemaDefinitions = Object.assign({}, schema.definitions);

  const rootTypes = schemaDefinitions[rootType].anyOf
    ? (schemaDefinitions[rootType].anyOf as any as JSONSchema[])
    : [schemaDefinitions[rootType]];
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const rootTypeNames = rootTypes.map((x) => getNameFromRef(x.$ref!));

  return rootTypeNames;
};
