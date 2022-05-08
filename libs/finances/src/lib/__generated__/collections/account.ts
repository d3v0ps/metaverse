/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Provider } from '@angular/core';
import { ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN } from '@central-factory/persistence/services/entity-manager';
import { RxDocument, RxCollection, RxJsonSchema } from 'rxdb';
import { Account } from '../types';

export type AccountDocType = Account;
export type AccountDocument = RxDocument<AccountDocType>;
export type AccountCollection = RxCollection<AccountDocument>;

export const accountSchema = {
  "additionalProperties": false,
  "properties": {
    "balance": {
      "type": "string"
    },
    "createdAt": {
      "additionalProperties": false,
      "description": "Enables basic storage and retrieval of dates and times. ",
      "type": "object"
    },
    "currency": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "id": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "referenceId": {
      "type": "string"
    },
    "type": {
      "type": "string",
      "enum": [
        "Cash",
        "Bank",
        "CreditCard",
        "DebitCard",
        "RechargeCard",
        "Loan",
        "Crypto",
        "Stock",
        "Other"
      ]
    },
    "updatedAt": {
      "additionalProperties": false,
      "description": "Enables basic storage and retrieval of dates and times. ",
      "type": "object"
    }
  },
  "required": [
    "id",
    "name",
    "type",
    "balance"
  ],
  "type": "object"
}

export const accountRxSchema: RxJsonSchema<
  Omit<AccountDocType, '_attachments'>
> = {
  ...accountSchema as any,
  title: 'Account',
  description: 'Account',
  version: 0,
  keyCompression: true,
  primaryKey: 'id',
  type: 'object',
  attachments: {
    encrypted: false,
  },
};

export const userAccountRxSchema: RxJsonSchema<
  Omit<AccountDocType, '_attachments'>
> = {
  ...accountSchema as any,
  title: 'User Account',
  description: 'User Account',
  version: 0,
  keyCompression: true,
  primaryKey: 'id',
  type: 'object',
  attachments: {
    encrypted: false,
  },
};

export const ACCOUNT_COLLECTION_NAME = 'account';

export const ACCOUNT_COLLECTION_PROVIDER: Provider = {
  provide: ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN,
  useValue: {
    name: ACCOUNT_COLLECTION_NAME,
    creator: {
      schema: accountRxSchema,
    },
  },
  multi: true,
};

export const USER_ACCOUNT_COLLECTION_NAME = 'useraccount';

export const USER_ACCOUNT_COLLECTION_PROVIDER: Provider = {
  provide: ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN,
  useValue: {
    name: USER_ACCOUNT_COLLECTION_NAME,
    creator: {
      schema: userAccountRxSchema,
    },
  },
  multi: true,
};

