/* eslint-disable @typescript-eslint/no-explicit-any */
import { Application } from "./application";

export type ApplicationOpenSettings<TParams = any> = {
  groupId?: string;
  params?: TParams;
  show: boolean;
  width?: string;
  height?: string;
  x?: number;
  y?: number;
}

export class ApplicationOpenCommand<TParams = any> {
  readonly name: string = '[Application] Open'
  constructor(public readonly application: Application, public readonly settings?: ApplicationOpenSettings<TParams>) { }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class ApplicationCatchCommand<TParams = any> {
  readonly name = '[Application] Catch'

  constructor(public readonly application: Application, public readonly settings?: ApplicationOpenSettings<TParams>) { }
}

export class ApplicationShowCommand<TParams = any> {
  readonly name = '[Application] Show'

  constructor(public readonly application: Application, public readonly settings?: ApplicationOpenSettings<TParams>) { }
}

export class ApplicationHideCommand {
  readonly name = '[Application] Hide'

  constructor(public readonly application: Application) { }
}

export class ApplicationGroupCommand<TParams = any> {
  readonly name = '[Application] Group'

  constructor(public readonly application: Application, public readonly groupId: string, public readonly settings?: ApplicationOpenSettings) { }
}

export class ApplicationCloseCommand {
  readonly name = '[Application] Close'
  constructor(public readonly application: Application) { }
}
