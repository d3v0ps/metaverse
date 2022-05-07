import { render } from '@central-factory/platforms/engines/handlebars/render';
import { resolve } from 'path';
import { JSONSchema } from '../json/types/json-schema';
import { getNameFromRef } from './utils/get-name-from-ref';

export type AugmentedJSONSchema = JSONSchema & {
  name: string;
  templateProperties: AugmentedJSONSchema[];
};

const templatePath = resolve(
  process.cwd(),
  'libs/platforms/src/lib/languages/json/templates/rxdb-schema.ts.hbs'
);

const removeRefs = (schema: JSONSchema, definitions: AugmentedJSONSchema[]) => {
  schema.properties = Object.entries(
    schema.properties as {
      [k: string]: JSONSchema;
    }
  ).reduce((acc, [name, prop]) => {
    let propSchema = prop;
    const objectProp = { type: 'object' } as JSONSchema;
    const ref = prop['$ref']
      ? (prop['$ref'] as string)
      : prop.type === 'array'
      ? ((prop.items as JSONSchema)['$ref'] as string)
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
      propSchema = { type: definition.type, enum: definition.enum };
    }

    if (definition.type === 'object') {
      // propSchema.items = definition;
      propSchema.items = objectProp;
    }

    return Object.assign(acc, { [name]: propSchema });
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
      removeRefs(currentSchema, params.definitions);
      return JSON.stringify(currentSchema, undefined, 2);
    },
  });
};
