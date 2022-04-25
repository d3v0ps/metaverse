import { Provider } from '@angular/core';
import { ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN } from '@central-factory/persistence/services/entity-manager';
import type {
  RxCollection,
  RxDocument,
  RxJsonSchema,
} from 'rxdb/dist/types/types';
import type { Application } from '../models/application';
import { applicationsSchema } from './applications.schema';
export type StoreApplicationDocType = Application;

export type StoreApplicationDocument = RxDocument<StoreApplicationDocType>;

export type StoreApplicationsCollection =
  RxCollection<StoreApplicationDocument>;

export const storeApplicationsSchema: RxJsonSchema<StoreApplicationDocType> = {
  title: 'Store Store',
  description: 'User Applications',
  version: 0,
  keyCompression: true,
  primaryKey: 'id',
  type: 'object',
  properties: applicationsSchema.properties,
  required: ['id', 'name', 'startUrl', 'createdAt', 'updatedAt'],
};

export const STORE_APPLICATIONS_COLLECTION_PROVIDER: Provider = {
  provide: ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN,
  useValue: {
    name: 'storeapplications',
    creator: {
      schema: storeApplicationsSchema,
    },
  },
  multi: true,
};
