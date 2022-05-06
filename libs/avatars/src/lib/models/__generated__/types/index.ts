/* eslint-disable @typescript-eslint/no-explicit-any */

export type AppearanceInfo = {
  bodyType?: string;

  eyeColor?: string;

  fatPercentage?: number;

  hairColor?: string;

  hairLength?: number;

  hairStyle?: string;

  height?: number;

  skinColor?: string;

  weight?: number;
}

export type Avatar = {
  _attachments?: any;

  appearance?: AvatarAppearance;

  appearances: any[];

  attributes?: AvatarAttributes;

  children?: Avatar[];

  createdAt?: any;

  id: string;

  identity?: AvatarIdentity;

  knowledge?: any;

  location?: any;

  outfits?: AvatarOutfit[];

  relationships?: AvatarRelationship[];

  selectedOutfit?: string;

  updatedAt?: any;
}

export type AvatarAppearance = {
  body?: any;

  ears?: any;

  eyes?: any;

  facialHair?: any;

  hair?: any;

  nose?: any;
}

export type AvatarAttributes = {
  base?: any;
}

export enum AvatarGender {
  Male = 'Male',
  Female = 'Female',
}


export type AvatarIdentity = {
  archetype?: string;

  bio?: string;

  birthDate?: string;

  birthPlace?: number;

  birthWorld?: string;

  culture?: number;

  familyName?: string;

  gender?: AvatarGender;

  givenName?: string;

  icon?: string;

  mainProfession?: string;

  quote?: string;

  religion?: number;

  secondaryProfession?: string;

  sexualOrientation?: SexualOrientation;

  title?: string;
}

export type AvatarOutfit = {
  back?: string;

  feet?: string;

  hands?: any;

  head?: any;

  legs?: string;

  name: string;

  shoulders?: string;

  torso?: any;
}

export type AvatarProfession = {
  color?: string;

  description?: string;

  icon?: string;

  id: string;

  label?: string;

  schools?: string[];
}

export type AvatarRelationship = {
  avatar: string;

  kind: AvatarRelationshipKind;
}

export enum AvatarRelationshipKind {
  Parent = 'Parent',
  Child = 'Child',
  Sibling = 'Sibling',
  Spouse = 'Spouse',
  Friend = 'Friend',
  Partner = 'Partner',
}


export enum SexualOrientation {
  Heterosexual = 'Heterosexual',
  Homosexual = 'Homosexual',
  Bisexual = 'Bisexual',
  Pansexual = 'Pansexual',
  Asexual = 'Asexual',
}


