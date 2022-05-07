import { render } from '@central-factory/platforms/engines/handlebars/render';
import { resolve } from 'path';
import { JSONSchema } from '../json/types/json-schema';
import { getType } from '../json/utils/get-type';

export type AugmentedJSONSchema = JSONSchema & {
  name: string;
  templateProperties: AugmentedJSONSchema[];
};

const templatePath = resolve(
  process.cwd(),
  'libs/platforms/src/lib/languages/gql/templates/gql-type.ts.hbs'
);

export const renderGqlTypes = async (params: {
  definitions: AugmentedJSONSchema[];
}): Promise<string> => {
  return render(templatePath, params, {
    ifObject: (
      schema: AugmentedJSONSchema,
      { fn }: { fn: (params: any) => string }
    ) => {
      return schema.type === 'object' ? fn(schema) : '';
    },
    ifEnum: (
      schema: AugmentedJSONSchema,
      { fn }: { fn: (params: any) => string }
    ) => (schema.type === 'string' && schema.enum ? fn(schema) : ''),
    gqlProperty: (
      properties: AugmentedJSONSchema['templateProperties'],
      { fn }: { fn: (params: any) => string }
    ) => {
      const propertiesRender = properties.map((property) => {
        const { tsType, decoratorType } = getType(property, params.definitions);
        return `${fn({ ...property, tsType, decoratorType })}`;
      });

      return propertiesRender.join('\n');
    },
  });
};
