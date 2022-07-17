/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Provider } from '@angular/core';
import { ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN } from '@central-factory/persistence/entity-manager';
import { RxCollection, RxDocument, RxJsonSchema } from 'rxdb';
import { Application } from '../types';

export type ApplicationDocType = Application;
export type ApplicationDocument = RxDocument<ApplicationDocType>;
export type ApplicationCollection = RxCollection<ApplicationDocument>;

export const applicationSchema = {
  additionalProperties: false,
  properties: {
    domains: {
      $ref: '#/definitions/Domain',
      items: {
        type: 'object',
      },
    },
    package: {
      $ref: '#/definitions/Package',
      items: {
        type: 'object',
      },
    },
    readme: {
      type: 'string',
    },
    workspace: {
      $ref: '#/definitions/Workspace',
      items: {
        type: 'object',
      },
    },
  },
  type: 'object',
};

export const applicationRxSchema: RxJsonSchema<
  Omit<ApplicationDocType, '_attachments'>
> = {
  ...(applicationSchema as any),
  title: 'Application',
  description: 'Application',
  version: 0,
  keyCompression: true,
  primaryKey: 'id',
  type: 'object',
  attachments: {
    encrypted: false,
  },
};

export const userApplicationRxSchema: RxJsonSchema<
  Omit<ApplicationDocType, '_attachments'>
> = {
  ...(applicationSchema as any),
  title: 'User Application',
  description: 'User Application',
  version: 0,
  keyCompression: true,
  primaryKey: 'id',
  type: 'object',
  attachments: {
    encrypted: false,
  },
};

export const APPLICATION_COLLECTION_NAME = 'application';

export const APPLICATION_COLLECTION_PROVIDER: Provider = {
  provide: ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN,
  useValue: {
    name: APPLICATION_COLLECTION_NAME,
    creator: {
      schema: applicationRxSchema,
    },
  },
  multi: true,
};

export const USER_APPLICATION_COLLECTION_NAME = 'userapplication';

export const USER_APPLICATION_COLLECTION_PROVIDER: Provider = {
  provide: ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN,
  useValue: {
    name: USER_APPLICATION_COLLECTION_NAME,
    creator: {
      schema: userApplicationRxSchema,
    },
  },
  multi: true,
};
