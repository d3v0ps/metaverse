/* eslint-disable @typescript-eslint/no-explicit-any */

export type Appearance = {
  body?: Colourable & Stylable & Shapeable;

  ears?: Shapeable;

  eyes?: Colourable & Shapeable;

  facialHair?: Colourable & Stylable;

  hair?: Colourable & Stylable;

  nose?: Shapeable;
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
}

export type Attributes = {
  base?: any;
}

export type Avatar = {
  _attachments?: any;

  appearance?: Appearance;

  appearances?: any[];

  attributes?: Attributes;

  children?: Avatar[];

  createdAt?: any;

  id: string;

  identity?: Identity;

  knowledge?: any;

  location?: Location;

  outfits?: Outfit[];

  relationships?: Relationship[];

  selectedOutfit?: string;

  updatedAt?: any;
}

export type Colourable = {
  color?: string;
}

export type Coordinates = {
  x?: number;

  y?: number;

  z?: number;
}

export enum Gender {
  Male = 'Male',
  Female = 'Female',
}


export type HandsSlot = {
  bothHands?: string;

  leftHand?: string;

  rightHand?: string;
}

export type HandsSlotGroup = {
  slot1?: HandsSlot;

  slot2?: HandsSlot;
}

export type HeadSlot = {
  headgear?: string;

  visor?: string;
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
}

export type Location = {
  burg?: number;

  coordinates?: Coordinates;

  world?: string;
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
}

export type Profession = {
  color?: string;

  description?: string;

  icon?: string;

  id: string;

  label?: string;

  schools?: string[];
}

export type Relationship = {
  avatar?: string;

  kind?: RelationshipKind;
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
}

export type Stylable = {
  style?: string;
}

export type TorsoSlot = {
  layer1?: string;

  layer2?: string;

  layer3?: string;
}

