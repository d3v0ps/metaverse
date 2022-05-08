/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Provider } from '@angular/core';
import { ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN } from '@central-factory/persistence/services/entity-manager';
import { RxDocument, RxCollection, RxJsonSchema } from 'rxdb';
import { Permission } from '../types';

export type PermissionDocType = Permission;
export type PermissionDocument = RxDocument<PermissionDocType>;
export type PermissionCollection = RxCollection<PermissionDocument>;

export const permissionSchema = {
  "additionalProperties": false,
  "properties": {
    "appId": {
      "type": "string"
    },
    "createdAt": {
      "type": "string"
    },
    "id": {
      "type": "string"
    },
    "kind": {
      "type": "string",
      "enum": [
        "Collection"
      ]
    },
    "mode": {
      "type": "string",
      "enum": [
        "Read",
        "Write",
        "Delete"
      ]
    },
    "target": {
      "type": "string"
    },
    "updatedAt": {
      "type": "string"
    }
  },
  "required": [
    "id",
    "appId",
    "kind",
    "mode",
    "target"
  ],
  "type": "object"
}

export const permissionRxSchema: RxJsonSchema<
  Omit<PermissionDocType, '_attachments'>
> = {
  ...permissionSchema as any,
  title: 'Permission',
  description: 'Permission',
  version: 0,
  keyCompression: true,
  primaryKey: 'id',
  type: 'object',
  attachments: {
    encrypted: false,
  },
};

export const userPermissionRxSchema: RxJsonSchema<
  Omit<PermissionDocType, '_attachments'>
> = {
  ...permissionSchema as any,
  title: 'User Permission',
  description: 'User Permission',
  version: 0,
  keyCompression: true,
  primaryKey: 'id',
  type: 'object',
  attachments: {
    encrypted: false,
  },
};

export const PERMISSION_COLLECTION_NAME = 'permission';

export const PERMISSION_COLLECTION_PROVIDER: Provider = {
  provide: ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN,
  useValue: {
    name: PERMISSION_COLLECTION_NAME,
    creator: {
      schema: permissionRxSchema,
    },
  },
  multi: true,
};

export const USER_PERMISSION_COLLECTION_NAME = 'userpermission';

export const USER_PERMISSION_COLLECTION_PROVIDER: Provider = {
  provide: ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN,
  useValue: {
    name: USER_PERMISSION_COLLECTION_NAME,
    creator: {
      schema: userPermissionRxSchema,
    },
  },
  multi: true,
};

