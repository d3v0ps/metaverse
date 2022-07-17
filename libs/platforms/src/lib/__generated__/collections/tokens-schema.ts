/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Provider } from '@angular/core';
import { ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN } from '@central-factory/persistence/entity-manager';
import { RxCollection, RxDocument, RxJsonSchema } from 'rxdb';
import { TokensSchema } from '../types';

export type TokensSchemaDocType = TokensSchema;
export type TokensSchemaDocument = RxDocument<TokensSchemaDocType>;
export type TokensSchemaCollection = RxCollection<TokensSchemaDocument>;

export const tokensSchemaSchema = {
  additionalProperties: false,
  properties: {
    description: {
      type: 'string',
    },
    enums: {
      items: {
        type: 'object',
      },
      type: 'array',
    },
    file: {
      type: 'string',
    },
    imports: {
      items: {
        type: 'object',
      },
      type: 'array',
    },
    name: {
      type: 'string',
    },
    domain: {
      type: 'string',
    },
    state: {
      type: 'string',
    },
    roots: {
      items: {
        type: 'string',
      },
      type: 'array',
    },
    types: {
      items: {
        type: 'object',
      },
      type: 'array',
    },
  },
  required: ['name', 'imports', 'types', 'enums', 'roots'],
  type: 'object',
};

export const tokensSchemaRxSchema: RxJsonSchema<
  Omit<TokensSchemaDocType, '_attachments'>
> = {
  ...(tokensSchemaSchema as any),
  title: 'TokensSchema',
  description: 'Tokens Schema',
  version: 0,
  keyCompression: true,
  primaryKey: 'id',
  type: 'object',
  attachments: {
    encrypted: false,
  },
};

export const userTokensSchemaRxSchema: RxJsonSchema<
  Omit<TokensSchemaDocType, '_attachments'>
> = {
  ...(tokensSchemaSchema as any),
  title: 'User TokensSchema',
  description: 'User Tokens Schema',
  version: 0,
  keyCompression: true,
  primaryKey: 'id',
  type: 'object',
  attachments: {
    encrypted: false,
  },
};

export const TOKENS_SCHEMA_COLLECTION_NAME = 'tokens-schema';

export const TOKENS_SCHEMA_COLLECTION_PROVIDER: Provider = {
  provide: ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN,
  useValue: {
    name: TOKENS_SCHEMA_COLLECTION_NAME,
    creator: {
      schema: tokensSchemaRxSchema,
    },
  },
  multi: true,
};

export const USER_TOKENS_SCHEMA_COLLECTION_NAME = 'usertokens-schema';

export const USER_TOKENS_SCHEMA_COLLECTION_PROVIDER: Provider = {
  provide: ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN,
  useValue: {
    name: USER_TOKENS_SCHEMA_COLLECTION_NAME,
    creator: {
      schema: userTokensSchemaRxSchema,
    },
  },
  multi: true,
};
