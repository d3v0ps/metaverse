import { Provider } from '@angular/core';
import { ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN } from '@central-factory/persistence/services/entity-manager';
import type {
  RxCollection,
  RxDocument,
  RxJsonSchema,
} from 'rxdb/dist/types/types';
import type { Avatar } from '../__generated__/models';

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

export const userAvatarsSchema: RxJsonSchema<
  Omit<UserAvatarDocType, '_attachments'>
> = {
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
    identity: {
      type: 'object',
      description: 'identity',
    },
    appearance: {
      type: 'object',
      description: 'appearance',
    },
    knowledge: {
      type: 'object',
      description: 'knowledge',
    },
    outfits: {
      type: 'array',
      description: 'outfits',
    },
    selectedOutfit: {
      type: 'string',
    },
    location: {
      type: 'object',
      description: 'location',
    },
    appearances: {
      type: 'array',
      description: 'Appearances',
      items: appearanceSchema,
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
    attributes: {
      type: 'object',
      description: 'attributes',
    },
    relationships: {
      type: 'array',
      description: 'relationships',
    },
    children: {
      type: 'array',
    },
  },
  attachments: {
    encrypted: false,
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
