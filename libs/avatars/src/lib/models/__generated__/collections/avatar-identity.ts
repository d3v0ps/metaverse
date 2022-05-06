/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Provider } from '@angular/core';
import { ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN } from '@central-factory/persistence/services/entity-manager';
import { RxDocument, RxCollection, RxJsonSchema } from 'rxdb';
import { AvatarIdentity } from '../types';

export type AvatarIdentityDocType = AvatarIdentity;
export type AvatarIdentityDocument = RxDocument<AvatarIdentityDocType>;
export type AvatarIdentityCollection = RxCollection<AvatarIdentityDocument>;

export const avatarIdentitySchema = {
  "additionalProperties": false,
  "properties": {
    "archetype": {
      "type": "string"
    },
    "bio": {
      "type": "string"
    },
    "birthDate": {
      "type": "string"
    },
    "birthPlace": {
      "type": "number"
    },
    "birthWorld": {
      "type": "string"
    },
    "culture": {
      "type": "number"
    },
    "familyName": {
      "type": "string"
    },
    "gender": {
      "type": "object"
    },
    "givenName": {
      "type": "string"
    },
    "icon": {
      "type": "string"
    },
    "mainProfession": {
      "type": "string"
    },
    "quote": {
      "type": "string"
    },
    "religion": {
      "type": "number"
    },
    "secondaryProfession": {
      "type": "string"
    },
    "sexualOrientation": {
      "type": "object"
    },
    "title": {
      "type": "string"
    }
  },
  "type": "object"
}

export const avatarIdentityRxSchema: RxJsonSchema<
  Omit<AvatarIdentityDocType, '_attachments'>
> = {
  ...avatarIdentitySchema as any,
  title: 'AvatarIdentity',
  description: 'Avatar[object Object]Identity',
  version: 0,
  keyCompression: true,
  primaryKey: 'id',
  type: 'object',
  attachments: {
    encrypted: false,
  },
};

export const AVATAR_IDENTITY_COLLECTION_PROVIDER: Provider = {
  provide: ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN,
  useValue: {
    name: 'Avatar[object Object]Identity',
    creator: {
      schema: avatarIdentityRxSchema,
    },
  },
  multi: true,
};

