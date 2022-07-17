import { Logger } from '@nestjs/common';
import {
  EnumToken,
  Prop,
  RecommendationState,
  SymbolType,
  TokensSchema,
  TokensSchemaInput,
  TypeToken,
  Typing,
} from '../../../__generated__/models';

const logger = new Logger('augment-tokens-schema');

export const primitiveTypes = ['string', 'number', 'boolean', 'text', 'date'];
export const scalarTypes: string[] = [];

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

  const description = raw.$description || `The ${name} of the ${parent}`;

  return {
    id: `${parent}_${name}`,
    name,
    description,
    required,
    symbol,
    type,
    raw,
  };
};

const mapEnumValueTypingToProp = (
  value: string | Typing,
  name?: string
): Prop => {
  {
    switch (typeof value) {
      case 'string':
        return { name: name || value, type: value, description: value } as Prop;
      default:
        return {
          name: name || value.name,
          type: value.type,
          description: value.$description,
          label: value.$label || value.name,
        } as Prop;
    }
  }
};

const mapEnum = (
  typing: Typing | Record<string, string | Typing> | (string | Typing)[],
  name: string
): EnumToken => {
  if (Array.isArray(typing)) {
    return {
      name,
      properties: typing.map((t) => mapEnumValueTypingToProp(t)),
    };
  }

  const {
    name: typeName = name,
    type = 'enum',
    $description: description = `The enum ${name}`,
    $label: label,
    ...props
  } = typing;

  return {
    name: typeName,
    type,
    description,
    label,
    properties: Object.entries(props).map(([name, type]) =>
      mapEnumValueTypingToProp(type, name)
    ),
  } as EnumToken;
};

export const rawTypeIsString = (x: Typing | string): x is string =>
  typeof x === 'string';

export const toTypeNew = (name: string, raw: Typing | string): TypeToken => {
  const isString = rawTypeIsString(raw);
  raw = rawTypeIsString(raw) ? ({ type: raw } as Typing) : raw;

  const properties: Prop[] = Object.entries(raw)
    .filter(([pName]) => !pName.startsWith('$') && pName !== 'type')
    .map(([pName, pValue]) => toProperty(pName, pValue, name));
  const extendsType: string | undefined =
    raw.$extends || isString ? raw.type : undefined;
  const description: string | undefined =
    raw.$description || `The ${name} type`;
  const label: string | undefined = raw.$label || `The ${name} type`;

  const type: string | undefined =
    raw.type && typeof raw.type === 'string'
      ? raw.type?.endsWith('!')
        ? raw.type.slice(0, -1)
        : raw.type
      : undefined;

  const symbol = type ? getSymbol(type, SymbolType.Type) : SymbolType.Type;

  if (symbol === SymbolType.Scalar) {
    raw.type = extendsType;
  }

  return {
    name,
    description,
    label,
    properties,
    raw,
    symbol,
    extendsType,
  };
};

export const toType = (name: string, raw: Typing): TypeToken => {
  raw = typeof raw === 'string' ? { type: raw } : raw;

  let symbol = SymbolType.Type;
  let properties: Prop[] = [];
  const extendsType = raw.$extends;
  const description = raw.$description || `The ${name} type`;

  if (raw.type && typeof raw.type === 'string') {
    // Fix wrong type names from schema.org
    raw.type = raw.type.replace('URL', 'Url');
    const type = raw.type.endsWith('!') ? raw.type.slice(0, -1) : raw.type;
    symbol = getSymbol(type, SymbolType.Alias);
  } else {
    properties = Object.entries(raw)
      .filter(([pName]) => !pName.startsWith('$'))
      .map(([pName, pValue]) => toProperty(pName, pValue, name));
  }

  const result = {
    name,
    properties,
    raw,
    symbol,
    extendsType,
    description,
  };
  // const newResult = toTypeNew(name, raw);
  return result;
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
    enums: Object.entries(schema.enums || {}).map(([name, properties]) =>
      mapEnum(properties, name)
    ),
  };
};
