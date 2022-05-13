import { TokensSchema } from '@central-factory/platforms/__generated__/models';
import { Logger } from '@nestjs/common';
import { resolve } from 'path';
import { augmentTokensSchema } from './utils/augment-tokens-schema';
import {
  generateTypesFromSchemaOrg,
  getSchemaName,
} from './utils/generate-types-from-schema-org';

const logger = new Logger('generateExternalTypes');

const isExternal = ({ path }: { path: string }) => path.startsWith('http');

export const generateExternalTypes = async (
  schema: any,
  outputFolder?: string
): Promise<TokensSchema[]> => {
  const tokensSchema = augmentTokensSchema(schema);

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
          outputFolder ? resolve(outputFolder, `${schemaName}.d.ts`) : undefined
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
        schema.types['DateTime'] = 'Date';
        schema.types['Time'] = 'Number';

        return augmentTokensSchema(schema);
      })
    )
  ).filter(Boolean) as TokensSchema[];

  return schemas;
};
