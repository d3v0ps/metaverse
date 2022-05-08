export { JSONSchema4 as JSONSchema } from 'json-schema';

export type AugmentedJSONSchema = JSONSchema & {
  name: string;
  templateProperties: AugmentedJSONSchema[];
};
