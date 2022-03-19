import { PlannerGoal } from '@central-factory/actors/models/planner-goal';
import { AvatarLivingState } from '../states/living-avatar.state';

export enum MaslowCategory {
  Physiological = 'Physiological',
  Safety = 'Safety',
  LoveAndBelonging = 'Love and Belonging',
  Esteem = 'Esteem',
  SelfActualization = 'Self Actualization',
}

export enum Physiological {
  AIR = 'Air',
  WATER = 'Water',
  FOOD = 'Food',
  SHELTER = 'Shelter',
  SLEEP = 'Sleep',
  CLOTHING = 'Clothing',
  REPRODUCTION = 'Reproduction',
}

export enum Safety {
  PersonalSecurity = 'Personal Security',
  Employment = 'Employment',
  Resources = 'Resources',
  Health = 'Health',
  Property = 'Property',
}

export enum LoveAndBelonging {
  Friendship = 'Friendship',
  Intimacy = 'Intimacy',
  Family = 'Family',
  SenseOfConnection = 'Sense of Connection',
}

export enum Esteem {
  Respect = 'Respect',
  SelfEsteem = 'Self Esteem',
  Status = 'Status',
  Recognition = 'Recognition',
  Strength = 'Strength',
  Freedom = 'Freedom',
}

export enum SelfActualization {
  BecomeBetter = 'Become Better',
}

export type Goals =
  | Physiological
  | Safety
  | LoveAndBelonging
  | Esteem
  | SelfActualization;

export const goals: Partial<Record<Goals, PlannerGoal<AvatarLivingState>>> = {
  [Physiological.FOOD]: {
    label: 'Eat',
    validate: (prevState, nextState) => {
      return nextState.energy > 25;
    },
  },
  // [Physiological.SLEEP]: {
  //   label: 'Sleep',
  //   validate: (prevState, nextState) => {
  //     return nextState.mind > 25;
  //   },
  // },
};
