/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Provider } from '@angular/core';
import { ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN } from '@central-factory/persistence/services/entity-manager';
import { RxDocument, RxCollection, RxJsonSchema } from 'rxdb';
import { World } from '../types';

export type WorldDocType = World;
export type WorldDocument = RxDocument<WorldDocType>;
export type WorldCollection = RxCollection<WorldDocument>;

export const worldSchema = {
  "additionalProperties": false,
  "properties": {
    "archetypes": {
      "items": {},
      "type": "array"
    },
    "avatars": {
      "items": {},
      "type": "array"
    },
    "displayName": {
      "type": "string"
    },
    "eras": {
      "items": {},
      "type": "array"
    },
    "id": {
      "type": "string"
    },
    "kind": {
      "type": "string",
      "enum": [
        "analog",
        "digital",
        "unknown"
      ]
    },
    "map": {},
    "meta": {
      "$ref": "#/definitions/Meta",
      "items": {
        "type": "object"
      }
    },
    "professions": {
      "items": {},
      "type": "array"
    },
    "state": {},
    "stats": {
      "$ref": "#/definitions/WorldStats",
      "items": {
        "type": "object"
      }
    },
    "year": {
      "type": "number"
    }
  },
  "required": [
    "id",
    "meta",
    "kind",
    "year"
  ],
  "type": "object"
}

export const worldRxSchema: RxJsonSchema<
  Omit<WorldDocType, '_attachments'>
> = {
  ...worldSchema as any,
  title: 'World',
  description: 'World',
  version: 0,
  keyCompression: true,
  primaryKey: 'id',
  type: 'object',
  attachments: {
    encrypted: false,
  },
};

export const WORLD_COLLECTION_PROVIDER: Provider = {
  provide: ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN,
  useValue: {
    name: 'World',
    creator: {
      schema: worldRxSchema,
    },
  },
  multi: true,
};

