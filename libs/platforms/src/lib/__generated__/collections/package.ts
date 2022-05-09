/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Provider } from '@angular/core';
import { ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN } from '@central-factory/persistence/services/entity-manager';
import { RxDocument, RxCollection, RxJsonSchema } from 'rxdb';
import { Package } from '../types';

export type PackageDocType = Package;
export type PackageDocument = RxDocument<PackageDocType>;
export type PackageCollection = RxCollection<PackageDocument>;

export const packageSchema = {
  "additionalProperties": false,
  "properties": {
    "models": {
      "items": {
        "type": "object"
      },
      "type": "array"
    },
    "name": {
      "type": "string"
    },
    "project": {
      "$ref": "#/definitions/WorkspaceProject",
      "items": {
        "type": "object"
      }
    },
    "readme": {
      "type": "string"
    }
  },
  "required": [
    "name",
    "models",
    "project"
  ],
  "type": "object"
}

export const packageRxSchema: RxJsonSchema<
  Omit<PackageDocType, '_attachments'>
> = {
  ...packageSchema as any,
  title: 'Package',
  description: 'Package',
  version: 0,
  keyCompression: true,
  primaryKey: 'id',
  type: 'object',
  attachments: {
    encrypted: false,
  },
};

export const userPackageRxSchema: RxJsonSchema<
  Omit<PackageDocType, '_attachments'>
> = {
  ...packageSchema as any,
  title: 'User Package',
  description: 'User Package',
  version: 0,
  keyCompression: true,
  primaryKey: 'id',
  type: 'object',
  attachments: {
    encrypted: false,
  },
};

export const PACKAGE_COLLECTION_NAME = 'package';

export const PACKAGE_COLLECTION_PROVIDER: Provider = {
  provide: ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN,
  useValue: {
    name: PACKAGE_COLLECTION_NAME,
    creator: {
      schema: packageRxSchema,
    },
  },
  multi: true,
};

export const USER_PACKAGE_COLLECTION_NAME = 'userpackage';

export const USER_PACKAGE_COLLECTION_PROVIDER: Provider = {
  provide: ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN,
  useValue: {
    name: USER_PACKAGE_COLLECTION_NAME,
    creator: {
      schema: userPackageRxSchema,
    },
  },
  multi: true,
};

