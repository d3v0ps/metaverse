/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Provider } from '@angular/core';
import { ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN } from '@central-factory/persistence/services/entity-manager';
import { RxDocument, RxCollection, RxJsonSchema } from 'rxdb';
import { AppearanceInfo } from '../types';

export type AppearanceInfoDocType = AppearanceInfo;
export type AppearanceInfoDocument = RxDocument<AppearanceInfoDocType>;
export type AppearanceInfoCollection = RxCollection<AppearanceInfoDocument>;

export const appearanceInfoSchema = {
  "additionalProperties": false,
  "properties": {
    "bodyType": {
      "type": "string"
    },
    "eyeColor": {
      "type": "string"
    },
    "fatPercentage": {
      "type": "number"
    },
    "hairColor": {
      "description": "The appearance's hair color ",
      "type": "string"
    },
    "hairLength": {
      "type": "number"
    },
    "hairStyle": {
      "type": "string"
    },
    "height": {
      "type": "number"
    },
    "skinColor": {
      "description": "The appearance's skin color ",
      "type": "string"
    },
    "weight": {
      "type": "number"
    }
  },
  "type": "object"
}

export const appearanceInfoRxSchema: RxJsonSchema<
  Omit<AppearanceInfoDocType, '_attachments'>
> = {
  ...appearanceInfoSchema as any,
  title: 'AppearanceInfo',
  description: 'Appearance[object Object]Info',
  version: 0,
  keyCompression: true,
  primaryKey: 'id',
  type: 'object',
  attachments: {
    encrypted: false,
  },
};

export const APPEARANCE_INFO_COLLECTION_PROVIDER: Provider = {
  provide: ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN,
  useValue: {
    name: 'Appearance[object Object]Info',
    creator: {
      schema: appearanceInfoRxSchema,
    },
  },
  multi: true,
};

