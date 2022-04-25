import { AvatarLivingState } from '../states/living-avatar.state';

export type Action<State = any> = {
  condition: (s: State) => boolean;
  effect: (s: State) => State;
  cost: (s: State) => number;
};

export const actions: Record<string, Action<AvatarLivingState>> = {
  checkNearFoodIsAvailable: {
    condition: (s) => s.energy < 25,
    effect: (s) => {
      // startCheckingProcess
      // callback
      s.goals.food.found = s.location?.room?.content?.food || [];
      return s;
    },
    cost: (_) => 1,
  },
  goToTheStore: {
    condition: (s) => s.goals.food.found?.length === 0,
    effect: (s) => {
      // startMovementProcess
      s.goals.food.purchasable = [{}];
      return s;
    },
    cost: (_) => 2,
  },
  purchaseFood: {
    condition: (s: AvatarLivingState) =>
      s.goals.food.purchasable?.length && s.goals.food.purchasable.length > 0
        ? true
        : false,
    effect: (s) => {
      // registerTransaction
      s.goals.food.equipped = [{}];
      return s;
    },
    cost: (_) => 1,
  },
  eatFood: {
    condition: (s: AvatarLivingState) =>
      s.goals.food.equipped?.length && s.goals.food.equipped.length > 0
        ? true
        : false,
    effect: (s) => {
      // startEatAnimation
      s.goals.food.equipped = [];
      s.energy += 50;
      return s;
    },
    cost: (_) => 1,
  },
};
