import { AugmentedJSONSchema } from '../../languages/json/types/json-schema';

export {
  camel as camelCase,
  constant as constantCase,
  kebab as kebabCase,
  pascal as pascalCase,
  title as capitalCase,
  title as titleCase,
} from 'case';

export const pluralize = (word: string): string => `${word}s`;

export const ifObject = (
  schema: AugmentedJSONSchema,
  { fn }: { fn: (params: any) => string }
) => (schema.type === 'object' ? fn(schema) : '');

export const ifEnum = (
  schema: AugmentedJSONSchema,
  { fn }: { fn: (params: any) => string }
) => (schema.type === 'string' && schema.enum ? fn(schema) : '');
