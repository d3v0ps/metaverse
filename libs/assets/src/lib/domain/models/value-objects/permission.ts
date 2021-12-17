/** The Permission kind */
export enum PermissionKind {
  /** Can **see** this object */
  See = 'see',
  /** Can **edit** this object */
  Edit = 'edit',
  /** Can **manage** this object */
  Manage = 'manage',
  /** Can **use** this object */
  Use = 'use',
  /** Can do **anything** with this object */
  Unrestricted = 'unrestricted',
}

/** A Permission */
export interface Permission {
  /** The id of the permission */
  id: string;
  /** The id of the avatar */
  avatar: string;
  /** The kinds of the permission */
  permissions: PermissionKind[];
  /** The scopes this permission can be used at */
  scopes: string[];
}
