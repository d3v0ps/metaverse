import axios from 'axios';
import { writeFile } from 'fs-extra';
import { extname } from 'path';
import { lastValueFrom, map, switchMap } from 'rxjs';
import { spawnWithResult } from '../../../engines/nodejs/child-process/spawn';
import {
  SymbolType,
  TokensSchemaInput,
  TypeToken,
} from '../../../__generated__/models';
import { SchemaOrg, SchemaOrgNode } from '../models/schema-org';
import { getSymbol } from './augment-tokens-schema';
import {
  getTypeNameFromId,
  isEnumRecursive,
  primitives,
  schemaOrgToEnumToken,
  schemaOrgToTypeToken,
} from './schema-org-to-type-token';

const headers = `
/* --- Patches ---  */
/* --- Scalars ---  */
/* eslint-disable @typescript-eslint/ban-types */
export type Text = string;
export type Number = number;
/*  --------------  */

`;

export const getSchemaName = (url: string, index?: string) =>
  (url.split('/').pop() || `external${index ? '-' + index : ''}.nt`).replace(
    extname(url),
    ''
  );

export const isClass = (t: SchemaOrgNode) => t['@type'] === 'rdfs:Class';
export const isEnum = (t: SchemaOrgNode, schema: SchemaOrg) =>
  isClass(t) && isEnumRecursive(t, schema);

export const isType = (t: SchemaOrgNode, schema: SchemaOrg) =>
  isClass(t) && !isEnum(t, schema);

/** NOTE: this method fails as it generates interfaces in some cases */
export const generateTypesFromNtFile = (url: string, outputFile?: string) =>
  !outputFile
    ? Promise.reject(new Error('outputFile is required'))
    : lastValueFrom(
        spawnWithResult('npx', [
          'schema-dts-gen',
          '--ontology',
          url /* '>', outputFile */,
        ])
          .pipe(switchMap((data) => writeFile(outputFile, headers + data)))
          .pipe(
            map(() => {
              return;
            })
          )
      );

export const generateTypesFromJsonld = async (
  url: string,
  outputFile?: string,
  overrides: TokensSchemaInput = {}
): Promise<TokensSchemaInput> => {
  const { data } = await axios.get<SchemaOrg>(url);

  data['@graph'].unshift(
    ...[
      ...Object.entries(overrides.types || {}).map(([id, type]) => ({
        '@id': id,
        '@type': 'rdfs:Class',
        'rdfs:subClassOf':
          typeof type === 'string' || type.$extends
            ? {
                '@id': `schema:${
                  typeof type === 'string' ? type : type.$extends
                }`,
              }
            : undefined,
      })),
    ]
  );

  const types: Record<string, TypeToken> = data['@graph']
    .filter((t) => isType(t, data))
    .reduce(
      (result, t) => ({
        ...result,
        [getTypeNameFromId(t['@id'])]: schemaOrgToTypeToken(t, data),
      }),
      {}
    );

  const enums: Record<string, Record<string, string>> = data['@graph']
    .filter((t) => isEnum(t, data))
    .reduce(
      (result, t) => ({
        ...result,
        [getTypeNameFromId(t['@id'])]: schemaOrgToEnumToken(t, data),
      }),
      {}
    );

  const roots = Object.entries(types)
    .filter(
      ([k, v]) =>
        typeof v !== 'string' &&
        getSymbol(k, SymbolType.Type) === SymbolType.Type
    )
    .map(([k]) => k);

  return {
    name: getSchemaName(url),
    file: outputFile || url,
    types: {
      ...primitives,
      ...types,
    },
    enums,
    roots,
  };
};

export type SchemaOrgFormat = 'nt' | 'jsonld';

export const generateTypesFromSchemaOrg = (
  url: string,
  outputFile?: string,
  overrides?: TokensSchemaInput
) =>
  ({
    nt: () => generateTypesFromNtFile(url, outputFile),
    jsonld: () => generateTypesFromJsonld(url, outputFile, overrides),
  }[
    (url.split('.').pop() || 'jsonld') as SchemaOrgFormat
  ]() as Promise<TokensSchemaInput>);
