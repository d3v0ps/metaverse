import { JSONSchema } from '../types/json-schema';
import { getNameFromRef } from './get-name-from-ref';

export const getType = ({
  name,
  type,
  items,
  $ref,
}: JSONSchema): {
  type: string;
  tsType: string;
  decoratorType?: string;
} => {
  switch (type) {
    case 'number':
    case 'string':
    case 'boolean':
      return { type, tsType: type };
    case 'array':
      // eslint-disable-next-line no-case-declarations
      const itemSchema = Array.isArray(items) ? items[0] : items;

      if (!itemSchema) {
        throw new Error(`Item Schema for array ${name} is not defined`);
      }

      // eslint-disable-next-line no-case-declarations
      const { type: itemType, tsType: itemTsType } = getType(itemSchema);

      return {
        type,
        tsType: `${itemTsType}[]`,
        decoratorType:
          itemType === 'array' || itemType === 'any'
            ? `[]`
            : `[${itemTsType[0].toUpperCase() + itemTsType.substring(1)}]`,
      };
    default:
      if ($ref) {
        const itemType = getNameFromRef($ref);
        return {
          type: itemType,
          tsType: itemType,
          decoratorType: `${itemType}`,
        };
      }
      break;
  }

  return { type: 'any', tsType: 'any' };
};
