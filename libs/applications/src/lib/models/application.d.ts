export enum ApplicationRenderingType {
  Webview = 'Webview',
  Local = 'Local',
  AngularElement = 'AngularElement',
  WebpackModuleFederation = 'WebpackModuleFederation',
  Unknown = 'Unknown',
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

export type ApplicationAuthor = {
  id: string;
  name: string;
  icon?: string;
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
  author: ApplicationAuthor;
  renderingType?: ApplicationRenderingType;
  starred?: boolean;
  internal?: boolean;
  disabled?: boolean;
  supportsBrowser?: boolean;
  permissions?: {
    kind: string;
    mode: string;
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
