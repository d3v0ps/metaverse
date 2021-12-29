import { Provider } from '@angular/core';
import { ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN } from '@central-factory/persistence/services/entity-manager';
import type {
  RxCollection,
  RxDocument,
  RxJsonSchema,
} from 'rxdb/dist/types/types';
import type { Preference } from '../models/preference';

export type UserPreferenceDocType<TValue = string> = Preference<TValue>;

export type UserPreferenceDocument = RxDocument<UserPreferenceDocType>;

export type UserPreferencesCollection = RxCollection<UserPreferenceDocType>;

export const userPreferencesSchema: RxJsonSchema<UserPreferenceDocType> = {
  title: 'User Preferences',
  description: 'User preferences',
  version: 0,
  keyCompression: true,
  primaryKey: 'id',
  type: 'object',
  properties: {
    id: {
      type: 'string',
      description: 'Key',
    },
    value: {
      description: 'Value',
    },
    createdAt: {
      format: 'date-time',
      type: 'string',
    },
    updatedAt: {
      format: 'date-time',
      type: 'string',
    },
  },
  required: ['id', 'value'],
};

export const USER_PREFERENCES_COLLECTION_PROVIDER: Provider = {
  provide: ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN,
  useValue: {
    name: 'userpreferences',
    creator: {
      schema: userPreferencesSchema,
    },
  },
  multi: true,
};
