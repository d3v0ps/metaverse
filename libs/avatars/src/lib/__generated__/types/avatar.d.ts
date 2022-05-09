



export enum SexualOrientation {
  Heterosexual = 'Heterosexual',
  Homosexual = 'Homosexual',
  Bisexual = 'Bisexual',
  Pansexual = 'Pansexual',
  Asexual = 'Asexual',
}

export enum Gender {
  Male = 'Male',
  Female = 'Female',
}

export enum RelationshipKind {
  Parent = 'Parent',
  Child = 'Child',
  Sibling = 'Sibling',
  Spouse = 'Spouse',
  Friend = 'Friend',
  Partner = 'Partner',
}

export type Shapeable = {
  shape?: string;
};

export type Colourable = {
  color?: string;
};

export type Stylable = {
  style?: string;
};

export type Avatar = {
  id: string;
  identity?: Identity;
  appearance?: Appearance;
  attributes?: Attributes;
  knowledge?: any;
  outfits?: Outfit[];
  selectedOutfit?: string;
  location?: Location;
  relationships?: Relationship[];
  children?: Avatar[];
  appearances?: any[];
  createdAt?: string;
  updatedAt?: string;
};

export type Meta = {
  root?: boolean;
  generatorTemplate?: string;
  managed?: boolean;
};

export type Relationship = {
  kind?: RelationshipKind;
  avatar?: string;
};

export type Identity = {
  givenName?: string;
  familyName?: string;
  gender?: Gender;
  quote?: string;
  title?: string;
  bio?: string;
  birthDate?: string;
  birthWorld?: string;
  birthPlace?: number;
  archetype?: string;
  icon?: string;
  culture?: number;
  religion?: number;
  mainProfession?: string;
  secondaryProfession?: string;
  sexualOrientation?: SexualOrientation;
};

export type Appearance = {
  body?: Colourable & Stylable & Shapeable;
  hair?: Colourable & Stylable;
  facialHair?: Colourable & Stylable;
  eyes?: Colourable & Shapeable;
  ears?: Shapeable;
  nose?: Shapeable;
};

export type Attributes = {
  base?: any;
};

export type Skill = {
  id?: string;
  level?: number;
  experience?: number;
};

export type Outfit = {
  name?: string;
  head?: HeadSlot;
  torso?: TorsoSlot;
  shoulders?: string;
  legs?: string;
  feet?: string;
  back?: string;
  hands?: HandsSlotGroup;
};

export type HeadSlot = {
  headgear?: string;
  visor?: string;
};

export type TorsoSlot = {
  layer1?: string;
  layer2?: string;
  layer3?: string;
};

export type HandsSlotGroup = {
  slot1?: HandsSlot;
  slot2?: HandsSlot;
};

export type HandsSlot = {
  rightHand?: string;
  leftHand?: string;
  bothHands?: string;
};

export type Location = {
  world?: string;
  burg?: number;
  coordinates?: Coordinates;
};

export type Coordinates = {
  x?: number;
  y?: number;
  z?: number;
};

export type Root = Shapeable | Colourable | Stylable | Avatar | Meta | Relationship | Identity | Appearance | Attributes | Skill | Outfit | HeadSlot | TorsoSlot | HandsSlotGroup | HandsSlot | Location | Coordinates;
