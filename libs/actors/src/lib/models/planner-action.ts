export type PlannerAction<State = any> = {
  condition: (s: State) => boolean;
  effect: (s: State) => State;
  cost: (s: State) => number;
};
