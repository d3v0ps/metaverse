export type AvatarProfession = {
  id: string;
  label?: string;
  description?: string;
  icon?: string;
  color?: string;
  schools?: string[];
};

export type Meta = {
  name?: string;
  previewUrl?: string;
};

export type WorldKind = 'analog' | 'digital' | 'unknown';

export type WorldStats = {
  cultures?: number;
  states?: number;
  burgs?: number;
  avatars?: number;
};

export type World = {
  id: string;
  meta: Meta;
  state?: any;
  kind: WorldKind;
  stats?: WorldStats;

  year: number;
  displayName?: string;
  map?: any;
  eras?: any[];
  archetypes?: any[];
  avatars?: any[];
  professions?: any[];
};
