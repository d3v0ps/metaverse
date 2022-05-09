



export enum ApplicationRenderingType {
  Webview = 'Webview',
  Local = 'Local',
  AngularElement = 'AngularElement',
  WebpackModuleFederation = 'WebpackModuleFederation',
  Unknown = 'Unknown',
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

export type ApplicationIcon = {
  src: string;
  sizes: string;
  type: string;
};

export type ApplicationAuthor = {
  id: string;
  name: string;
  icon?: string;
};

export type ApplicationScreenshot = {
  src: string;
  sizes: string;
  type: string;
  platform: string;
  label: string;
};

export type ApplicationPermission = {
  kind?: string;
  mode?: string;
  target?: string;
};

export type ApplicationColor = {
  color?: string;
  variation?: ColorVariation;
};

export type ApplicationAdditionalProperties = {
  originalManifest?: string;
  author: ApplicationAuthor;
  renderingType?: ApplicationRenderingType;
  starred?: boolean;
  internal?: boolean;
  disabled?: boolean;
  supportsBrowser?: boolean;
  permissions?: ApplicationPermission[];
  defaultShortcut?: string;
  sidebarShortcuts?: string[];
  colors?: ApplicationColor[];
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

export type Root = ApplicationIcon | ApplicationAuthor | ApplicationScreenshot | ApplicationPermission | ApplicationColor | ApplicationAdditionalProperties | ApplicationShortcut | Application;
