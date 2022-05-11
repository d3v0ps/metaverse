/* eslint-disable @typescript-eslint/no-explicit-any */

export type Application = {
  additionalProperties?: ApplicationAdditionalProperties;

  backgroundColor?: string;

  categories?: string[];

  createdAt?: string;

  description?: string;

  iarcRatingId?: string;

  icons?: ApplicationIcon[];

  id: string;

  name: string;

  screenshots?: ApplicationScreenshot[];

  shortName?: string;

  shortcuts?: ApplicationShortcut[];

  startUrl: string;

  themeColor?: string;

  updatedAt?: string;
  _attachments?: any;
};

export type ApplicationAdditionalProperties = {
  author: ApplicationAuthor;

  colors?: ApplicationColor[];

  defaultShortcut?: string;

  disabled?: boolean;

  internal?: boolean;

  originalManifest?: string;

  permissions?: ApplicationPermission[];

  renderingType?: ApplicationRenderingType;

  sidebarShortcuts?: string[];

  starred?: boolean;

  supportsBrowser?: boolean;
  _attachments?: any;
};

export type ApplicationAuthor = {
  icon?: string;

  id: string;

  name: string;
  _attachments?: any;
};

export type ApplicationColor = {
  color?: string;

  variation?: ColorVariation;
  _attachments?: any;
};

export type ApplicationIcon = {
  sizes: string;

  src: string;

  type: string;
  _attachments?: any;
};

export type ApplicationPermission = {
  kind?: string;

  mode?: string;

  target?: string;
  _attachments?: any;
};

export enum ApplicationRenderingType {
  Webview = 'Webview',
  Local = 'Local',
  AngularElement = 'AngularElement',
  WebpackModuleFederation = 'WebpackModuleFederation',
  Unknown = 'Unknown',
};

export type ApplicationScreenshot = {
  label: string;

  platform: string;

  sizes: string;

  src: string;

  type: string;
  _attachments?: any;
};

export type ApplicationShortcut = {
  description?: string;

  icons?: ApplicationIcon[];

  name: string;

  shortName?: string;

  url: string;
  _attachments?: any;
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
};

