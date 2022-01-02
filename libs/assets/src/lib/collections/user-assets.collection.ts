import { Provider } from '@angular/core';
import { ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN } from '@central-factory/persistence/services/entity-manager';
import type {
  RxCollection,
  RxDocument,
  RxJsonSchema,
} from 'rxdb/dist/types/types';
import type { Asset } from '../models/asset';

export type UserAssetDocType = Asset;

export type UserAssetDocument = RxDocument<UserAssetDocType>;

export type UserAssetsCollection = RxCollection<UserAssetDocument>;

export const userAssetsSchema: RxJsonSchema<UserAssetDocType> = {
  title: 'User Assets',
  description: 'User assets',
  version: 0,
  keyCompression: true,
  primaryKey: 'id',
  type: 'object',
  properties: {
    id: {
      type: 'string',
      description: 'Id',
    },
    name: {
      type: 'string',
      description: 'Name',
    },
    model: {
      type: 'string',
      description: 'Model',
    },
    description: {
      type: 'string',
      description: 'Description',
    },
    digital: {
      type: 'boolean',
      description: 'Digital',
    },
    private: {
      type: 'boolean',
      description: 'Private',
    },
    kind: {
      type: 'string',
      description: 'Kind',
      enum: [
        'unknown',
        'currency',
        'land',
        'material',
        'building',
        'equipment',
        'furniture',
        'machine',
        'vehicle',
        'media-resource',
        'other',
      ],
    },
    url: {
      type: 'string',
      description: 'Url',
    },
    previewUrl: {
      type: 'string',
      description: 'Preview url',
    },
    currentValue: {
      type: 'number',
      description: 'Current value',
    },
    purchaseValue: {
      type: 'number',
      description: 'Purchase value',
    },
    purchaseDate: {
      format: 'date-time',
      type: 'string',
    },
    data: {
      type: 'object',
      description: 'Data',
    },
    owner: {
      type: 'string',
      description: 'Owner',
    },
    producer: {
      type: 'string',
      description: 'Producer',
    },
    permissions: {
      type: 'array',
      description: 'Permissions',
      items: {
        type: 'object',
        description: 'Permission',
      },
    },
    createdAt: {
      format: 'date-time',
      type: 'string',
      description: 'Created at',
    },
    updatedAt: {
      format: 'date-time',
      type: 'string',
      description: 'Updated at',
    },
  },
};

export const USER_ASSETS_COLLECTION_PROVIDER: Provider = {
  provide: ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN,
  useValue: {
    name: 'userassets',
    creator: {
      schema: userAssetsSchema,
    },
  },
  multi: true,
};
