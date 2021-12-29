import type { Skill } from '../../models/skill';

export const createCalendarSkill: Skill = {
  domain: 'calendar',
  scope: 'manage',
  skill: 'create',
};

export const createEventSkill: Skill = {
  domain: 'event',
  scope: 'manage',
  skill: 'create',
};

export const tradeAssetsSkill: Skill = {
  domain: 'assets',
  scope: 'manage',
  skill: 'trade',
};

export const skillsMocks: Skill[] = [
  createCalendarSkill,
  createEventSkill,
  tradeAssetsSkill,
];
