import { readFile } from 'fs-extra';
import styleDictionary from 'style-dictionary';
import { renderTemplate } from '../../handlebars/render';

styleDictionary.registerTransform({
  name: 'log',
  type: 'value',
  matcher: (token) =>
    token.attributes &&
    token.attributes.category === 'type' &&
    token.attributes.type === 'package' &&
    token.attributes.item === 'name' &&
    token.attributes.subitem === 'type' &&
    token.attributes.state === 'string'
      ? true
      : false,
  transformer: (token) => token.value,
});

styleDictionary.registerTransformGroup({
  name: 'web',
  transforms: ['attribute/cti', 'log'],
});

styleDictionary.registerParser({
  pattern: /\.yaml$/,
  parse: ({ contents, filePath }) => {
    return JSON.parse(contents);
    // attach value prop at the end of each token property
  },
});

const hsFormatter = (template: string) => (params: any) =>
  renderTemplate(template, params);

export const registerTemplate = async (name: string) =>
  styleDictionary.registerFormat({
    name,
    formatter: hsFormatter(await readFile(name, 'utf-8')),
  });

export default styleDictionary;
