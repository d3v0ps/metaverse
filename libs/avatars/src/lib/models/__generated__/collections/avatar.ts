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
  "description": "An Avatar ",
  "properties": {
    "_attachments": {},
    "appearance": {
      "description": "The avatar's appearance ",
      "type": "object"
    },
    "appearances": {
      "description": "The avatar's appearances ",
      "items": {
        "type": "object"
      },
      "type": "array"
    },
    "attributes": {
      "description": "The avatar's attributes ",
      "type": "object"
    },
    "children": {
      "items": {
        "type": "object"
      },
      "type": "array"
    },
    "createdAt": {
      "additionalProperties": false,
      "description": "The avatar's created at ",
      "type": "object"
    },
    "id": {
      "description": "The avatar's id ",
      "type": "string"
    },
    "identity": {
      "description": "The avatar's identity ",
      "type": "object"
    },
    "knowledge": {
      "description": "The avatar's knowledge "
    },
    "location": {
      "additionalProperties": false,
      "properties": {
        "burg": {
          "type": "number"
        },
        "coordinates": {
          "additionalProperties": false,
          "properties": {
            "x": {
              "type": "number"
            },
            "y": {
              "type": "number"
            },
            "z": {
              "type": "number"
            }
          },
          "required": [
            "x",
            "y"
          ],
          "type": "object"
        },
        "world": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "outfits": {
      "description": "The avatar's outfits ",
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
      "description": "The avatar's updated at ",
      "type": "object"
    }
  },
  "required": [
    "id",
    "appearances"
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
    name: 'Avatar',
    creator: {
      schema: avatarRxSchema,
    },
  },
  multi: true,
};

