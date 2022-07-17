import { pascalCase } from '@central-factory/platforms/engines/handlebars/helpers';
import {
  Domain,
  Prop,
  SymbolType,
  TypeToken,
} from '@central-factory/platforms/__generated__/models';

export const getType = (
  { name, type, symbol }: Prop,
  domain: Domain
): {
  result: string[];
  type: string;
  tsType: string;
  decoratorType?: string;
  unionType?: string;
  unionDecoratorType?: string;
} => {
  if (!type) {
    return { type: 'any', tsType: 'any', result: ['any'] };
  }

  if (symbol === SymbolType.Union) {
    return (type?.split('|') || [])
      .map((t) => t.trim())
      .reduce(
        (acc, unionType) => {
          // if (unionType === 'DateTime') {
          //   unionType = 'Date';
          // }
          // if (unionType === 'Time') {
          //   unionType = 'Number';
          // }
          // if (unionType === 'Integer') {
          //   unionType = 'Number';
          // }

          let typeToken = domain.tokens?.reduce<TypeToken | undefined>(
            (acc, token) =>
              acc ||
              (token.types.find((t) => t.name === unionType) as TypeToken),
            undefined
          ) as TypeToken;

          if (typeToken.symbol === SymbolType.Alias) {
            typeToken = domain.tokens?.reduce<TypeToken | undefined>(
              (acc, token) =>
                acc ||
                (token.types.find(
                  (t) => t.name === typeToken.raw
                ) as TypeToken),
              undefined
            ) as TypeToken;
          }

          const typeProp = getType(
            { type: unionType, symbol: typeToken.symbol } as Prop,
            domain
          );

          return {
            ...acc,
            type: acc.type
              ? [acc.type, typeProp.type].join(' | ')
              : typeProp.type,
            tsType: acc.tsType
              ? [acc.tsType, typeProp.tsType].join(' | ')
              : typeProp.tsType,
            decoratorType: `${name}Union`,
            unionType: `${acc.result
              .concat(
                typeToken.symbol === SymbolType.Scalar
                  ? pascalCase(typeToken.name.replace('URL', 'Url') + 'Type')
                  : typeProp.type
              )
              .join('| ')}`,
            unionDecoratorType: `[${acc.resultDecorator
              .concat(
                typeToken.symbol === SymbolType.Scalar
                  ? pascalCase(typeToken.name.replace('URL', 'Url') + 'Scalar')
                  : typeProp.type
              )
              .join(', ')}]`,
            result: acc.result.concat(
              typeToken.symbol === SymbolType.Scalar
                ? pascalCase(typeToken.name.replace('URL', 'Url') + 'Type')
                : typeProp.type
            ),
            resultDecorator: acc.resultDecorator.concat(
              typeToken.symbol === SymbolType.Scalar
                ? pascalCase(typeToken.name.replace('URL', 'Url') + 'Scalar')
                : typeProp.type
            ),
          };
        },
        {
          name,
          type: '',
          tsType: '',
          result: [] as string[],
          resultDecorator: [] as string[],
        }
      );
  }

  if (symbol === SymbolType.Array) {
    return {
      result: [type],
      type,
      tsType: type,
      decoratorType: `[${type?.replace('[]', '')}]`,
    };
  }

  if (symbol === SymbolType.Record) {
    return { type, tsType: type, decoratorType: 'GraphQLJSON', result: [type] };
  }

  // switch (type) {
  //   case 'number':
  //   case 'string':
  //   case 'boolean':
  //   default:
  //     return { type, tsType: type, result: [type] };
  // }

  return { type, tsType: type, decoratorType: type, result: [type] };
};
