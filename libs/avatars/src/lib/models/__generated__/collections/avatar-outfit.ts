/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Provider } from '@angular/core';
import { ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN } from '@central-factory/persistence/services/entity-manager';
import { RxDocument, RxCollection, RxJsonSchema } from 'rxdb';
import { AvatarOutfit } from '../types';

export type AvatarOutfitDocType = AvatarOutfit;
export type AvatarOutfitDocument = RxDocument<AvatarOutfitDocType>;
export type AvatarOutfitCollection = RxCollection<AvatarOutfitDocument>;

export const avatarOutfitSchema = {
  "additionalProperties": false,
  "properties": {
    "back": {
      "description": "Item Id ",
      "type": "string"
    },
    "feet": {
      "description": "Item Id ",
      "type": "string"
    },
    "hands": {
      "additionalProperties": false,
      "properties": {
        "slot1": {
          "additionalProperties": false,
          "properties": {
            "bothHands": {
              "description": "Item Id ",
              "type": "string"
            },
            "leftHand": {
              "description": "Item Id ",
              "type": "string"
            },
            "rightHand": {
              "description": "Item Id ",
              "type": "string"
            }
          },
          "type": "object"
        },
        "slot2": {
          "additionalProperties": false,
          "properties": {
            "bothHands": {
              "description": "Item Id ",
              "type": "string"
            },
            "leftHand": {
              "description": "Item Id ",
              "type": "string"
            },
            "rightHand": {
              "description": "Item Id ",
              "type": "string"
            }
          },
          "type": "object"
        }
      },
      "type": "object"
    },
    "head": {
      "additionalProperties": false,
      "properties": {
        "headgear": {
          "description": "Item Id ",
          "type": "string"
        },
        "visor": {
          "description": "Item Id ",
          "type": "string"
        }
      },
      "type": "object"
    },
    "legs": {
      "description": "Item Id ",
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "shoulders": {
      "description": "Item Id ",
      "type": "string"
    },
    "torso": {
      "additionalProperties": false,
      "properties": {
        "layer1": {
          "description": "Item Id ",
          "type": "string"
        },
        "layer2": {
          "description": "Item Id ",
          "type": "string"
        },
        "layer3": {
          "description": "Item Id ",
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  "required": [
    "name"
  ],
  "type": "object"
}

export const avatarOutfitRxSchema: RxJsonSchema<
  Omit<AvatarOutfitDocType, '_attachments'>
> = {
  ...avatarOutfitSchema as any,
  title: 'AvatarOutfit',
  description: 'Avatar[object Object]Outfit',
  version: 0,
  keyCompression: true,
  primaryKey: 'id',
  type: 'object',
  attachments: {
    encrypted: false,
  },
};

export const AVATAR_OUTFIT_COLLECTION_PROVIDER: Provider = {
  provide: ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN,
  useValue: {
    name: 'Avatar[object Object]Outfit',
    creator: {
      schema: avatarOutfitRxSchema,
    },
  },
  multi: true,
};

