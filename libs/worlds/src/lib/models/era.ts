import { MilitarySettings } from './fmg-map';

export enum WorldEventType {
  'WAR_DECLARATION',
  'MILITARY_BATTLE',
  'PEACE_AGREEMENT',
  'NATURAL_DISASTER',
  'DISEASE',
  'CIVIL_WAR',
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
  name: string;
  shortName: string;
  description?: string;
  startYear: number;
  endYear?: number;
  icon?: string;
  color?: string;
  military: MilitarySettings[];
  events: WorldEvent[];
};
