import * as cases from 'case';
import { capital, pascal } from 'case';
import * as _pluralize from 'pluralize';
import { AugmentedJSONSchema } from '../../languages/json/types/json-schema';
import { getNameFromRef } from '../../languages/json/utils/get-name-from-ref';
import { getSymbol } from '../../languages/typescript/utils/augment-tokens-schema';
import {
  Domain,
  ImportToken,
  Prop,
  SymbolType,
  TokensSchema,
  TypeToken,
} from '../../__generated__/models';

export type HelperParams<TFn = unknown, TInverse = TFn> = {
  fn: (params: TFn) => string;
  inverse: (params: TInverse) => string;
};

export type DomainTokenContext = Domain & { token: TokensSchema };

export const pluralize = _pluralize.bind(_pluralize);

export {
  camel as camelCase,
  capital as capitalCase,
  constant as constantCase,
  kebab as kebabCase,
  pascal as pascalCase,
  title as titleCase,
} from 'case';

export const json = (context: unknown) => JSON.stringify(context, null, 2);
export const comment = (context?: unknown) =>
  context ? `/**\n * ${context}\n */` : '';
export const jsonComment = (context?: unknown) => comment(json(context));

export const kv = (context: Record<string, unknown>, { fn }: HelperParams) =>
  Object.entries(context)
    .map(([key, value]) => fn({ key, value }))
    .join('\n');

export const ifEquals = (
  arg1: unknown,
  arg2: unknown,
  { fn, inverse }: HelperParams
) => (arg1 == arg2 ? fn(this) : inverse(this));

export const ifDistinct = (
  arg1: unknown,
  arg2: unknown,
  { fn, inverse }: HelperParams
) => (arg1 != arg2 ? fn(this) : inverse(this));

export const ifTypeOf = (
  value: unknown,
  type: unknown,
  { fn, inverse }: HelperParams
) => (typeof value === type ? fn(this) : inverse(this));

export const ifObject = (schema: AugmentedJSONSchema, { fn }: HelperParams) =>
  schema.type === 'object' ? fn(schema) : '';

export const ifEnum = (schema: AugmentedJSONSchema, { fn }: HelperParams) =>
  schema.type === 'string' && schema.enum ? fn(schema) : '';

export const single = (
  singleRegistry: Record<string, string> = {},
  key: string | string[],
  content: unknown,
  { fn }: HelperParams
) => {
  key = Array.isArray(key) ? key.join('.') : key;
  if (singleRegistry[key]) {
    return '';
  }

  singleRegistry[key] = fn(content);

  return singleRegistry[key];
};

export const getDefinitionRecursive = (
  type: string,
  context: Domain & { token: TokensSchema }
): TypeToken => {
  const definition = context.token.types.find((t) => t.name === type);

  if (definition?.symbol === SymbolType.Alias) {
    return getDefinitionRecursive(definition.raw.type as string, context);
  }

  return definition as TypeToken;
};

export const gqlPrimitiveType = (primitive: string): string => {
  switch (primitive) {
    case 'boolean':
    case 'string':
      return capital(primitive);
    case 'number':
      return 'Int';
  }

  return primitive;
};

export const gqlTypeName = (
  type: string,
  context: Domain & { token: TokensSchema },
  suffix = 'Scalar'
): string => {
  const symbol = getSymbol(type);
  const typeDef = context.token.types.find((t) => t.name === type);
  const enumDef = context.token.enums.find((t) => t.name === type);
  // const primitiveTypeDef = getDefinitionRecursive(type, context);

  if (symbol === SymbolType.Primitive) {
    return pascal(`${type}${suffix === 'Union' ? 'Scalar' : suffix}`);
  }

  if (
    symbol === SymbolType.Type &&
    (typeDef?.symbol as SymbolType) === SymbolType.Alias
  ) {
    const definition = getDefinitionRecursive(type, context);

    return definition.symbol === SymbolType.Type && suffix === 'Union'
      ? definition.name
      : type;
  }

  if (symbol === SymbolType.Type && enumDef?.name) {
    return `${enumDef.name}`;
  }

  return type;
};

export const gqlUnionType = (
  raw: string,
  context: Domain & { token: TokensSchema },
  suffix = 'Scalar',
  separator = ', '
) =>
  !raw.includes('|')
    ? gqlTypeName(raw, context, suffix)
    : raw
        .split('|')
        .map((t) => t.trim())
        .map((t) =>
          context.token.enums.find((t2) => t2.name === t) ? 'Text' : t
        )
        .map((type) => gqlTypeName(type, context, suffix))
        .filter((t, i, arr) => arr.indexOf(t) === i)
        .join(separator);

