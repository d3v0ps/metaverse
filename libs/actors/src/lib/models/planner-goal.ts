export type PlannerGoal<TState = any> = {
  priority?: number;
  label: string;
  validate: (prevState: TState, nextState: TState) => boolean;
};
