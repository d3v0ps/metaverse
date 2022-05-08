/* eslint-disable @typescript-eslint/no-explicit-any */

export type Permission = {
  appId: string;

  createdAt?: string;

  id: string;

  kind: PermissionKind;

  mode: PermissionMode;

  target: string;

  updatedAt?: string;
  _attachments?: any;
}

export enum PermissionKind {
  Collection = 'Collection',
}


export enum PermissionMode {
  Read = 'Read',
  Write = 'Write',
  Delete = 'Delete',
}


