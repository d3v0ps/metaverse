export type Action = {
  key: string;
};

export type PlannerNode<TState = any, TAction extends Action = Action> = {
  state: TState;
  parent?: PlannerNode<TState, TAction>;
  action?: Action;
  key?: string;
  cost: number;
};
