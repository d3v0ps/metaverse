/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Provider } from '@angular/core';
import { ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN } from '@central-factory/persistence/services/entity-manager';
import { RxDocument, RxCollection, RxJsonSchema } from 'rxdb';
import { FantasyMapGeneratorMap } from '../types';

export type FantasyMapGeneratorMapDocType = FantasyMapGeneratorMap;
export type FantasyMapGeneratorMapDocument = RxDocument<FantasyMapGeneratorMapDocType>;
export type FantasyMapGeneratorMapCollection = RxCollection<FantasyMapGeneratorMapDocument>;

export const fantasyMapGeneratorMapSchema = {
  "additionalProperties": false,
  "properties": {
    "biomes": {
      "$ref": "#/definitions/Biomes",
      "items": {
        "type": "object"
      }
    },
    "cells": {
      "$ref": "#/definitions/MapCells",
      "items": {
        "type": "object"
      }
    },
    "coords": {
      "$ref": "#/definitions/MapCoords",
      "items": {
        "type": "object"
      }
    },
    "id": {
      "type": "string"
    },
    "info": {
      "$ref": "#/definitions/MapInfo",
      "items": {
        "type": "object"
      }
    },
    "nameBases": {
      "items": {
        "type": "object"
      },
      "type": "array"
    },
    "notes": {
      "items": {
        "type": "object"
      },
      "type": "array"
    },
    "settings": {
      "$ref": "#/definitions/MapSettings",
      "items": {
        "type": "object"
      }
    }
  },
  "required": [
    "id",
    "info",
    "settings",
    "coords",
    "cells",
    "biomes",
    "notes",
    "nameBases"
  ],
  "type": "object"
}

export const fantasyMapGeneratorMapRxSchema: RxJsonSchema<
  Omit<FantasyMapGeneratorMapDocType, '_attachments'>
> = {
  ...fantasyMapGeneratorMapSchema as any,
  title: 'FantasyMapGeneratorMap',
  description: 'Fantasy Map Generator Map',
  version: 0,
  keyCompression: true,
  primaryKey: 'id',
  type: 'object',
  attachments: {
    encrypted: false,
  },
};

export const FANTASY_MAP_GENERATOR_MAP_COLLECTION_PROVIDER: Provider = {
  provide: ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN,
  useValue: {
    name: 'fantasyMapGeneratorMap',
    creator: {
      schema: fantasyMapGeneratorMapRxSchema,
    },
  },
  multi: true,
};

