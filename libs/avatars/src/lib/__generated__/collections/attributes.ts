/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Provider } from '@angular/core';
import { ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN } from '@central-factory/persistence/services/entity-manager';
import { RxDocument, RxCollection, RxJsonSchema } from 'rxdb';
import { Attributes } from '../types';

export type AttributesDocType = Attributes;
export type AttributesDocument = RxDocument<AttributesDocType>;
export type AttributesCollection = RxCollection<AttributesDocument>;

export const attributesSchema = {
  "additionalProperties": false,
  "properties": {
    "base": {}
  },
  "type": "object"
}

export const attributesRxSchema: RxJsonSchema<
  Omit<AttributesDocType, '_attachments'>
> = {
  ...attributesSchema as any,
  title: 'Attributes',
  description: 'Attributes',
  version: 0,
  keyCompression: true,
  primaryKey: 'id',
  type: 'object',
  attachments: {
    encrypted: false,
  },
};

export const ATTRIBUTES_COLLECTION_PROVIDER: Provider = {
  provide: ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN,
  useValue: {
    name: 'attributes',
    creator: {
      schema: attributesRxSchema,
    },
  },
  multi: true,
};

