import { Logger } from '@nestjs/common';
import {
  Prop,
  RecommendationState,
  SymbolType,
  TokensSchema,
  TokensSchemaInput,
  TypeToken,
  Typing,
} from '../../../__generated__/models';

const logger = new Logger('augment-tokens-schema');

export const primitiveTypes = ['string', 'number', 'boolean'];
export const scalarTypes = [
  'Number',
  'Date',
  'DateTime',
  'Text',
  'Url',
  'Integer',
  'Float',
  'CssSelectorType',
  'XPathType',
  'Time',
];

export const getSymbol = (
  type: string,
  defaultType = SymbolType.Type
): SymbolType => {
  if (type.includes('|') || type.includes('&')) {
    return SymbolType.Union;
  }

  if (type.startsWith('Record<')) {
    return SymbolType.Record;
  }

  if (type.startsWith('Array<') || type.endsWith('[]')) {
    return SymbolType.Array;
  }

  if (primitiveTypes.includes(type.toLowerCase())) {
    return SymbolType.Primitive;
  }

  if (scalarTypes.includes(type)) {
    return SymbolType.Scalar;
  }

  return defaultType;
};

export const toProperty = (
  name: string,
  raw: string | Typing,
  parent: string
): Prop => {
  if (typeof raw === 'string') {
    raw = { type: raw } as Typing;
  }

  if (!raw.type) {
    logger.error('raw', raw);
    throw new Error('Missing type');
  }

  // Fix wrong type names from schema.org
  raw.type = raw.type.replace('URL', 'Url');

  const type = raw.type.endsWith('!') ? raw.type.slice(0, -1) : raw.type;
  const required = (raw['required'] as boolean) || raw.type.endsWith('!');
  const symbol = getSymbol(type);

  return {
    id: `${parent}_${name}`,
    name,
    required,
    symbol,
    type,
    raw,
  };
};

const mapEnumProperties = (
  properties: Record<string, string> | string[]
): Prop[] =>
  Array.isArray(properties)
    ? properties.map((p) => ({ name: p, type: p } as Prop))
    : Object.entries(properties).map(
        ([name, type]) =>
          ({
            name,
            type,
          } as Prop)
      );

export const toType = (name: string, raw: Typing): TypeToken => {
  raw = typeof raw === 'string' ? { type: raw } : raw;

  let symbol = SymbolType.Type;
  let properties: Prop[] = [];
  let extendsType: string | undefined = undefined;

  if (raw.type && typeof raw.type === 'string') {
    // Fix wrong type names from schema.org
    raw.type = raw.type.replace('URL', 'Url');
    const type = raw.type.endsWith('!') ? raw.type.slice(0, -1) : raw.type;
    symbol = getSymbol(type, SymbolType.Alias);
  } else {
    extendsType = raw.$extends;
    properties = Object.entries(raw)
      .filter(([pName]) => !pName.startsWith('$'))
      .map(([pName, pValue]) => toProperty(pName, pValue, name));
  }

  return {
    name,
    properties,
    raw,
    symbol,
    extendsType,
  };
};

export const augmentTokensSchema = (
  schema: TokensSchemaInput
): TokensSchema => {
  return {
    name: schema.name || 'Schema',
    domain: schema.domain || 'Metaverse',
    state: schema.state || RecommendationState.workingDraft,
    file: schema.file || 'schema.yml',
    types: Object.entries(schema.types || {}).map(([name, properties]) =>
      toType(name.replace('URL', 'Url'), properties as Typing)
    ),
    roots: schema.roots || [] /** || types.map((type) => type.name) **/,
    imports: Object.entries(schema.imports || {}).map(([name, path]) => ({
      name,
      path,
    })),
    enums: Object.entries(schema.enums || {}).map(([name, properties]) => ({
      name,
      properties: mapEnumProperties(properties),
    })),
  };
};
