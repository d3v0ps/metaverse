import { actions as avatarActions } from '@central-factory/avatars/actions/avatar.actions';
import { goals as avatarGoals } from '@central-factory/avatars/goals/avatar.goals';
import { AvatarLivingState } from '@central-factory/avatars/states/living-avatar.state';
import { PlannerGoal } from '../models/planner-goal';
import { ActionPlanner } from './action-planner';

const logPlan = (plan: any) => {
  if (!plan) return;
  plan.actions.map((a: any, i: number) => console.log(`${i + 1}) ${a}`));
};

const planner = new ActionPlanner<AvatarLivingState>();

it('can plan actions', () => {
  const plan = planner.createPlan(
    {
      energy: 25,
      mind: 75,
      goals: {
        food: {},
      },
      location: {},
    },
    avatarActions,
    avatarGoals.Food as PlannerGoal
  );
  expect(plan).toBeTruthy();
  logPlan(plan);
});
