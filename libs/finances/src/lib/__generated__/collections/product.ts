/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Provider } from '@angular/core';
import { ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN } from '@central-factory/persistence/entity-manager';
import { RxCollection, RxDocument, RxJsonSchema } from 'rxdb';
import { Product } from '../types';

export type ProductDocType = Product;
export type ProductDocument = RxDocument<ProductDocType>;
export type ProductCollection = RxCollection<ProductDocument>;

export const productSchema = {
  additionalProperties: false,
  properties: {
    description: {
      type: 'string',
    },
    name: {
      type: 'string',
    },
    originalPrice: {
      type: 'number',
    },
    originalPriceCurrency: {
      type: 'string',
    },
    price: {
      type: 'number',
    },
  },
  required: ['name', 'price', 'originalPrice', 'originalPriceCurrency'],
  type: 'object',
};

export const productRxSchema: RxJsonSchema<
  Omit<ProductDocType, '_attachments'>
> = {
  ...(productSchema as any),
  title: 'Product',
  description: 'Product',
  version: 0,
  keyCompression: true,
  primaryKey: 'id',
  type: 'object',
  attachments: {
    encrypted: false,
  },
};

export const userProductRxSchema: RxJsonSchema<
  Omit<ProductDocType, '_attachments'>
> = {
  ...(productSchema as any),
  title: 'User Product',
  description: 'User Product',
  version: 0,
  keyCompression: true,
  primaryKey: 'id',
  type: 'object',
  attachments: {
    encrypted: false,
  },
};

export const PRODUCT_COLLECTION_NAME = 'product';

export const PRODUCT_COLLECTION_PROVIDER: Provider = {
  provide: ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN,
  useValue: {
    name: PRODUCT_COLLECTION_NAME,
    creator: {
      schema: productRxSchema,
    },
  },
  multi: true,
};

export const USER_PRODUCT_COLLECTION_NAME = 'userproduct';

export const USER_PRODUCT_COLLECTION_PROVIDER: Provider = {
  provide: ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN,
  useValue: {
    name: USER_PRODUCT_COLLECTION_NAME,
    creator: {
      schema: userProductRxSchema,
    },
  },
  multi: true,
};
