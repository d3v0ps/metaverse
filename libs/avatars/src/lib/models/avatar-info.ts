import {
  AvatarProfession,
  Burg as Place,
  Culture,
  Religion as Belief,
} from '@central-factory/worlds/__generated__/models';
import { Avatar } from '../__generated__/models';

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