export const gqlType = (
  { symbol, type, name }: Prop,
  context: Domain & { token: TokensSchema }
) => {
  if (symbol === SymbolType.Type) {
    const def = context.token.types.find((t) => t.name === type);
    if (def?.symbol === SymbolType.Alias) {
      return pascal(`${def.name}`);
    }
  }

  return symbol === SymbolType.Alias || symbol === SymbolType.Union
    ? pascal(`${name}`)
    : [SymbolType.Primitive].includes(symbol)
    ? pascal(`${type}Scalar`)
    : type;
};

export const gqlDecoratorType = (
  { symbol, type, name }: Prop,
  context: Domain & { token: TokensSchema }
) => {
  if (symbol === SymbolType.Array) {
    return `[${type.replace(/\[\]/, '')}]`;
  }

  if (symbol === SymbolType.Record) {
    return 'JSON';
  }

  if (symbol === SymbolType.Type) {
    const def = context.token.types.find((t) => t.name === type);
    if (def?.symbol === SymbolType.Alias) {
      return pascal(`${def.name}Union`);
    }
  }

  return symbol === SymbolType.Alias || symbol === SymbolType.Union
    ? pascal(`${name}Union`)
    : [SymbolType.Scalar, SymbolType.Primitive].includes(symbol)
    ? pascal(`${type}Scalar`)
    : type;
};

export const select = (
  selectable: Domain & { selected: string },
  { fn }: HelperParams
) =>
  fn(
    selectable.tokens?.reduce<TypeToken | undefined>(
      (acc, tk) => acc || tk.types.find((t) => t.name === selectable.selected),
      undefined
    )
  );

export const ifRecord = (schema: AugmentedJSONSchema, { fn }: HelperParams) => {
  const isRecord =
    schema.type === 'object' && !schema.templateProperties?.length;
  const typeRef =
    typeof schema.additionalProperties === 'object'
      ? schema.additionalProperties.$ref
      : undefined;

  if (!isRecord || !typeRef) {
    return '';
  }

  const name = getNameFromRef(typeRef);

  return isRecord ? fn({ key: 'string', value: name }) : '';
};

// export const gqlProperty = (
//   properties: Prop[],
//   domain: Domain,
//   { fn }: HelperParams
// ) => {
//   return (properties || [])
//     .map(
//       (property) =>
//         `${fn({
//           ...property,
//           ...getType(property, domain),
//           index: property.name,
//           properties,
//           domain,
//         })}`
//     )
//     .join('');
// };

export const ifExternal = (token: ImportToken, { fn, inverse }: HelperParams) =>
  token.path.startsWith('http') ? fn(token) : inverse(token);

export const templateName = (
  ctx: Domain & { token: TokensSchema },
  stringCase: string
) =>
  stringCase in cases
    ? (cases as any)[stringCase](`${ctx.name}${fileName(ctx)}`)
    : `${ctx.name}${fileName(ctx)}`;

export const fileName = (
  ctx: Domain & { token: TokensSchema },
  stringCase: string = 'pascal'
) => `${(cases as any)[stringCase](ctx.token.name)}`;

export const symbol = (
  type: SymbolType,
  token: TypeToken | Prop,
  { fn, inverse }: HelperParams
) => {
  return token.symbol === type ? fn(token) : inverse(token);
};

export const isOverride = (
  prop: Prop,
  type: TypeToken,
  { token }: DomainTokenContext,
  { fn, inverse }: HelperParams
): string => {
  // Disabled override as we are no class-based inheritance now.
  return inverse(prop);

  // const parent = type.extendsType
  //   ? token.types.find((t) => t.name === type.extendsType)
  //   : undefined;

  // const parentHasProp =
  //   parent && parent.properties.some((p) => p.name === prop.name);
  // const mustCheckPreviousAncestor =
  //   parent && !parentHasProp && parent.extendsType;

  // if (mustCheckPreviousAncestor) {
  //   return isOverride(prop, parent, { token }, { fn, inverse });
  // }

  // return parentHasProp ? fn(prop) : inverse(prop);
};

export const tokenIsIndex = (token: TypeToken, { fn, inverse }: HelperParams) =>
  token.name === 'index' ? fn(token) : inverse(token);

export const concretes = (
  token: TokensSchema,
  { fn, inverse }: HelperParams
) => {
  const aliases = token.types?.filter(
    (t) => t.symbol === SymbolType.Type && t.extendsType
  );

  return token.types
    .reduce((result, alias) => {
      if (!alias.extendsType) {
        return result;
      }

      const group = result.find((g) => g.name === alias.extendsType);

      if (!group) {
        result.push({ name: alias.extendsType, aliases: [alias] });
      } else {
        group.aliases.push(alias);
      }

      return result;
    }, [] as { name: string; aliases: TypeToken[] }[])
    .reduce((result, group) => `${result}${fn(group)}`, '');
};
