/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Provider } from '@angular/core';
import { ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN } from '@central-factory/persistence/services/entity-manager';
import { RxDocument, RxCollection, RxJsonSchema } from 'rxdb';
import { Avatar } from '../types';

export type AvatarDocType = Avatar;
export type AvatarDocument = RxDocument<AvatarDocType>;
export type AvatarCollection = RxCollection<AvatarDocument>;

export const avatarSchema = {
  "additionalProperties": false,
  "properties": {
    "_attachments": {},
    "appearance": {
      "$ref": "#/definitions/Appearance",
      "items": {
        "type": "object"
      }
    },
    "appearances": {
      "items": {},
      "type": "array"
    },
    "attributes": {
      "$ref": "#/definitions/Attributes",
      "items": {
        "type": "object"
      }
    },
    "children": {
      "items": {
        "type": "object"
      },
      "type": "array"
    },
    "createdAt": {
      "additionalProperties": false,
      "description": "Enables basic storage and retrieval of dates and times. ",
      "type": "object"
    },
    "id": {
      "type": "string"
    },
    "identity": {
      "$ref": "#/definitions/Identity",
      "items": {
        "type": "object"
      }
    },
    "knowledge": {},
    "location": {
      "$ref": "#/definitions/Location",
      "items": {
        "type": "object"
      }
    },
    "outfits": {
      "items": {
        "type": "object"
      },
      "type": "array"
    },
    "relationships": {
      "items": {
        "type": "object"
      },
      "type": "array"
    },
    "selectedOutfit": {
      "type": "string"
    },
    "updatedAt": {
      "additionalProperties": false,
      "description": "Enables basic storage and retrieval of dates and times. ",
      "type": "object"
    }
  },
  "required": [
    "id"
  ],
  "type": "object"
}

export const avatarRxSchema: RxJsonSchema<
  Omit<AvatarDocType, '_attachments'>
> = {
  ...avatarSchema as any,
  title: 'Avatar',
  description: 'Avatar',
  version: 0,
  keyCompression: true,
  primaryKey: 'id',
  type: 'object',
  attachments: {
    encrypted: false,
  },
};

export const AVATAR_COLLECTION_PROVIDER: Provider = {
  provide: ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN,
  useValue: {
    name: 'avatar',
    creator: {
      schema: avatarRxSchema,
    },
  },
  multi: true,
};

