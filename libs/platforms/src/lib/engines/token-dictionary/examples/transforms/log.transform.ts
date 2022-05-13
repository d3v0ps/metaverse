import TokenDictionary, { Transform } from 'style-dictionary';

export const logTransform: TokenDictionary.Named<Transform> = {
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
};
