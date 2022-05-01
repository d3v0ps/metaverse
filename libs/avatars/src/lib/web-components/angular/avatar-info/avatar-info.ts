import { Avatar } from '@central-factory/avatars/models';
import {
  Burg,
  Culture,
  Religion,
} from '@central-factory/worlds/models/fmg-map';
import { AvatarProfession } from '@central-factory/worlds/models/world';

export type AvatarInfo = {
  culture: Culture;
  cultureIcon: string;
  religion: Religion;
  birthPlace: Burg;
  birthPlaceShield: string;
  locationBurg?: Burg;
  locationShield?: string;
  partners: Avatar[];
  parents: Avatar[];
  children: Avatar[];
  professions: Record<'main' | 'secondary', AvatarProfession>;
  archetype?: Avatar;
};
