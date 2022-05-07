/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Provider } from '@angular/core';
import { ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN } from '@central-factory/persistence/services/entity-manager';
import { RxDocument, RxCollection, RxJsonSchema } from 'rxdb';
import { Identity } from '../types';

export type IdentityDocType = Identity;
export type IdentityDocument = RxDocument<IdentityDocType>;
export type IdentityCollection = RxCollection<IdentityDocument>;

export const identitySchema = {
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
      "type": "string",
      "enum": [
        "Male",
        "Female"
      ]
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
      "type": "string",
      "enum": [
        "Heterosexual",
        "Homosexual",
        "Bisexual",
        "Pansexual",
        "Asexual"
      ]
    },
    "title": {
      "type": "string"
    }
  },
  "type": "object"
}

export const identityRxSchema: RxJsonSchema<
  Omit<IdentityDocType, '_attachments'>
> = {
  ...identitySchema as any,
  title: 'Identity',
  description: 'Identity',
  version: 0,
  keyCompression: true,
  primaryKey: 'id',
  type: 'object',
  attachments: {
    encrypted: false,
  },
};

export const IDENTITY_COLLECTION_PROVIDER: Provider = {
  provide: ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN,
  useValue: {
    name: 'identity',
    creator: {
      schema: identityRxSchema,
    },
  },
  multi: true,
};

