/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Provider } from '@angular/core';
import { ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN } from '@central-factory/persistence/services/entity-manager';
import { RxDocument, RxCollection, RxJsonSchema } from 'rxdb';
import { AvatarProfession } from '../types';

export type AvatarProfessionDocType = AvatarProfession;
export type AvatarProfessionDocument = RxDocument<AvatarProfessionDocType>;
export type AvatarProfessionCollection = RxCollection<AvatarProfessionDocument>;

export const avatarProfessionSchema = {
  "additionalProperties": false,
  "properties": {
    "color": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "icon": {
      "type": "string"
    },
    "id": {
      "type": "string"
    },
    "label": {
      "type": "string"
    },
    "schools": {
      "items": {
        "type": "object"
      },
      "type": "array"
    }
  },
  "required": [
    "id"
  ],
  "type": "object"
}

export const avatarProfessionRxSchema: RxJsonSchema<
  Omit<AvatarProfessionDocType, '_attachments'>
> = {
  ...avatarProfessionSchema as any,
  title: 'AvatarProfession',
  description: 'Avatar[object Object]Profession',
  version: 0,
  keyCompression: true,
  primaryKey: 'id',
  type: 'object',
  attachments: {
    encrypted: false,
  },
};

export const AVATAR_PROFESSION_COLLECTION_PROVIDER: Provider = {
  provide: ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN,
  useValue: {
    name: 'Avatar[object Object]Profession',
    creator: {
      schema: avatarProfessionRxSchema,
    },
  },
  multi: true,
};

