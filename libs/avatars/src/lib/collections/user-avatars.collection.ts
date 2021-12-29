import { Provider } from '@angular/core';
import { ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN } from '@central-factory/persistence/services/entity-manager';
import type {
  RxCollection,
  RxDocument,
  RxJsonSchema,
} from 'rxdb/dist/types/types';
import type { Avatar } from '../models/avatar';

export type UserAvatarDocType = Avatar;

export type UserAvatarDocument = RxDocument<UserAvatarDocType>;

export type UserAvatarsCollection = RxCollection<UserAvatarDocument>;

export const appearanceSchema = {
  type: 'object',
  description: 'Appearance',
  properties: {
    format: {
      type: 'string',
    },
    src: {
      type: 'string',
    },
    smallPreviewUrl: {
      type: 'string',
    },
    previewCamera: {
      type: 'object',
      properties: {
        position: {
          type: 'string',
        },
        rotation: {
          type: 'string',
        },
        scale: {
          type: 'string',
        },
      },
    },
  },
};

export const userAvatarsSchema: RxJsonSchema<UserAvatarDocType> = {
  title: 'User Avatars',
  description: 'User Avatars',
  version: 0,
  keyCompression: true,
  primaryKey: 'id',
  type: 'object',
  properties: {
    id: {
      type: 'string',
      description: 'Id',
    },
    welcomeMessage: {
      type: 'string',
      description: 'Welcome message',
    },
    name: {
      type: 'string',
      description: 'Name',
    },
    title: {
      type: 'string',
      description: 'Title',
    },
    selectedAppearance: appearanceSchema,
    appearances: {
      type: 'array',
      description: 'Appearances',
      items: appearanceSchema,
    },
    scopes: {
      type: 'array',
      description: 'Scopes',
      items: {
        type: 'object',
        properties: {
          integration: {
            type: 'string',
            description: 'Integration',
          },
          domain: {
            type: 'string',
            description: 'Domain',
          },
          scope: {
            type: 'string',
            description: 'Scope',
          },
        },
      },
    },
    skills: {
      type: 'array',
      description: 'Skills',
      items: {
        type: 'object',
        properties: {
          domain: {
            type: 'string',
            description: 'Domain',
          },
          scope: {
            type: 'string',
            description: 'Scope',
          },
          skill: {
            type: 'string',
            description: 'Skill',
          },
        },
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

export const USER_AVATARS_COLLECTION_PROVIDER: Provider = {
  provide: ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN,
  useValue: {
    name: 'useravatars',
    creator: {
      schema: userAvatarsSchema,
    },
  },
  multi: true,
};
