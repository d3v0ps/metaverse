/* eslint-disable @typescript-eslint/no-explicit-any */
import { readFile } from 'fs-extra';
import handlebars from 'handlebars';
import * as baseHelpers from './helpers';

export type Helper<T> = (val: T, { fn }: RenderHelperParams) => string;

export type RenderHelperParams = { fn: (params: any) => string };

export const render = async <TParams = any>(
  template: string,
  params?: TParams,
  helpers: Record<string, Helper<any>> = {}
): Promise<string> => {
  const hs = handlebars.create();

  Object.entries({ ...baseHelpers, ...helpers }).forEach(([key, value]) => {
    hs.registerHelper(key, value);
  });

  const renderTemplate = hs.compile(await readFile(template, 'utf-8'));

  const render = renderTemplate(params);

  return render;
};
