/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Provider } from '@angular/core';
import { ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN } from '@central-factory/persistence/services/entity-manager';
import { RxDocument, RxCollection, RxJsonSchema } from 'rxdb';
import { Tax } from '../types';

export type TaxDocType = Tax;
export type TaxDocument = RxDocument<TaxDocType>;
export type TaxCollection = RxCollection<TaxDocument>;

export const taxSchema = {
  "additionalProperties": false,
  "properties": {
    "createdAt": {
      "additionalProperties": false,
      "description": "Enables basic storage and retrieval of dates and times. ",
      "type": "object"
    },
    "financialEntityCode": {
      "type": "string"
    },
    "id": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "period": {
      "$ref": "#/definitions/TaxPeriod",
      "items": {
        "type": "object"
      }
    },
    "rate": {
      "type": "number"
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
    "rate",
    "financialEntityCode",
    "createdAt",
    "updatedAt",
    "period"
  ],
  "type": "object"
}

export const taxRxSchema: RxJsonSchema<
  Omit<TaxDocType, '_attachments'>
> = {
  ...taxSchema as any,
  title: 'Tax',
  description: 'Tax',
  version: 0,
  keyCompression: true,
  primaryKey: 'id',
  type: 'object',
  attachments: {
    encrypted: false,
  },
};

export const TAX_COLLECTION_PROVIDER: Provider = {
  provide: ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN,
  useValue: {
    name: 'Tax',
    creator: {
      schema: taxRxSchema,
    },
  },
  multi: true,
};

