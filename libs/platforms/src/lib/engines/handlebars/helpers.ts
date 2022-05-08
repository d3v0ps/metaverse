import { AugmentedJSONSchema } from '../../languages/json/types/json-schema';

export type HelperParams = { fn: (params: any) => string };

export {
  camel as camelCase,
  constant as constantCase,
  kebab as kebabCase,
  pascal as pascalCase,
  title as capitalCase,
  title as titleCase,
} from 'case';

export const pluralize = (word: string): string => `${word}s`;

export const ifObject = (schema: AugmentedJSONSchema, { fn }: HelperParams) =>
  schema.type === 'object' ? fn(schema) : '';

export const ifEnum = (schema: AugmentedJSONSchema, { fn }: HelperParams) =>
  schema.type === 'string' && schema.enum ? fn(schema) : '';
