/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Provider } from '@angular/core';
import { ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN } from '@central-factory/persistence/services/entity-manager';
import { RxDocument, RxCollection, RxJsonSchema } from 'rxdb';
import { AvatarAttributes } from '../types';

export type AvatarAttributesDocType = AvatarAttributes;
export type AvatarAttributesDocument = RxDocument<AvatarAttributesDocType>;
export type AvatarAttributesCollection = RxCollection<AvatarAttributesDocument>;

export const avatarAttributesSchema = {
  "additionalProperties": false,
  "properties": {
    "base": {
      "additionalProperties": {
        "type": "number"
      },
      "type": "object"
    }
  },
  "type": "object"
}

export const avatarAttributesRxSchema: RxJsonSchema<
  Omit<AvatarAttributesDocType, '_attachments'>
> = {
  ...avatarAttributesSchema as any,
  title: 'AvatarAttributes',
  description: 'Avatar[object Object]Attributes',
  version: 0,
  keyCompression: true,
  primaryKey: 'id',
  type: 'object',
  attachments: {
    encrypted: false,
  },
};

export const AVATAR_ATTRIBUTES_COLLECTION_PROVIDER: Provider = {
  provide: ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN,
  useValue: {
    name: 'Avatar[object Object]Attributes',
    creator: {
      schema: avatarAttributesRxSchema,
    },
  },
  multi: true,
};

