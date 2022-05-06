/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Provider } from '@angular/core';
import { ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN } from '@central-factory/persistence/services/entity-manager';
import { RxDocument, RxCollection, RxJsonSchema } from 'rxdb';
import { Balance } from '../types';

export type BalanceDocType = Balance;
export type BalanceDocument = RxDocument<BalanceDocType>;
export type BalanceCollection = RxCollection<BalanceDocument>;

export const balanceSchema = {
  "additionalProperties": false,
  "properties": {
    "crypto": {
      "type": "string"
    },
    "fiat": {
      "type": "string"
    },
    "stocks": {
      "type": "string"
    },
    "total": {
      "type": "string"
    }
  },
  "required": [
    "total",
    "fiat",
    "crypto",
    "stocks"
  ],
  "type": "object"
}

export const balanceRxSchema: RxJsonSchema<
  Omit<BalanceDocType, '_attachments'>
> = {
  ...balanceSchema as any,
  title: 'Balance',
  description: 'Balance',
  version: 0,
  keyCompression: true,
  primaryKey: 'id',
  type: 'object',
  attachments: {
    encrypted: false,
  },
};

export const BALANCE_COLLECTION_PROVIDER: Provider = {
  provide: ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN,
  useValue: {
    name: 'Balance',
    creator: {
      schema: balanceRxSchema,
    },
  },
  multi: true,
};

