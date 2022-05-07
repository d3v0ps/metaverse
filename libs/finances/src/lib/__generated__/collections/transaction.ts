/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Provider } from '@angular/core';
import { ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN } from '@central-factory/persistence/services/entity-manager';
import { RxDocument, RxCollection, RxJsonSchema } from 'rxdb';
import { Transaction } from '../types';

export type TransactionDocType = Transaction;
export type TransactionDocument = RxDocument<TransactionDocType>;
export type TransactionCollection = RxCollection<TransactionDocument>;

export const transactionSchema = {
  "additionalProperties": false,
  "properties": {
    "account": {
      "type": "string"
    },
    "amount": {
      "type": "string"
    },
    "category": {
      "type": "string"
    },
    "currency": {
      "type": "string"
    },
    "date": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "destination": {
      "type": "string"
    },
    "id": {
      "type": "string"
    },
    "invoice": {
      "type": "string"
    },
    "origin": {
      "type": "string"
    },
    "tags": {
      "items": {
        "type": "string"
      },
      "type": "array"
    }
  },
  "required": [
    "id",
    "date",
    "amount",
    "currency",
    "account",
    "tags",
    "origin",
    "destination"
  ],
  "type": "object"
}

export const transactionRxSchema: RxJsonSchema<
  Omit<TransactionDocType, '_attachments'>
> = {
  ...transactionSchema as any,
  title: 'Transaction',
  description: 'Transaction',
  version: 0,
  keyCompression: true,
  primaryKey: 'id',
  type: 'object',
  attachments: {
    encrypted: false,
  },
};

export const TRANSACTION_COLLECTION_PROVIDER: Provider = {
  provide: ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN,
  useValue: {
    name: 'transaction',
    creator: {
      schema: transactionRxSchema,
    },
  },
  multi: true,
};

