import { Provider } from '@angular/core';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN } from '@central-factory/persistence/services/entity-manager';
import type {
  RxCollection,
  RxDocument,
  RxJsonSchema,
} from 'rxdb/dist/types/types';
import type { Permission } from '../models/permission';

export type ApplicationPermissionDocType = Permission;

export type ApplicationPermissionDocument =
  RxDocument<ApplicationPermissionDocType>;

export type ApplicationPermissionsCollection =
  RxCollection<ApplicationPermissionDocType>;

export const applicationPermissionsSchema: RxJsonSchema<ApplicationPermissionDocType> =
  {
    title: 'Application Permissions',
    description: 'Application Permissions',
    version: 0,
    keyCompression: true,
    primaryKey: {
      key: 'id',
      fields: ['appId', 'kind', 'mode', 'target'],
      separator: ':',
    },
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'Id',
      },
      appId: {
        type: 'string',
        description: 'AppId',
      },
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
      createdAt: {
        format: 'date-time',
        type: 'string',
      },
      updatedAt: {
        format: 'date-time',
        type: 'string',
      },
    },
    required: ['id', 'appId', 'kind', 'mode', 'target'],
    encrypted: ['kind', 'mode', 'target'],
  };

export const APPLICATION_PERMISSIONS_COLLECTION_PROVIDER: Provider = {
  provide: ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN,
  useValue: {
    name: 'applicationpermissions',
    creator: {
      schema: applicationPermissionsSchema,
    },
  },
  multi: true,
};
