import {
  PermissionKind,
  PermissionMode,
} from '@central-factory/permissions/models/permission';

export type ApplicationIcon = {
  src: string;
  sizes: string;
  type: string;
};

export type ApplicationScreenshot = {
  src: string;
  sizes: string;
  type: string;
  platform: string;
  label: string;
};

/** Non Web Manifest standard included properties */
export type ApplicationAdditionalProperties = {
  permissions?: {
    kind: PermissionKind;
    mode: PermissionMode;
    target: string;
  }[];
  sidebarShortcuts?: string[];
};

export type ApplicationShortcut = {
  name: string;
  url: string;
  icons?: ApplicationIcon[];
  shortName?: string;
  description?: string;
};

export type Application = {
  id: string;
  name: string;
  shortName?: string;
  description?: string;
  startUrl: string;
  icons?: ApplicationIcon[];
  themeColor?: string;
  backgroundColor?: string;
  screenshots?: ApplicationScreenshot[];
  iarcRatingId?: string;
  categories?: string[];
  additionalProperties?: ApplicationAdditionalProperties;
  shortcuts?: ApplicationShortcut[];
  createdAt?: string;
  updatedAt?: string;
};
