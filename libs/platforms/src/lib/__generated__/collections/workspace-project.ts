/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Provider } from '@angular/core';
import { ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN } from '@central-factory/persistence/entity-manager';
import { RxCollection, RxDocument, RxJsonSchema } from 'rxdb';
import { WorkspaceProject } from '../types';

export type WorkspaceProjectDocType = WorkspaceProject;
export type WorkspaceProjectDocument = RxDocument<WorkspaceProjectDocType>;
export type WorkspaceProjectCollection = RxCollection<WorkspaceProjectDocument>;

export const workspaceProjectSchema = {
  additionalProperties: false,
  properties: {
    architect: {},
    prefix: {
      type: 'string',
    },
    projectType: {
      type: 'string',
    },
    root: {
      type: 'string',
    },
    sourceRoot: {
      type: 'string',
    },
    tags: {
      items: {
        type: 'string',
      },
      type: 'array',
    },
  },
  type: 'object',
};

export const workspaceProjectRxSchema: RxJsonSchema<
  Omit<WorkspaceProjectDocType, '_attachments'>
> = {
  ...(workspaceProjectSchema as any),
  title: 'WorkspaceProject',
  description: 'Workspace Project',
  version: 0,
  keyCompression: true,
  primaryKey: 'id',
  type: 'object',
  attachments: {
    encrypted: false,
  },
};

export const userWorkspaceProjectRxSchema: RxJsonSchema<
  Omit<WorkspaceProjectDocType, '_attachments'>
> = {
  ...(workspaceProjectSchema as any),
  title: 'User WorkspaceProject',
  description: 'User Workspace Project',
  version: 0,
  keyCompression: true,
  primaryKey: 'id',
  type: 'object',
  attachments: {
    encrypted: false,
  },
};

export const WORKSPACE_PROJECT_COLLECTION_NAME = 'workspace-project';

export const WORKSPACE_PROJECT_COLLECTION_PROVIDER: Provider = {
  provide: ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN,
  useValue: {
    name: WORKSPACE_PROJECT_COLLECTION_NAME,
    creator: {
      schema: workspaceProjectRxSchema,
    },
  },
  multi: true,
};

export const USER_WORKSPACE_PROJECT_COLLECTION_NAME = 'userworkspace-project';

export const USER_WORKSPACE_PROJECT_COLLECTION_PROVIDER: Provider = {
  provide: ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN,
  useValue: {
    name: USER_WORKSPACE_PROJECT_COLLECTION_NAME,
    creator: {
      schema: userWorkspaceProjectRxSchema,
    },
  },
  multi: true,
};
