import { Avatar } from '@central-factory/avatars/models';
import { Era } from './era';
import { FantasyMapGeneratorMap } from './fmg-map';

export type AvatarProfession = {
  id: string;
  label?: string;
  description?: string;
  icon?: string;
  color?: string;
  schools?: string[];
};

export type World = {
  map: FantasyMapGeneratorMap;
  eras?: Era[];
  archetypes?: Avatar[];
  avatars?: Avatar[];
  professions?: AvatarProfession[];
};
