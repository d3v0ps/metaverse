import type { Appearance } from './appearance';

export enum SexualOrientation {
  Heterosexual = 'Heterosexual',
  Homosexual = 'Homosexual',
  Bisexual = 'Bisexual',
  Pansexual = 'Pansexual',
  Asexual = 'Asexual',
}

export enum AvatarGender {
  Male = 'Male',
  Female = 'Female',
}

export interface AvatarMeta {
  /** Indicate wether this resource has parents or not */
  root?: boolean;
  /** Indicates the generator template used to generate this avatar */
  generatorTemplate?: string;
  /**
   * Indicates wether this avatar's stats are managed by the user or not
   *
   * **Note: Managed avatars might not be accepted by certain servers**
   * */
  managed?: boolean;
}

export enum AvatarRelationshipKind {
  Parent,
  Child,
  Sibling,
  Spouse,
  Friend,
  Partner,
}

export type AvatarRelationship = {
  kind: AvatarRelationshipKind;
  avatar: string;
};

export type AvatarIdentity = {
  givenName?: string;
  familyName?: string;
  gender?: AvatarGender;
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

export type AvatarAppearance = {
  body?: {
    skin?: string;
    type?: AvatarGender;
    shape?: string;
  };
  hair?: {
    style?: string;
    color?: string;
  };
  facialHair?: {
    style?: string;
    color?: string;
  };
  eyes?: {
    color?: string;
  };
  ears?: {
    shape?: string;
  };
  nose?: {
    shape?: string;
  };
};

export type AvatarAttributes = {
  base?: {
    [key: string]: number;
  };
};

export type AvatarKnowledge = {
  skills?: Record<string, AvatarSkill>;
};

export type AvatarSkill = {
  id: string;
  level: number;
  experience: number;
};

export type AvatarOutfit = {
  name: string;
  head?: {
    /** Item Id */
    headgear?: string;
    /** Item Id */
    visor?: string;
  };
  torso?: {
    /** Item Id */
    layer1?: string;
    /** Item Id */
    layer2?: string;
    /** Item Id */
    layer3?: string;
  };
  /** Item Id */
  shoulders?: string;
  /** Item Id */
  legs?: string;
  /** Item Id */
  feet?: string;
  /** Item Id */
  back?: string;
  hands?: {
    slot1?: {
      /** Item Id */
      rightHand?: string;
      /** Item Id */
      leftHand?: string;
      /** Item Id */
      bothHands?: string;
    };
    slot2?: {
      /** Item Id */
      rightHand?: string;
      /** Item Id */
      leftHand?: string;
      /** Item Id */
      bothHands?: string;
    };
  };
};

/** An Avatar */
export type Avatar = {
  /** The avatar's id */
  id: string;

  /** The avatar's identity */
  identity?: AvatarIdentity;
  /** The avatar's appearance */
  appearance?: AvatarAppearance;
  /** The avatar's attributes */
  attributes?: AvatarAttributes;
  /** The avatar's knowledge */
  knowledge?: AvatarKnowledge;
  /** The avatar's outfits */
  outfits?: AvatarOutfit[];
  selectedOutfit?: string;
  location?: {
    world?: string;
    burg?: number;
    coordinates?: {
      x: number;
      y: number;
      z?: number;
    };
  };
  relationships?: AvatarRelationship[];
  children?: Avatar[];

  /** The avatar's appearances */
  appearances: Appearance[];
  /** The avatar's created at */
  createdAt?: Date;
  /** The avatar's updated at */
  updatedAt?: Date;
  _attachments?: any;
};
