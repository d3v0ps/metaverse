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
}

export type ApplicationAdditionalProperties = {
  author: ApplicationAuthor;

  colors?: any[];

  defaultShortcut?: string;

  disabled?: boolean;

  internal?: boolean;

  originalManifest?: string;

  permissions?: any[];

  renderingType?: ApplicationRenderingType;

  sidebarShortcuts?: string[];

  starred?: boolean;

  supportsBrowser?: boolean;
}

export type ApplicationAuthor = {
  icon?: string;

  id: string;

  name: string;
}

export type ApplicationIcon = {
  sizes: string;

  src: string;

  type: string;
}

export enum ApplicationRenderingType {
  Webview = 'Webview',
  Local = 'Local',
  AngularElement = 'AngularElement',
  WebpackModuleFederation = 'WebpackModuleFederation',
  Unknown = 'Unknown',
}


export type ApplicationScreenshot = {
  label: string;

  platform: string;

  sizes: string;

  src: string;

  type: string;
}

export type ApplicationShortcut = {
  description?: string;

  icons?: ApplicationIcon[];

  name: string;

  shortName?: string;

  url: string;
}

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


