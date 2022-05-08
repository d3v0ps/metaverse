/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Provider } from '@angular/core';
import { ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN } from '@central-factory/persistence/services/entity-manager';
import { RxDocument, RxCollection, RxJsonSchema } from 'rxdb';
import { Era } from '../types';

export type EraDocType = Era;
export type EraDocument = RxDocument<EraDocType>;
export type EraCollection = RxCollection<EraDocument>;

export const eraSchema = {
  "additionalProperties": false,
  "properties": {
    "color": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "endYear": {
      "type": "number"
    },
    "events": {
      "items": {
        "type": "object"
      },
      "type": "array"
    },
    "icon": {
      "type": "string"
    },
    "id": {
      "type": "string"
    },
    "mapStyle": {
      "type": "string",
      "enum": [
        "default",
        "ancient",
        "gloom",
        "light",
        "watercolor",
        "clean",
        "atlas",
        "cyberpunk",
        "monochrome"
      ]
    },
    "military": {
      "items": {
        "type": "object"
      },
      "type": "array"
    },
    "name": {
      "type": "string"
    },
    "shortName": {
      "type": "string"
    },
    "startYear": {
      "type": "number"
    }
  },
  "required": [
    "id",
    "name",
    "shortName",
    "startYear",
    "military",
    "events"
  ],
  "type": "object"
}

export const eraRxSchema: RxJsonSchema<
  Omit<EraDocType, '_attachments'>
> = {
  ...eraSchema as any,
  title: 'Era',
  description: 'Era',
  version: 0,
  keyCompression: true,
  primaryKey: 'id',
  type: 'object',
  attachments: {
    encrypted: false,
  },
};

export const userEraRxSchema: RxJsonSchema<
  Omit<EraDocType, '_attachments'>
> = {
  ...eraSchema as any,
  title: 'User Era',
  description: 'User Era',
  version: 0,
  keyCompression: true,
  primaryKey: 'id',
  type: 'object',
  attachments: {
    encrypted: false,
  },
};

export const ERA_COLLECTION_NAME = 'era';

export const ERA_COLLECTION_PROVIDER: Provider = {
  provide: ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN,
  useValue: {
    name: ERA_COLLECTION_NAME,
    creator: {
      schema: eraRxSchema,
    },
  },
  multi: true,
};

export const USER_ERA_COLLECTION_NAME = 'userera';

export const USER_ERA_COLLECTION_PROVIDER: Provider = {
  provide: ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN,
  useValue: {
    name: USER_ERA_COLLECTION_NAME,
    creator: {
      schema: userEraRxSchema,
    },
  },
  multi: true,
};

