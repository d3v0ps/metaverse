/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';

@ObjectType()
export class Appearance {
  @Field((type) => Shapeable)
  body?: Colourable & Stylable & Shapeable;

  @Field((type) => Shapeable)
  ears?: Shapeable;

  @Field((type) => Shapeable)
  eyes?: Colourable & Shapeable;

  @Field((type) => Stylable)
  facialHair?: Colourable & Stylable;

  @Field((type) => Stylable)
  hair?: Colourable & Stylable;

  @Field((type) => Shapeable)
  nose?: Shapeable;
}

@ObjectType()
export class AppearanceInfo {
  @Field()
  bodyType?: string;

  @Field()
  eyeColor?: string;

  @Field()
  fatPercentage?: number;

  @Field()
  hairColor?: string;

  @Field()
  hairLength?: number;

  @Field()
  hairStyle?: string;

  @Field()
  height?: number;

  @Field()
  skinColor?: string;

  @Field()
  weight?: number;
}

@ObjectType()
export class Attributes {
  @Field()
  base?: any;
}

@ObjectType()
export class Avatar {
  @Field()
  _attachments?: any;

  @Field((type) => Appearance)
  appearance?: Appearance;

  @Field((type) => [])
  appearances?: any[];

  @Field((type) => Attributes)
  attributes?: Attributes;

  @Field((type) => [Avatar])
  children?: Avatar[];

  @Field()
  createdAt?: any;

  @Field()
  id?: string;

  @Field((type) => Identity)
  identity?: Identity;

  @Field()
  knowledge?: any;

  @Field((type) => Location)
  location?: Location;

  @Field((type) => [Outfit])
  outfits?: Outfit[];

  @Field((type) => [Relationship])
  relationships?: Relationship[];

  @Field()
  selectedOutfit?: string;

  @Field()
  updatedAt?: any;
}

@ObjectType()
export class Colourable {
  @Field()
  color?: string;
}

@ObjectType()
export class Coordinates {
  @Field()
  x?: number;

  @Field()
  y?: number;

  @Field()
  z?: number;
}

export enum Gender {
  Male = 'Male',
  Female = 'Female',
}

registerEnumType(Gender, {
  name: 'Gender',
  description: '',
});


@ObjectType()
export class HandsSlot {
  @Field()
  bothHands?: string;

  @Field()
  leftHand?: string;

  @Field()
  rightHand?: string;
}

@ObjectType()
export class HandsSlotGroup {
  @Field((type) => HandsSlot)
  slot1?: HandsSlot;

  @Field((type) => HandsSlot)
  slot2?: HandsSlot;
}

@ObjectType()
export class HeadSlot {
  @Field()
  headgear?: string;

  @Field()
  visor?: string;
}

@ObjectType()
export class Identity {
  @Field()
  archetype?: string;

  @Field()
  bio?: string;

  @Field()
  birthDate?: string;

  @Field()
  birthPlace?: number;

  @Field()
  birthWorld?: string;

  @Field()
  culture?: number;

  @Field()
  familyName?: string;

  @Field((type) => Gender)
  gender?: Gender;

  @Field()
  givenName?: string;

  @Field()
  icon?: string;

  @Field()
  mainProfession?: string;

  @Field()
  quote?: string;

  @Field()
  religion?: number;

  @Field()
  secondaryProfession?: string;

  @Field((type) => SexualOrientation)
  sexualOrientation?: SexualOrientation;

  @Field()
  title?: string;
}

@ObjectType()
export class Location {
  @Field()
  burg?: number;

  @Field((type) => Coordinates)
  coordinates?: Coordinates;

  @Field()
  world?: string;
}

@ObjectType()
export class Outfit {
  @Field()
  back?: string;

  @Field()
  feet?: string;

  @Field((type) => HandsSlotGroup)
  hands?: HandsSlotGroup;

  @Field((type) => HeadSlot)
  head?: HeadSlot;

  @Field()
  legs?: string;

  @Field()
  name?: string;

  @Field()
  shoulders?: string;

  @Field((type) => TorsoSlot)
  torso?: TorsoSlot;
}

@ObjectType()
export class Profession {
  @Field()
  color?: string;

  @Field()
  description?: string;

  @Field()
  icon?: string;

  @Field()
  id?: string;

  @Field()
  label?: string;

  @Field((type) => [String])
  schools?: string[];
}

@ObjectType()
export class Relationship {
  @Field()
  avatar?: string;

  @Field((type) => RelationshipKind)
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

registerEnumType(RelationshipKind, {
  name: 'RelationshipKind',
  description: '',
});


export enum SexualOrientation {
  Heterosexual = 'Heterosexual',
  Homosexual = 'Homosexual',
  Bisexual = 'Bisexual',
  Pansexual = 'Pansexual',
  Asexual = 'Asexual',
}

registerEnumType(SexualOrientation, {
  name: 'SexualOrientation',
  description: '',
});


@ObjectType()
export class Shapeable {
  @Field()
  shape?: string;
}

@ObjectType()
export class Stylable {
  @Field()
  style?: string;
}

@ObjectType()
export class TorsoSlot {
  @Field()
  layer1?: string;

  @Field()
  layer2?: string;

  @Field()
  layer3?: string;
}

