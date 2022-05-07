import { Provider } from '@angular/core';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN } from '@central-factory/persistence/services/entity-manager';
import type {
  RxCollection,
  RxDocument,
  RxJsonSchema,
} from 'rxdb/dist/types/types';
import { permissionSchema } from '../__generated__/collections/permission';
import type { Permission } from '../__generated__/models';

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
    properties: permissionSchema.properties,
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
