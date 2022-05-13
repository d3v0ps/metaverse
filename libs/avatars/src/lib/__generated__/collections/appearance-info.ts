/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Provider } from '@angular/core';
import { ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN } from '@central-factory/persistence/entity-manager';
import { RxCollection, RxDocument, RxJsonSchema } from 'rxdb';
import { AppearanceInfo } from '../types';

export type AppearanceInfoDocType = AppearanceInfo;
export type AppearanceInfoDocument = RxDocument<AppearanceInfoDocType>;
export type AppearanceInfoCollection = RxCollection<AppearanceInfoDocument>;

export const appearanceInfoSchema = {
  additionalProperties: false,
  properties: {
    bodyType: {
      type: 'string',
    },
    eyeColor: {
      type: 'string',
    },
    fatPercentage: {
      type: 'number',
    },
    hairColor: {
      type: 'string',
    },
    hairLength: {
      type: 'number',
    },
    hairStyle: {
      type: 'string',
    },
    height: {
      type: 'number',
    },
    skinColor: {
      type: 'string',
    },
    weight: {
      type: 'number',
    },
  },
  type: 'object',
};

export const appearanceInfoRxSchema: RxJsonSchema<
  Omit<AppearanceInfoDocType, '_attachments'>
> = {
  ...(appearanceInfoSchema as any),
  title: 'AppearanceInfo',
  description: 'Appearance Info',
  version: 0,
  keyCompression: true,
  primaryKey: 'id',
  type: 'object',
  attachments: {
    encrypted: false,
  },
};

export const userAppearanceInfoRxSchema: RxJsonSchema<
  Omit<AppearanceInfoDocType, '_attachments'>
> = {
  ...(appearanceInfoSchema as any),
  title: 'User AppearanceInfo',
  description: 'User Appearance Info',
  version: 0,
  keyCompression: true,
  primaryKey: 'id',
  type: 'object',
  attachments: {
    encrypted: false,
  },
};

export const APPEARANCE_INFO_COLLECTION_NAME = 'appearance-info';

export const APPEARANCE_INFO_COLLECTION_PROVIDER: Provider = {
  provide: ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN,
  useValue: {
    name: APPEARANCE_INFO_COLLECTION_NAME,
    creator: {
      schema: appearanceInfoRxSchema,
    },
  },
  multi: true,
};

export const USER_APPEARANCE_INFO_COLLECTION_NAME = 'userappearance-info';

export const USER_APPEARANCE_INFO_COLLECTION_PROVIDER: Provider = {
  provide: ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN,
  useValue: {
    name: USER_APPEARANCE_INFO_COLLECTION_NAME,
    creator: {
      schema: userAppearanceInfoRxSchema,
    },
  },
  multi: true,
};
