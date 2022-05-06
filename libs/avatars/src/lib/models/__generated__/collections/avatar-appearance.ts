/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Provider } from '@angular/core';
import { ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN } from '@central-factory/persistence/services/entity-manager';
import { RxDocument, RxCollection, RxJsonSchema } from 'rxdb';
import { AvatarAppearance } from '../types';

export type AvatarAppearanceDocType = AvatarAppearance;
export type AvatarAppearanceDocument = RxDocument<AvatarAppearanceDocType>;
export type AvatarAppearanceCollection = RxCollection<AvatarAppearanceDocument>;

export const avatarAppearanceSchema = {
  "additionalProperties": false,
  "properties": {
    "body": {
      "additionalProperties": false,
      "properties": {
        "shape": {
          "type": "string"
        },
        "skin": {
          "type": "string"
        },
        "type": {
          "$ref": "#/definitions/AvatarGender"
        }
      },
      "type": "object"
    },
    "ears": {
      "additionalProperties": false,
      "properties": {
        "shape": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "eyes": {
      "additionalProperties": false,
      "properties": {
        "color": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "facialHair": {
      "additionalProperties": false,
      "properties": {
        "color": {
          "type": "string"
        },
        "style": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "hair": {
      "additionalProperties": false,
      "properties": {
        "color": {
          "type": "string"
        },
        "style": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "nose": {
      "additionalProperties": false,
      "properties": {
        "shape": {
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  "type": "object"
}

export const avatarAppearanceRxSchema: RxJsonSchema<
  Omit<AvatarAppearanceDocType, '_attachments'>
> = {
  ...avatarAppearanceSchema as any,
  title: 'AvatarAppearance',
  description: 'Avatar[object Object]Appearance',
  version: 0,
  keyCompression: true,
  primaryKey: 'id',
  type: 'object',
  attachments: {
    encrypted: false,
  },
};

export const AVATAR_APPEARANCE_COLLECTION_PROVIDER: Provider = {
  provide: ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN,
  useValue: {
    name: 'Avatar[object Object]Appearance',
    creator: {
      schema: avatarAppearanceRxSchema,
    },
  },
  multi: true,
};

