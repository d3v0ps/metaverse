import {
  PermissionKind,
  PermissionMode,
} from '@central-factory/permissions/models/permission';

export enum ApplicationRenderingType {
  Webview = 'webview',
  WebpackModuleFederation = 'webpack-module-federation',
  Unknown = 'unknown',
}

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

export enum ColorVariation {
  Primary = 'primary',
  Secondary = 'secondary',
  Success = 'success',
  Warning = 'warning',
  Danger = 'danger',
  Info = 'info',
  Light = 'light',
  Dark = 'dark',
}

/** Non Web Manifest standard included properties */
export type ApplicationAdditionalProperties = {
  originalManifest?: string;
  author: {
    id: string;
    name: string;
  };
  renderingType?: ApplicationRenderingType;
  internal?: boolean;
  supportsBrowser?: boolean;
  permissions?: {
    kind: PermissionKind;
    mode: PermissionMode;
    target: string;
  }[];
  defaultShortcut?: string;
  sidebarShortcuts?: string[];
  colors?: { color: string; variation: ColorVariation }[];
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
