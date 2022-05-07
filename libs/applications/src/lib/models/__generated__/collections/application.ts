/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Provider } from '@angular/core';
import { ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN } from '@central-factory/persistence/services/entity-manager';
import { RxDocument, RxCollection, RxJsonSchema } from 'rxdb';
import { Application } from '../types';

export type ApplicationDocType = Application;
export type ApplicationDocument = RxDocument<ApplicationDocType>;
export type ApplicationCollection = RxCollection<ApplicationDocument>;

export const applicationSchema = {
  "additionalProperties": false,
  "properties": {
    "additionalProperties": {
      "$ref": "#/definitions/ApplicationAdditionalProperties",
      "items": {
        "type": "object"
      }
    },
    "backgroundColor": {
      "type": "string"
    },
    "categories": {
      "items": {
        "type": "string"
      },
      "type": "array"
    },
    "createdAt": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "iarcRatingId": {
      "type": "string"
    },
    "icons": {
      "items": {
        "type": "object"
      },
      "type": "array"
    },
    "id": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "screenshots": {
      "items": {
        "type": "object"
      },
      "type": "array"
    },
    "shortName": {
      "type": "string"
    },
    "shortcuts": {
      "items": {
        "type": "object"
      },
      "type": "array"
    },
    "startUrl": {
      "type": "string"
    },
    "themeColor": {
      "type": "string"
    },
    "updatedAt": {
      "type": "string"
    }
  },
  "required": [
    "id",
    "name",
    "startUrl"
  ],
  "type": "object"
}

export const applicationRxSchema: RxJsonSchema<
  Omit<ApplicationDocType, '_attachments'>
> = {
  ...applicationSchema as any,
  title: 'Application',
  description: 'Application',
  version: 0,
  keyCompression: true,
  primaryKey: 'id',
  type: 'object',
  attachments: {
    encrypted: false,
  },
};

export const APPLICATION_COLLECTION_PROVIDER: Provider = {
  provide: ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN,
  useValue: {
    name: 'Application',
    creator: {
      schema: applicationRxSchema,
    },
  },
  multi: true,
};

