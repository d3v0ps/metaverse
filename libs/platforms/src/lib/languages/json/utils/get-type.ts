import { JSONSchema } from '../types/json-schema';
import { getNameFromRef } from './get-name-from-ref';

export const getType = (
  { name, type, items, $ref, allOf, anyOf }: JSONSchema,
  definitions: JSONSchema[]
): {
  result: string[];
  type: string;
  tsType: string;
  decoratorType?: string;
} => {
  if (anyOf) {
    return anyOf.reduce(
      (acc, schema) => {
        const { type, tsType, decoratorType, result } = getType(
          schema,
          definitions
        );

        return {
          ...acc,
          type: acc.type ? [acc.type, type].join(' | ') : type,
          tsType: acc.tsType ? [acc.tsType, tsType].join(' | ') : tsType,
          decoratorType,
          result: acc.result.concat(result),
        };
      },
      { type: '', tsType: '', result: [] as string[] }
    );
  }

  if (allOf) {
    return allOf.reduce(
      (acc, schema) => {
        const { type, tsType, decoratorType, result } = getType(
          schema,
          definitions
        );

        return {
          ...acc,
          type: acc.type ? [acc.type, type].join(' & ') : type,
          tsType: acc.tsType ? [acc.tsType, tsType].join(' & ') : tsType,
          decoratorType,
          result: acc.result.concat(result),
        };
      },
      { type: '', tsType: '', result: [] as string[] }
    );
  }

  switch (type) {
    case 'number':
    case 'string':
    case 'boolean':
      return { type, tsType: type, result: [type] };
    case 'array':
      // eslint-disable-next-line no-case-declarations
      const itemSchema = Array.isArray(items) ? items[0] : items;

      if (!itemSchema) {
        throw new Error(`Item Schema for array ${name} is not defined`);
      }

      // eslint-disable-next-line no-case-declarations
      const { type: itemType, tsType: itemTsType } = getType(
        itemSchema,
        definitions
      );

      return {
        type,
        tsType: `${itemTsType}[]`,
        decoratorType:
          itemType === 'array' || itemType === 'any'
            ? `[]`
            : `[${itemTsType[0].toUpperCase() + itemTsType.substring(1)}]`,
        result: [type],
      };
    default:
      if ($ref) {
        const itemType = getNameFromRef($ref);
        return {
          type: itemType,
          tsType: itemType,
          decoratorType: `${itemType}`,
          result: [itemType],
        };
      }
      break;
  }

  return { type: 'any', tsType: 'any', result: ['any'] };
};
