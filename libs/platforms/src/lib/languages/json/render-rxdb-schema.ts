import { render } from '@central-factory/platforms/engines/handlebars/render';
import { resolve } from 'path';
import { JSONSchema } from '../json/types/json-schema';

export type AugmentedJSONSchema = JSONSchema & {
  name: string;
  templateProperties: AugmentedJSONSchema[];
};

const templatePath = resolve(
  process.cwd(),
  'libs/platforms/src/lib/languages/json/templates/rxdb-schema.ts.hbs'
);

const removeRefs = (schema: JSONSchema) => {
  schema.properties = Object.entries(
    schema.properties as {
      [k: string]: JSONSchema;
    }
  ).reduce((acc, [name, prop]) => {
    if (prop['$ref']) {
      delete prop['$ref'];
      prop.type = 'object';
    }

    if (prop.type === 'array') {
      delete (prop.items as JSONSchema)['$ref'];
      (prop.items as JSONSchema).type = 'object';
    }

    return Object.assign(acc, { [name]: prop });
  }, schema.definitions || {});

  return schema;
};

export const renderRxDBSchema = async (params: {
  definition: AugmentedJSONSchema;
  definitions: AugmentedJSONSchema[];
  schema: JSONSchema;
}): Promise<string> => {
  return render(templatePath, params, {
    ifObject: (schema: AugmentedJSONSchema, { fn }) =>
      schema.type === 'object' ? fn(schema) : '',
    ifEnum: (schema: AugmentedJSONSchema, { fn }) =>
      schema.type === 'string' && schema.enum ? fn(schema) : '',
    gqlSchema: (current: AugmentedJSONSchema, { fn }) => {
      const currentSchema: JSONSchema = (params.schema.definitions as any)[
        current.name
      ];
      // currentSchema.definitions = JSON.parse(
      //   JSON.stringify(params.schema.definitions)
      // );
      removeRefs(currentSchema);
      return JSON.stringify(currentSchema, undefined, 2);
    },
  });
};
