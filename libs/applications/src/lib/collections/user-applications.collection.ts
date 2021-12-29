import { Provider } from '@angular/core';
import { ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN } from '@central-factory/persistence/services/entity-manager';
import type {
  RxCollection,
  RxDocument,
  RxJsonSchema,
} from 'rxdb/dist/types/types';
import type { Application } from '../models/application';
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
  properties: {
    id: {
      type: 'string',
      description: 'Id',
    },
    name: {
      type: 'string',
      description: 'Name',
    },
    shortName: {
      type: 'string',
      description: 'Short name',
    },
    description: {
      type: 'string',
      description: 'Description',
    },
    startUrl: {
      type: 'string',
      description: 'Start url',
    },
    icons: {
      type: 'array',
      description: 'Icons',
      items: {
        type: 'object',
        properties: {
          src: {
            type: 'string',
            description: 'Src',
          },
          sizes: {
            type: 'string',
            description: 'Sizes',
          },
          type: {
            type: 'string',
            description: 'Type',
          },
        },
        required: ['src', 'sizes', 'type'],
      },
    },
    themeColor: {
      type: 'string',
      description: 'Theme color',
    },
    backgroundColor: {
      type: 'string',
      description: 'Background color',
    },
    screenshots: {
      type: 'array',
      description: 'Screenshots',
      items: {
        type: 'object',
        properties: {
          src: {
            type: 'string',
            description: 'Src',
          },
          sizes: {
            type: 'string',
            description: 'Sizes',
          },
          type: {
            type: 'string',
            description: 'Type',
          },
          platform: {
            type: 'string',
            description: 'Platform',
          },
          label: {
            type: 'string',
            description: 'Label',
          },
        },
        required: ['src', 'sizes', 'type', 'platform', 'label'],
      },
    },
    iarcRatingId: {
      type: 'string',
      description: 'IARC rating id',
    },
    categories: {
      type: 'array',
      description: 'Categories',
      items: {
        type: 'string',
        description: 'Category',
      },
    },
    additionalProperties: {
      type: 'object',
      description: 'Additional properties',
      properties: {
        permissions: {
          type: 'array',
          description: 'Permissions',
          items: {
            type: 'object',
            properties: {
              kind: {
                type: 'string',
                description: 'Kind',
                enum: ['collection'],
              },
              mode: {
                type: 'string',
                description: 'Mode',
                enum: ['read', 'write', 'delete'],
              },
              target: {
                type: 'string',
                description: 'Target',
              },
            },
            required: ['kind', 'mode', 'target'],
          },
        },
        sidebarShortcuts: {
          type: 'array',
          description: 'Sidebar shortcuts',
          items: {
            type: 'string',
            description: 'Sidebar shortcut',
          },
        },
      },
    },
    shortcuts: {
      type: 'array',
      description: 'Shortcuts',
      items: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            description: 'Name',
          },
          url: {
            type: 'string',
            description: 'Url',
          },
          icons: {
            type: 'array',
            description: 'Icons',
            items: {
              type: 'object',
              properties: {
                src: {
                  type: 'string',
                  description: 'Src',
                },
                sizes: {
                  type: 'string',
                  description: 'Sizes',
                },
                type: {
                  type: 'string',
                  description: 'Type',
                },
              },
              required: ['src', 'sizes', 'type'],
            },
          },
          shortName: {
            type: 'string',
            description: 'Short name',
          },
          description: {
            type: 'string',
            description: 'Description',
          },
        },
        required: ['name', 'url'],
      },
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
