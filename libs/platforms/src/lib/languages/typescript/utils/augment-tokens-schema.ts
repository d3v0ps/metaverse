import { TokensSchema, Typing } from '../../../__generated__/models';

const toProperty = (
  name: string,
  raw: string | { [key: string]: any; type?: string }
) => {
  if (typeof raw === 'string') {
    raw = { type: raw };
  }

  if (!raw.type) {
    throw new Error('Missing type');
  }

  const type = raw.type.endsWith('!') ? raw.type.slice(0, -1) : raw.type;
  const required = raw['required'] || raw.type.endsWith('!');
  const isUnion = raw.type.includes('|') || raw.type.includes('&');
  const isRecord = raw.type.startsWith('Record<');

  return {
    name,
    type,
    required,
    isUnion,
    isRecord,
    raw,
  };
};

const toType = (name: string, raw: Typing) => {
  const isUnion =
    raw['type'] &&
    typeof raw['type'] === 'string' &&
    (raw['type'].includes('|') || raw['type'].includes('&'))
      ? true
      : false;

  const isRecord =
    raw['type'] &&
    typeof raw['type'] === 'string' &&
    raw['type'].startsWith('Record<')
      ? true
      : false;

  const properties = Object.entries(raw).map(([name, value]) =>
    toProperty(name, value)
  );

  return {
    name,
    isUnion,
    isRecord,
    raw,
    properties,
  };
};

export const augmentTokensSchema = (schema: any): TokensSchema => {
  const types = Object.entries(
    (schema.types as Record<string, Typing>) || {}
  ).map(([name, properties]) => {
    return toType(name, properties);
  });

  return {
    name: schema.name,
    file: schema.file,
    types,
    roots: schema.roots || types.map((type) => type.name),
    imports: schema.imports
      ? (Object.entries(schema.imports) as unknown as [string, string]).map(
          ([name, path]) => ({ name, path })
        )
      : [],
    enums: schema.enums
      ? Object.entries(schema.enums).map(([name, properties]) => ({
          name,
          properties: Object.entries(
            properties as { [key: string]: string }
          ).map(([name, type]) => ({
            name,
            type,
          })),
        }))
      : [],
  };
};
