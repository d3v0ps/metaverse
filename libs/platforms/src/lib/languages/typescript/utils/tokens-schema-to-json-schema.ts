import {
  Prop,
  TokensSchema,
  TypeToken,
} from '@central-factory/platforms/__generated__/models';
import { JSONSchema, JSONSchemaTypeName } from '../../json/types/json-schema';

const isPrimitive = (prop: Prop) =>
  prop.type === 'string' || prop.type === 'number' || prop.type === 'boolean';

export const typeTokenToJsonSchemaDefinition = (
  token: TypeToken
): JSONSchema => ({
  type: 'object',
  additionalProperties: false,
  properties: token.properties.reduce((acc, prop) => {
    const type = (
      isPrimitive(prop) ? prop.type : 'object'
    ) as JSONSchemaTypeName;
    const def: JSONSchema = {
      type,
    };

    if (!isPrimitive(prop)) {
      def.$ref = `#/definitions/${prop.type}`;
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return { ...acc, [prop.name!]: def };
  }) as JSONSchema['properties'],
});

export const tokensSchemaToJsonSchema = (
  tokenSchema: TokensSchema
): JSONSchema => {
  return {
    $ref: '#/definitions/Root',
    $schema: 'http://json-schema.org/draft-06/schema#',
    definitions: tokenSchema.types.reduce(
      (acc, type) => ({
        ...acc,
        [type.name]: typeTokenToJsonSchemaDefinition(type),
      }),
      {}
    ),
  };
};
