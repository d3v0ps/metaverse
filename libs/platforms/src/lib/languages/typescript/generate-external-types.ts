import { Logger } from '@nestjs/common';
import { resolve } from 'path';
import { TokensSchema, TokensSchemaInput } from '../../__generated__/models';
import { augmentTokensSchema } from './utils/augment-tokens-schema';
import {
  generateTypesFromSchemaOrg,
  getSchemaName,
} from './utils/generate-types-from-schema-org';

const logger = new Logger('generateExternalTypes');

const isExternal = ({ path }: { path: string }) => path.startsWith('http');

export const generateExternalTypes = async (
  inputSchema: TokensSchemaInput,
  outputFolder?: string
): Promise<TokensSchema[]> => {
  const tokensSchema = augmentTokensSchema(inputSchema);

  const imports = tokensSchema.imports || [];

  const externalImports = imports.filter(isExternal);

  if (!externalImports.length) {
    return [];
  }

  const schemaUrls = [...new Set(externalImports.map(({ path }) => path))];

  const schemas = (
    await Promise.all(
      schemaUrls.map(async (url, i) => {
        const schemaName = getSchemaName(url, i.toString());

        if (!schemaName) {
          throw new Error(`invalid schema url ${url}`);
        }

        const schema = await generateTypesFromSchemaOrg(
          url,
          outputFolder
            ? resolve(outputFolder, `${schemaName}.d.ts`)
            : undefined,
          {
            ...inputSchema,
            types: {
              ...inputSchema.types,

              DateTime: {
                $extends: 'Date',
              },
              Time: {
                $extends: 'Number',
              },
            },
          }
        );

        if (!schema) {
          logger.warn(
            `No schema returned from the generator. This can happen when using .nt files. Try again with a jsonld format file.`
          );
          return;
        }

        schema.name = schemaName;
        schema.file = url;

        schema.types = schema.types || {};
        // schema.types = schema.types
        //   ? {
        //       DateTime: {
        //         $extends: 'Date',
        //       },
        //       Time: {
        //         $extends: 'Date',
        //       },
        //       ...(inputSchema.types || {}),
        //       ...schema.types,
        //     }
        //   : {};

        return augmentTokensSchema(schema);
      })
    )
  ).filter(Boolean) as TokensSchema[];

  return schemas;
};
