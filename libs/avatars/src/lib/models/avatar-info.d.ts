import {
  Burg as Place,
  Culture,
  Religion as Belief,
} from '@central-factory/worlds/models/fmg-map';
import { AvatarProfession } from '@central-factory/worlds/models/world';
import { Avatar } from './avatar';

export type AvatarInfo = {
  culture: Culture;
  cultureIcon: string;
  beliefs: Belief[];
  birthPlace: Place;
  birthPlaceShield: string;
  currentPlace?: Place;
  currentPlaceShield?: string;
  professions?: {
    main?: AvatarProfession;
    secondary?: AvatarProfession;
  };
  avatar?: Avatar;
  partners: Avatar[];
  parents: Avatar[];
  children: Avatar[];
  archetype?: Avatar;
};
