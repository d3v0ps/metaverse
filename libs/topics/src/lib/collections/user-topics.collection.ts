import { Provider } from '@angular/core';
import { ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN } from '@central-factory/persistence/services/entity-manager';
import type {
  RxCollection,
  RxDocument,
  RxJsonSchema,
} from 'rxdb/dist/types/types';
import type { Topic } from '../models/topic';
import { topicsSchema } from './topics.schema';
export type UserTopicDocType = Topic;

export type UserTopicDocument = RxDocument<UserTopicDocType>;

export type UserTopicsCollection = RxCollection<UserTopicDocType>;

export const userTopicsSchema: RxJsonSchema<UserTopicDocType> = {
  title: 'User Topics',
  description: 'User Topics',
  version: 0,
  keyCompression: true,
  primaryKey: 'id',
  type: 'object',
  properties: topicsSchema.properties,
  required: ['id', 'priority', 'title', 'createdAt', 'updatedAt'],
};

export const USER_TOPICS_COLLECTION_PROVIDER: Provider = {
  provide: ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN,
  useValue: {
    name: 'usertopics',
    creator: {
      schema: userTopicsSchema,
    },
  },
  multi: true,
};
