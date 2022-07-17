/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Provider } from '@angular/core';
import { ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN } from '@central-factory/persistence/entity-manager';
import { RxCollection, RxDocument, RxJsonSchema } from 'rxdb';
import { Outfit } from '../types';

export type OutfitDocType = Outfit;
export type OutfitDocument = RxDocument<OutfitDocType>;
export type OutfitCollection = RxCollection<OutfitDocument>;

export const outfitSchema = {
  additionalProperties: false,
  properties: {
    back: {
      type: 'string',
    },
    feet: {
      type: 'string',
    },
    hands: {
      $ref: '#/definitions/HandsSlotGroup',
      items: {
        type: 'object',
      },
    },
    head: {
      $ref: '#/definitions/HeadSlot',
      items: {
        type: 'object',
      },
    },
    legs: {
      type: 'string',
    },
    name: {
      type: 'string',
    },
    shoulders: {
      type: 'string',
    },
    torso: {
      $ref: '#/definitions/TorsoSlot',
      items: {
        type: 'object',
      },
    },
  },
  type: 'object',
};

export const outfitRxSchema: RxJsonSchema<Omit<OutfitDocType, '_attachments'>> =
  {
    ...(outfitSchema as any),
    title: 'Outfit',
    description: 'Outfit',
    version: 0,
    keyCompression: true,
    primaryKey: 'id',
    type: 'object',
    attachments: {
      encrypted: false,
    },
  };

export const userOutfitRxSchema: RxJsonSchema<
  Omit<OutfitDocType, '_attachments'>
> = {
  ...(outfitSchema as any),
  title: 'User Outfit',
  description: 'User Outfit',
  version: 0,
  keyCompression: true,
  primaryKey: 'id',
  type: 'object',
  attachments: {
    encrypted: false,
  },
};

export const OUTFIT_COLLECTION_NAME = 'outfit';

export const OUTFIT_COLLECTION_PROVIDER: Provider = {
  provide: ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN,
  useValue: {
    name: OUTFIT_COLLECTION_NAME,
    creator: {
      schema: outfitRxSchema,
    },
  },
  multi: true,
};

export const USER_OUTFIT_COLLECTION_NAME = 'useroutfit';

export const USER_OUTFIT_COLLECTION_PROVIDER: Provider = {
  provide: ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN,
  useValue: {
    name: USER_OUTFIT_COLLECTION_NAME,
    creator: {
      schema: userOutfitRxSchema,
    },
  },
  multi: true,
};
