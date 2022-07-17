/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Provider } from '@angular/core';
import { ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN } from '@central-factory/persistence/entity-manager';
import { RxCollection, RxDocument, RxJsonSchema } from 'rxdb';
import { Invoice } from '../types';

export type InvoiceDocType = Invoice;
export type InvoiceDocument = RxDocument<InvoiceDocType>;
export type InvoiceCollection = RxCollection<InvoiceDocument>;

export const invoiceSchema = {
  additionalProperties: false,
  properties: {
    createdAt: {
      type: 'string',
    },
    id: {
      type: 'string',
    },
    items: {
      items: {
        type: 'object',
      },
      type: 'array',
    },
    paidAt: {
      type: 'string',
    },
    receiver: {
      type: 'string',
    },
    sender: {
      type: 'string',
    },
    state: {
      type: 'string',
      enum: ['draft', 'sent', 'paid'],
    },
    total: {
      type: 'string',
    },
    updatedAt: {
      type: 'string',
    },
  },
  required: ['id'],
  type: 'object',
};

export const invoiceRxSchema: RxJsonSchema<
  Omit<InvoiceDocType, '_attachments'>
> = {
  ...(invoiceSchema as any),
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

export const userInvoiceRxSchema: RxJsonSchema<
  Omit<InvoiceDocType, '_attachments'>
> = {
  ...(invoiceSchema as any),
  title: 'User Invoice',
  description: 'User Invoice',
  version: 0,
  keyCompression: true,
  primaryKey: 'id',
  type: 'object',
  attachments: {
    encrypted: false,
  },
};

export const INVOICE_COLLECTION_NAME = 'invoice';

export const INVOICE_COLLECTION_PROVIDER: Provider = {
  provide: ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN,
  useValue: {
    name: INVOICE_COLLECTION_NAME,
    creator: {
      schema: invoiceRxSchema,
    },
  },
  multi: true,
};

export const USER_INVOICE_COLLECTION_NAME = 'userinvoice';

export const USER_INVOICE_COLLECTION_PROVIDER: Provider = {
  provide: ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN,
  useValue: {
    name: USER_INVOICE_COLLECTION_NAME,
    creator: {
      schema: userInvoiceRxSchema,
    },
  },
  multi: true,
};
