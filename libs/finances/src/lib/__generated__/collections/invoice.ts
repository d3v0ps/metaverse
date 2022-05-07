/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Provider } from '@angular/core';
import { ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN } from '@central-factory/persistence/services/entity-manager';
import { RxDocument, RxCollection, RxJsonSchema } from 'rxdb';
import { Invoice } from '../types';

export type InvoiceDocType = Invoice;
export type InvoiceDocument = RxDocument<InvoiceDocType>;
export type InvoiceCollection = RxCollection<InvoiceDocument>;

export const invoiceSchema = {
  "additionalProperties": false,
  "properties": {
    "createdAt": {
      "type": "string"
    },
    "id": {
      "type": "string"
    },
    "items": {
      "items": {
        "type": "object"
      },
      "type": "array"
    },
    "paidAt": {
      "type": "string"
    },
    "receiver": {
      "type": "string"
    },
    "sender": {
      "type": "string"
    },
    "state": {
      "type": "string",
      "enum": [
        "draft",
        "sent",
        "paid"
      ]
    },
    "total": {
      "type": "string"
    },
    "updatedAt": {
      "type": "string"
    }
  },
  "required": [
    "id"
  ],
  "type": "object"
}

export const invoiceRxSchema: RxJsonSchema<
  Omit<InvoiceDocType, '_attachments'>
> = {
  ...invoiceSchema as any,
  title: 'Invoice',
  description: 'Invoice',
  version: 0,
  keyCompression: true,
  primaryKey: 'id',
  type: 'object',
  attachments: {
    encrypted: false,
  },
};

export const INVOICE_COLLECTION_PROVIDER: Provider = {
  provide: ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN,
  useValue: {
    name: 'invoice',
    creator: {
      schema: invoiceRxSchema,
    },
  },
  multi: true,
};

