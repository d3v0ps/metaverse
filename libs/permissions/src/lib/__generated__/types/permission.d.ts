



export enum PermissionKind {
  Collection = 'Collection',
}


export enum PermissionMode {
  Read = 'Read',
  Write = 'Write',
  Delete = 'Delete',
}



export type Permission = {
  id: string;
  appId: string;
  kind: PermissionKind;
  mode: PermissionMode;
  target: string;
  createdAt?: string;
  updatedAt?: string;
}


export type Root = Permission;
