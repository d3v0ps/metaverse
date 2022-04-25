import { JSONSchema } from '../types/json-schema';
import { getNameFromRef } from './get-name-from-ref';
export const getSchemaFromRef = (
  ref: string,
  schemas: Record<string, JSONSchema>
): JSONSchema => schemas[getNameFromRef(ref)];
