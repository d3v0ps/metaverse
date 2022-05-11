import { JSONSchema4 as JSONSchema } from 'json-schema';

export { JSONSchema4 as JSONSchema } from 'json-schema';

export type NamedJSONSchema = JSONSchema & { name: string };

export type AugmentedJSONSchema = NamedJSONSchema & {
  templateProperties?: AugmentedJSONSchema[];
  typeProperties?: any[];
};
