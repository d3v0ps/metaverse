import {
  TokensSchemaInput,
  TypeToken,
} from '@central-factory/platforms/__generated__/models';
import axios from 'axios';
import { writeFile } from 'fs-extra';
import { extname } from 'path';
import { lastValueFrom, map, switchMap } from 'rxjs';
import { spawnWithResult } from '../../../engines/nodejs/child-process/spawn';
import { SchemaOrg, SchemaOrgNode } from '../models/schema-org';
import {
  getTypeNameFromId,
  isEnumRecursive,
  schemaOrgToEnumToken,
  schemaOrgToTypeToken,
} from './schema-org-to-type-token';

const primitives = {
  Text: 'string',
  Number: 'number',
  Boolean: 'boolean',
  Date: 'string',
  Class: 'any',
};

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
  outputFile?: string
): Promise<TokensSchemaInput> => {
  const { data } = await axios.get<SchemaOrg>(url);

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
    .filter(([k, v]) => typeof v !== 'string')
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

export const generateTypesFromSchemaOrg = (url: string, outputFile?: string) =>
  ({
    nt: () => generateTypesFromNtFile(url, outputFile),
    jsonld: () => generateTypesFromJsonld(url, outputFile),
  }[(url.split('.').pop() || 'jsonld') as SchemaOrgFormat]());
