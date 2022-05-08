/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Provider } from '@angular/core';
import { ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN } from '@central-factory/persistence/services/entity-manager';
import { RxDocument, RxCollection, RxJsonSchema } from 'rxdb';
import { Appearance } from '../types';

export type AppearanceDocType = Appearance;
export type AppearanceDocument = RxDocument<AppearanceDocType>;
export type AppearanceCollection = RxCollection<AppearanceDocument>;

export const appearanceSchema = {
  "additionalProperties": false,
  "properties": {
    "body": {
      "allOf": [
        {
          "$ref": "#/definitions/Colourable"
        },
        {
          "$ref": "#/definitions/Stylable"
        },
        {
          "$ref": "#/definitions/Shapeable"
        }
      ]
    },
    "ears": {
      "$ref": "#/definitions/Shapeable",
      "items": {
        "type": "object"
      }
    },
    "eyes": {
      "allOf": [
        {
          "$ref": "#/definitions/Colourable"
        },
        {
          "$ref": "#/definitions/Shapeable"
        }
      ]
    },
    "facialHair": {
      "allOf": [
        {
          "$ref": "#/definitions/Colourable"
        },
        {
          "$ref": "#/definitions/Stylable"
        }
      ]
    },
    "hair": {
      "allOf": [
        {
          "$ref": "#/definitions/Colourable"
        },
        {
          "$ref": "#/definitions/Stylable"
        }
      ]
    },
    "nose": {
      "$ref": "#/definitions/Shapeable",
      "items": {
        "type": "object"
      }
    }
  },
  "type": "object"
}

export const appearanceRxSchema: RxJsonSchema<
  Omit<AppearanceDocType, '_attachments'>
> = {
  ...appearanceSchema as any,
  title: 'Appearance',
  description: 'Appearance',
  version: 0,
  keyCompression: true,
  primaryKey: 'id',
  type: 'object',
  attachments: {
    encrypted: false,
  },
};

export const userAppearanceRxSchema: RxJsonSchema<
  Omit<AppearanceDocType, '_attachments'>
> = {
  ...appearanceSchema as any,
  title: 'User Appearance',
  description: 'User Appearance',
  version: 0,
  keyCompression: true,
  primaryKey: 'id',
  type: 'object',
  attachments: {
    encrypted: false,
  },
};

export const APPEARANCE_COLLECTION_NAME = 'appearance';

export const APPEARANCE_COLLECTION_PROVIDER: Provider = {
  provide: ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN,
  useValue: {
    name: APPEARANCE_COLLECTION_NAME,
    creator: {
      schema: appearanceRxSchema,
    },
  },
  multi: true,
};

export const USER_APPEARANCE_COLLECTION_NAME = 'userappearance';

export const USER_APPEARANCE_COLLECTION_PROVIDER: Provider = {
  provide: ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN,
  useValue: {
    name: USER_APPEARANCE_COLLECTION_NAME,
    creator: {
      schema: userAppearanceRxSchema,
    },
  },
  multi: true,
};

