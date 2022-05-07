/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';

@ObjectType()
export class Application {
  @Field((type) => ApplicationAdditionalProperties)
  additionalProperties?: ApplicationAdditionalProperties;

  @Field()
  backgroundColor?: string;

  @Field((type) => [String])
  categories?: string[];

  @Field()
  createdAt?: string;

  @Field()
  description?: string;

  @Field()
  iarcRatingId?: string;

  @Field((type) => [ApplicationIcon])
  icons?: ApplicationIcon[];

  @Field()
  id?: string;

  @Field()
  name?: string;

  @Field((type) => [ApplicationScreenshot])
  screenshots?: ApplicationScreenshot[];

  @Field()
  shortName?: string;

  @Field((type) => [ApplicationShortcut])
  shortcuts?: ApplicationShortcut[];

  @Field()
  startUrl?: string;

  @Field()
  themeColor?: string;

  @Field()
  updatedAt?: string;
}

@ObjectType()
export class ApplicationAdditionalProperties {
  @Field((type) => ApplicationAuthor)
  author?: ApplicationAuthor;

  @Field((type) => [])
  colors?: any[];

  @Field()
  defaultShortcut?: string;

  @Field()
  disabled?: boolean;

  @Field()
  internal?: boolean;

  @Field()
  originalManifest?: string;

  @Field((type) => [])
  permissions?: any[];

  @Field((type) => ApplicationRenderingType)
  renderingType?: ApplicationRenderingType;

  @Field((type) => [String])
  sidebarShortcuts?: string[];

  @Field()
  starred?: boolean;

  @Field()
  supportsBrowser?: boolean;
}

@ObjectType()
export class ApplicationAuthor {
  @Field()
  icon?: string;

  @Field()
  id?: string;

  @Field()
  name?: string;
}

@ObjectType()
export class ApplicationIcon {
  @Field()
  sizes?: string;

  @Field()
  src?: string;

  @Field()
  type?: string;
}

export enum ApplicationRenderingType {
  Webview = 'Webview',
  Local = 'Local',
  AngularElement = 'AngularElement',
  WebpackModuleFederation = 'WebpackModuleFederation',
  Unknown = 'Unknown',
}

registerEnumType(ApplicationRenderingType, {
  name: 'ApplicationRenderingType',
  description: '',
});


@ObjectType()
export class ApplicationScreenshot {
  @Field()
  label?: string;

  @Field()
  platform?: string;

  @Field()
  sizes?: string;

  @Field()
  src?: string;

  @Field()
  type?: string;
}

@ObjectType()
export class ApplicationShortcut {
  @Field()
  description?: string;

  @Field((type) => [ApplicationIcon])
  icons?: ApplicationIcon[];

  @Field()
  name?: string;

  @Field()
  shortName?: string;

  @Field()
  url?: string;
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

registerEnumType(ColorVariation, {
  name: 'ColorVariation',
  description: '',
});


