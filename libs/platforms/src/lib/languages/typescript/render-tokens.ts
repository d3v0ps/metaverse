import { render } from '@central-factory/platforms/engines/handlebars/render';
import { resolve } from 'path';
import { JSONSchema } from '../json/types/json-schema';

export type AugmentedJSONSchema = JSONSchema & {
  name: string;
  templateProperties: AugmentedJSONSchema[];
};

const templatePath = resolve(
  process.cwd(),
  'libs/platforms/src/lib/languages/typescript/templates/token.d.ts.hbs'
);

export const renderTokens = async (params: {
  definitions: AugmentedJSONSchema[];
}): Promise<string> => {
  return render(templatePath, params);
};
