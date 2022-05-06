/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';

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
export class Avatar {
  @Field()
  _attachments?: any;

  @Field((type) => AvatarAppearance)
  appearance?: AvatarAppearance;

  @Field((type) => [])
  appearances?: any[];

  @Field((type) => AvatarAttributes)
  attributes?: AvatarAttributes;

  @Field((type) => [Avatar])
  children?: Avatar[];

  @Field()
  createdAt?: any;

  @Field()
  id?: string;

  @Field((type) => AvatarIdentity)
  identity?: AvatarIdentity;

  @Field()
  knowledge?: any;

  @Field()
  location?: any;

  @Field((type) => [AvatarOutfit])
  outfits?: AvatarOutfit[];

  @Field((type) => [AvatarRelationship])
  relationships?: AvatarRelationship[];

  @Field()
  selectedOutfit?: string;

  @Field()
  updatedAt?: any;
}

@ObjectType()
export class AvatarAppearance {
  @Field()
  body?: any;

  @Field()
  ears?: any;

  @Field()
  eyes?: any;

  @Field()
  facialHair?: any;

  @Field()
  hair?: any;

  @Field()
  nose?: any;
}

@ObjectType()
export class AvatarAttributes {
  @Field()
  base?: any;
}

export enum AvatarGender {
  Male = 'Male',
  Female = 'Female',
}

registerEnumType(AvatarGender, {
  name: 'AvatarGender',
  description: '',
});


@ObjectType()
export class AvatarIdentity {
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

  @Field((type) => AvatarGender)
  gender?: AvatarGender;

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
export class AvatarOutfit {
  @Field()
  back?: string;

  @Field()
  feet?: string;

  @Field()
  hands?: any;

  @Field()
  head?: any;

  @Field()
  legs?: string;

  @Field()
  name?: string;

  @Field()
  shoulders?: string;

  @Field()
  torso?: any;
}

@ObjectType()
export class AvatarProfession {
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
export class AvatarRelationship {
  @Field()
  avatar?: string;

  @Field((type) => AvatarRelationshipKind)
  kind?: AvatarRelationshipKind;
}

export enum AvatarRelationshipKind {
  Parent = 'Parent',
  Child = 'Child',
  Sibling = 'Sibling',
  Spouse = 'Spouse',
  Friend = 'Friend',
  Partner = 'Partner',
}

registerEnumType(AvatarRelationshipKind, {
  name: 'AvatarRelationshipKind',
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


