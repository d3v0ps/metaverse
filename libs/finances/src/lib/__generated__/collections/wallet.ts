/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Provider } from '@angular/core';
import { ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN } from '@central-factory/persistence/entity-manager';
import { RxCollection, RxDocument, RxJsonSchema } from 'rxdb';
import { Wallet } from '../types';

export type WalletDocType = Wallet;
export type WalletDocument = RxDocument<WalletDocType>;
export type WalletCollection = RxCollection<WalletDocument>;

export const walletSchema = {
  additionalProperties: false,
  properties: {
    accounts: {
      items: {
        type: 'object',
      },
      type: 'array',
    },
    balance: {
      $ref: '#/definitions/Balance',
      items: {
        type: 'object',
      },
    },
    id: {
      type: 'string',
    },
    name: {
      type: 'string',
    },
    worldId: {
      type: 'string',
    },
  },
  required: ['id', 'name', 'worldId', 'balance', 'accounts'],
  type: 'object',
};

export const walletRxSchema: RxJsonSchema<Omit<WalletDocType, '_attachments'>> =
  {
    ...(walletSchema as any),
    title: 'Wallet',
    description: 'Wallet',
    version: 0,
    keyCompression: true,
    primaryKey: 'id',
    type: 'object',
    attachments: {
      encrypted: false,
    },
  };

export const userWalletRxSchema: RxJsonSchema<
  Omit<WalletDocType, '_attachments'>
> = {
  ...(walletSchema as any),
  title: 'User Wallet',
  description: 'User Wallet',
  version: 0,
  keyCompression: true,
  primaryKey: 'id',
  type: 'object',
  attachments: {
    encrypted: false,
  },
};

export const WALLET_COLLECTION_NAME = 'wallet';

export const WALLET_COLLECTION_PROVIDER: Provider = {
  provide: ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN,
  useValue: {
    name: WALLET_COLLECTION_NAME,
    creator: {
      schema: walletRxSchema,
    },
  },
  multi: true,
};

export const USER_WALLET_COLLECTION_NAME = 'userwallet';

export const USER_WALLET_COLLECTION_PROVIDER: Provider = {
  provide: ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN,
  useValue: {
    name: USER_WALLET_COLLECTION_NAME,
    creator: {
      schema: userWalletRxSchema,
    },
  },
  multi: true,
};
