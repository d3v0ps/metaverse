import { Injectable } from '@angular/core';
import PriorityQueue from 'fastpriorityqueue';
import merge from 'lodash.merge';
import { PlannerAction } from '../models/planner-action';
import { PlannerGoal } from '../models/planner-goal';
import { Action, PlannerNode } from '../models/planner-node';

export type Plan = {
  cost: number;
  goal: PlannerGoal;
  actions: string[];
};

@Injectable({
  providedIn: 'root',
})
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class ActionPlanner<TState = any> {
  execute<State = TState>(
    state: State,
    goals: { actions: Record<string, PlannerAction>; goal: PlannerGoal }[]
  ): {
    bestPlan?: Plan;
    plans: Plan[];
  } {
    const plans: Plan[] = goals
      .map(({ actions, goal }) => this.createPlan(state, actions, goal))
      .filter((plan): plan is Plan => typeof plan === 'object')
      .sort(
        (a, b) => (a.goal.priority || 0) - (b.goal.priority || 0)
      ) as Plan[];

    return {
      bestPlan: plans[0],
      plans,
    };
  }

  createPlan<State = TState>(
    state: State,
    actions: Record<string, PlannerAction>,
    goal: PlannerGoal<State>
  ): Plan | undefined {
    const root: PlannerNode = {
      cost: 0,
      state,
    };
    const leaves = new PriorityQueue<PlannerNode<TState, Action>>(
      (a, b) => a.cost < b.cost
    );

    this.buildGraph(root, leaves, this.mapActions(actions), goal);

    if (!leaves.isEmpty()) {
      return this.getPlanFromLeaf(leaves.poll(), goal);
    }

    return undefined;
  }

  private buildGraph(
    parent: PlannerNode<TState, Action>,
    leaves: PriorityQueue<PlannerNode<TState, Action>>,
    actions: Array<PlannerAction & { key: string }>,
    goal: PlannerGoal
  ) {
    actions.forEach((action) => {
      if (!action.condition(parent.state)) {
        return;
      }

      const nextState = action.effect(merge({}, parent.state));
      const cost = parent.cost + action.cost(nextState);
      const node: PlannerNode<TState, Action> = {
        parent,
        cost,
        state: nextState,
        action,
        key: action.key,
      };

      if (goal.validate(parent.state, nextState)) {
        leaves.add(node);
        return;
      }

      const subset = actions.filter((a) => a.key !== action.key);
      return this.buildGraph(node, leaves, subset, goal);
    });

    return leaves;
  }

  private getPlanFromLeaf(
    node: PlannerNode<TState, Action> | undefined,
    goal: PlannerGoal
  ): Plan {
    const plan = [];
    const cost = node?.cost;
    while (node) {
      if (node.action) plan.unshift(node.action);
      node = node.parent as PlannerNode<TState, Action>;
    }
    return {
      cost: cost || 0,
      goal,
      actions: plan.map((n) => n.key),
    };
  }

  private mapActions = (
    actions: Record<string, PlannerAction>
  ): Array<PlannerAction & { key: string }> => {
    return Object.keys(actions).map((key) => {
      return { ...actions[key], key };
    });
  };
}
