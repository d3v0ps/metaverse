/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Provider } from '@angular/core';
import { ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN } from '@central-factory/persistence/services/entity-manager';
import { RxDocument, RxCollection, RxJsonSchema } from 'rxdb';
import { Workspace } from '../types';

export type WorkspaceDocType = Workspace;
export type WorkspaceDocument = RxDocument<WorkspaceDocType>;
export type WorkspaceCollection = RxCollection<WorkspaceDocument>;

export const workspaceSchema = {
  "additionalProperties": false,
  "properties": {
    "config": {
      "$ref": "#/definitions/WorkspaceConfig",
      "items": {
        "type": "object"
      }
    }
  },
  "type": "object"
}

export const workspaceRxSchema: RxJsonSchema<
  Omit<WorkspaceDocType, '_attachments'>
> = {
  ...workspaceSchema as any,
  title: 'Workspace',
  description: 'Workspace',
  version: 0,
  keyCompression: true,
  primaryKey: 'id',
  type: 'object',
  attachments: {
    encrypted: false,
  },
};

export const userWorkspaceRxSchema: RxJsonSchema<
  Omit<WorkspaceDocType, '_attachments'>
> = {
  ...workspaceSchema as any,
  title: 'User Workspace',
  description: 'User Workspace',
  version: 0,
  keyCompression: true,
  primaryKey: 'id',
  type: 'object',
  attachments: {
    encrypted: false,
  },
};

export const WORKSPACE_COLLECTION_NAME = 'workspace';

export const WORKSPACE_COLLECTION_PROVIDER: Provider = {
  provide: ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN,
  useValue: {
    name: WORKSPACE_COLLECTION_NAME,
    creator: {
      schema: workspaceRxSchema,
    },
  },
  multi: true,
};

export const USER_WORKSPACE_COLLECTION_NAME = 'userworkspace';

export const USER_WORKSPACE_COLLECTION_PROVIDER: Provider = {
  provide: ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN,
  useValue: {
    name: USER_WORKSPACE_COLLECTION_NAME,
    creator: {
      schema: userWorkspaceRxSchema,
    },
  },
  multi: true,
};

