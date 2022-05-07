/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Provider } from '@angular/core';
import { ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN } from '@central-factory/persistence/services/entity-manager';
import { RxDocument, RxCollection, RxJsonSchema } from 'rxdb';
import { Wallet } from '../types';

export type WalletDocType = Wallet;
export type WalletDocument = RxDocument<WalletDocType>;
export type WalletCollection = RxCollection<WalletDocument>;

export const walletSchema = {
  "additionalProperties": false,
  "properties": {
    "accounts": {
      "items": {
        "type": "object"
      },
      "type": "array"
    },
    "balance": {
      "$ref": "#/definitions/Balance",
      "items": {
        "type": "object"
      }
    },
    "id": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "worldId": {
      "type": "string"
    }
  },
  "required": [
    "id",
    "name",
    "worldId",
    "balance",
    "accounts"
  ],
  "type": "object"
}

export const walletRxSchema: RxJsonSchema<
  Omit<WalletDocType, '_attachments'>
> = {
  ...walletSchema as any,
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

export const WALLET_COLLECTION_PROVIDER: Provider = {
  provide: ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN,
  useValue: {
    name: 'Wallet',
    creator: {
      schema: walletRxSchema,
    },
  },
  multi: true,
};

