import { MilitarySettings } from './fmg-map';

export enum WorldEventType {
  WAR_DECLARATION = 'WAR_DECLARATION',
  MILITARY_BATTLE = 'MILITARY_BATTLE',
  PEACE_AGREEMENT = 'PEACE_AGREEMENT',
  NATURAL_DISASTER = 'NATURAL_DISASTER',
  DISEASE = 'DISEASE',
  CIVIL_WAR = 'CIVIL_WAR',
}

export enum EraMapStyle {
  Default = 'default',
  Ancient = 'ancient',
  Gloom = 'gloom',
  Light = 'light',
  WaterColor = 'watercolor',
  Clean = 'clean',
  Atlas = 'atlas',
  Cyberpunk = 'cyberpunk',
  Monochrome = 'monochrome',
}

export type WorldEvent = {
  start: number;
  end: number;
  title: string;
  description?: string;
  icon: string;
  type: WorldEventType;
};

export type Era = {
  id: string;
  name: string;
  shortName: string;
  description?: string;
  startYear: number;
  endYear?: number;
  icon?: string;
  color?: string;
  military: MilitarySettings[];
  events: WorldEvent[];
  mapStyle?: EraMapStyle;
};
