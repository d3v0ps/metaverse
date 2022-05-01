import { Avatar } from '@central-factory/avatars/models';
import {
  Burg as Place,
  Culture,
  Religion as Belief,
} from '@central-factory/worlds/models/fmg-map';
import { AvatarProfession } from '@central-factory/worlds/models/world';

export type AvatarInfo = {
  culture: Culture;
  cultureIcon: string;
  beliefs: Belief[];
  birthPlace: Place;
  birthPlaceShield: string;
  currentPlace?: Place;
  currentPlaceShield?: string;
  professions: Record<'main' | 'secondary', AvatarProfession>;
  avatar?: Avatar;
  partners: Avatar[];
  parents: Avatar[];
  children: Avatar[];
  archetype?: Avatar;
};
