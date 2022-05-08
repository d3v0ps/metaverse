/* eslint-disable @typescript-eslint/no-explicit-any */

export type Appearance = {
  body?: Colourable & Stylable & Shapeable;

  ears?: Shapeable;

  eyes?: Colourable & Shapeable;

  facialHair?: Colourable & Stylable;

  hair?: Colourable & Stylable;

  nose?: Shapeable;
  _attachments?: any;
}

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
  _attachments?: any;
}

export type Attributes = {
  base?: any;
  _attachments?: any;
}

export type Avatar = {
  appearance?: Appearance;

  appearances?: any[];

  attributes?: Attributes;

  children?: Avatar[];

  createdAt?: string;

  id: string;

  identity?: Identity;

  knowledge?: any;

  location?: Location;

  outfits?: Outfit[];

  relationships?: Relationship[];

  selectedOutfit?: string;

  updatedAt?: string;
  _attachments?: any;
}

export type Colourable = {
  color?: string;
  _attachments?: any;
}

export type Coordinates = {
  x?: number;

  y?: number;

  z?: number;
  _attachments?: any;
}

export enum Gender {
  Male = 'Male',
  Female = 'Female',
}


export type HandsSlot = {
  bothHands?: string;

  leftHand?: string;

  rightHand?: string;
  _attachments?: any;
}

export type HandsSlotGroup = {
  slot1?: HandsSlot;

  slot2?: HandsSlot;
  _attachments?: any;
}

export type HeadSlot = {
  headgear?: string;

  visor?: string;
  _attachments?: any;
}

export type Identity = {
  archetype?: string;

  bio?: string;

  birthDate?: string;

  birthPlace?: number;

  birthWorld?: string;

  culture?: number;

  familyName?: string;

  gender?: Gender;

  givenName?: string;

  icon?: string;

  mainProfession?: string;

  quote?: string;

  religion?: number;

  secondaryProfession?: string;

  sexualOrientation?: SexualOrientation;

  title?: string;
  _attachments?: any;
}

export type Location = {
  burg?: number;

  coordinates?: Coordinates;

  world?: string;
  _attachments?: any;
}

export type Outfit = {
  back?: string;

  feet?: string;

  hands?: HandsSlotGroup;

  head?: HeadSlot;

  legs?: string;

  name?: string;

  shoulders?: string;

  torso?: TorsoSlot;
  _attachments?: any;
}

export type Profession = {
  color?: string;

  description?: string;

  icon?: string;

  id: string;

  label?: string;

  schools?: string[];
  _attachments?: any;
}

export type Relationship = {
  avatar?: string;

  kind?: RelationshipKind;
  _attachments?: any;
}

export enum RelationshipKind {
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


export type Shapeable = {
  shape?: string;
  _attachments?: any;
}

export type Stylable = {
  style?: string;
  _attachments?: any;
}

export type TorsoSlot = {
  layer1?: string;

  layer2?: string;

  layer3?: string;
  _attachments?: any;
}

