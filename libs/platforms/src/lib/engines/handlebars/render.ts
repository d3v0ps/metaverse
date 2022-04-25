/* eslint-disable @typescript-eslint/no-explicit-any */
import { readFile } from 'fs-extra';
import handlebars from 'handlebars';

export const render = async <TParams = any>(
  template: string,
  params?: TParams,
  helpers: Record<
    string,
    (val: any, { fn }: { fn: (params: any) => string }) => string
  > = {}
): Promise<string> => {
  const hs = handlebars.create();

  Object.entries(helpers).forEach(([key, value]) => {
    hs.registerHelper(key, value);
  });

  const renderTemplate = hs.compile(await readFile(template, 'utf-8'));

  const render = renderTemplate(params);

  return render;
};
