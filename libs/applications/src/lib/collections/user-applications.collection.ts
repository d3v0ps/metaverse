import { Provider } from '@angular/core';
import { ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN } from '@central-factory/persistence/services/entity-manager';
import type {
  RxCollection,
  RxDocument,
  RxJsonSchema,
} from 'rxdb/dist/types/types';
import { applicationSchema } from '../models/__generated__/collections';
import type { Application } from '../models/__generated__/types';
export type UserApplicationDocType = Application;

export type UserApplicationDocument = RxDocument<UserApplicationDocType>;

export type UserApplicationsCollection = RxCollection<UserApplicationDocType>;

export const userApplicationsSchema: RxJsonSchema<UserApplicationDocType> = {
  title: 'User Applications',
  description: 'User Applications',
  version: 0,
  keyCompression: true,
  primaryKey: 'id',
  type: 'object',
  properties: applicationSchema.properties,
  required: ['id', 'name', 'startUrl', 'createdAt', 'updatedAt'],
};

export const USER_APPLICATIONS_COLLECTION_PROVIDER: Provider = {
  provide: ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN,
  useValue: {
    name: 'userapplications',
    creator: {
      schema: userApplicationsSchema,
    },
  },
  multi: true,
};
