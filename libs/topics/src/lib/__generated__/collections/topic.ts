/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Provider } from '@angular/core';
import { ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN } from '@central-factory/persistence/entity-manager';
import { RxCollection, RxDocument, RxJsonSchema } from 'rxdb';
import { Topic } from '../types';

export type TopicDocType = Topic;
export type TopicDocument = RxDocument<TopicDocType>;
export type TopicCollection = RxCollection<TopicDocument>;

export const topicSchema = {
  additionalProperties: false,
  properties: {
    applications: {
      items: {
        type: 'string',
      },
      type: 'array',
    },
    background: {
      type: 'string',
    },
    categories: {
      items: {
        type: 'string',
      },
      type: 'array',
    },
    createdAt: {
      type: 'string',
    },
    description: {
      type: 'string',
    },
    icon: {
      type: 'string',
    },
    id: {
      type: 'string',
    },
    media: {},
    priority: {
      type: 'string',
      enum: ['low', 'medium', 'high'],
    },
    shortcuts: {
      items: {
        type: 'string',
      },
      type: 'array',
    },
    themeColor: {
      type: 'string',
    },
    title: {
      type: 'string',
    },
    triggers: {
      items: {
        type: 'object',
      },
      type: 'array',
    },
    updatedAt: {
      type: 'string',
    },
  },
  required: ['id', 'priority', 'title'],
  type: 'object',
};

export const topicRxSchema: RxJsonSchema<Omit<TopicDocType, '_attachments'>> = {
  ...(topicSchema as any),
  title: 'Topic',
  description: 'Topic',
  version: 0,
  keyCompression: true,
  primaryKey: 'id',
  type: 'object',
  attachments: {
    encrypted: false,
  },
};

export const userTopicRxSchema: RxJsonSchema<
  Omit<TopicDocType, '_attachments'>
> = {
  ...(topicSchema as any),
  title: 'User Topic',
  description: 'User Topic',
  version: 0,
  keyCompression: true,
  primaryKey: 'id',
  type: 'object',
  attachments: {
    encrypted: false,
  },
};

export const TOPIC_COLLECTION_NAME = 'topic';

export const TOPIC_COLLECTION_PROVIDER: Provider = {
  provide: ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN,
  useValue: {
    name: TOPIC_COLLECTION_NAME,
    creator: {
      schema: topicRxSchema,
    },
  },
  multi: true,
};

export const USER_TOPIC_COLLECTION_NAME = 'usertopic';

export const USER_TOPIC_COLLECTION_PROVIDER: Provider = {
  provide: ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN,
  useValue: {
    name: USER_TOPIC_COLLECTION_NAME,
    creator: {
      schema: userTopicRxSchema,
    },
  },
  multi: true,
};
