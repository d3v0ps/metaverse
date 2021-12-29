export enum PermissionKind {
  Collection = 'collection',
}

export enum PermissionMode {
  Read = 'read',
  Write = 'write',
  Delete = 'delete',
}

export type Permission = {
  id: string;
  appId: string;
  kind: PermissionKind;
  mode: PermissionMode;
  target: string;
  createdAt?: string;
  updatedAt?: string;
};
