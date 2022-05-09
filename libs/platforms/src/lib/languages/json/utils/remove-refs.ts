import { Logger } from '@nestjs/common';
import { AugmentedJSONSchema } from '../types/json-schema';
import { getNameFromRef } from './get-name-from-ref';

const logger = new Logger('Remove JSON Schema Refs');

export const removeRefs = (
  schema: AugmentedJSONSchema,
  definitions: AugmentedJSONSchema[]
) => {
  if (!schema.properties) {
    logger.warn(
      `Unable to remove properties for schema ${schema.name} with type ${schema.type}`
    );
    return;
  }

  schema.properties = Object.entries(
    schema.properties as {
      [k: string]: AugmentedJSONSchema;
    }
  ).reduce((acc, [name, prop]) => {
    let propSchema: any = prop;
    const objectProp = { type: 'object' } as AugmentedJSONSchema;
    const ref = prop['$ref']
      ? (prop['$ref'] as string)
      : prop.type === 'array'
      ? ((prop.items as AugmentedJSONSchema)['$ref'] as string)
      : undefined;

    if (!ref) {
      return Object.assign(acc, { [name]: propSchema });
    }

    const refName = getNameFromRef(ref);

    const definition = definitions.find((def) => def.name === refName);

    if (prop.type === 'array') {
      // propSchema.items = definition;
      propSchema.items = objectProp;
    }

    if (!definition) {
      return Object.assign(acc, { [name]: propSchema });
    }

    if (definition.enum) {
      // propSchema.items = definition;
      propSchema = {
        type: definition.type,
        enum: definition.enum,
      };
    }

    if (definition.type === 'object') {
      // propSchema.items = definition;
      propSchema.items = objectProp;
    }

    return Object.assign(acc, { [name]: propSchema });
  }, schema.definitions || {});

  return schema;
};
