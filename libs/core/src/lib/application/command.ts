export interface Command<TPayload = any> {
  readonly type: string;
  readonly payload?: TPayload;
}
