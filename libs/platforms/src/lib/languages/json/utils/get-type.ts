import { pascalCase } from '@central-factory/platforms/engines/handlebars/helpers';
import { Domain } from '@central-factory/platforms/__generated__/models';
import {
  Prop,
  TypeToken,
} from '@central-factory/platforms/__generated__/types/tokens-schema';

export const getType = (
  { name, type, isArray, isUnion, isRecord }: Prop,
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

  if (isUnion) {
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

          if (typeToken.isAlias && !typeToken.isScalar && !typeToken.isUnion) {
            typeToken = domain.tokens?.reduce<TypeToken | undefined>(
              (acc, token) =>
                acc ||
                (token.types.find(
                  (t) => t.name === typeToken.raw
                ) as TypeToken),
              undefined
            ) as TypeToken;
          }

          const typeProp = getType({ type: unionType }, domain);

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
                typeToken.isScalar
                  ? pascalCase(typeToken.name.replace('URL', 'Url') + 'Type')
                  : typeProp.type
              )
              .join('| ')}`,
            unionDecoratorType: `[${acc.resultDecorator
              .concat(
                typeToken.isScalar
                  ? pascalCase(typeToken.name.replace('URL', 'Url') + 'Scalar')
                  : typeProp.type
              )
              .join(', ')}]`,
            result: acc.result.concat(
              typeToken.isScalar
                ? pascalCase(typeToken.name.replace('URL', 'Url') + 'Type')
                : typeProp.type
            ),
            resultDecorator: acc.resultDecorator.concat(
              typeToken.isScalar
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

  if (isArray) {
    return {
      result: [type],
      type,
      tsType: type,
      decoratorType: `[${type?.replace('[]', '')}]`,
    };
  }

  if (isRecord) {
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
