import { Application } from './application';

export type ApplicationOpenedSettings<TParams = any> = {
  groupId?: string;
  params?: TParams;
  shown: boolean;
  width?: string;
  height?: string;
  x?: number;
  y?: number;
  zIndex?: number;
};

export class ApplicationOpenedEvent {
  readonly name: string = '[Application] Opened';

  constructor(
    public readonly application: Application,
    public readonly settings: ApplicationOpenedSettings
  ) {}
}

export class ApplicationShownEvent {
  readonly name: string = '[Application] Shown';

  constructor(public readonly application: Application) {}
}

export class ApplicationLoadedEvent {
  readonly name: string = '[Application] Loaded';

  constructor(public readonly application: Application) {}
}

export class ApplicationCaughtEvent {
  readonly name: string = '[Application] Caught';

  constructor(public readonly application: Application) {}
}

export class ApplicationHiddenEvent {
  readonly name: string = '[Application] Hidden';

  constructor(public readonly application: Application) {}
}

export class ApplicationGroupedEvent {
  readonly name: string = '[Application] Grouped';

  constructor(
    public readonly application: Application,
    public readonly group: Application[]
  ) {}
}

export class ApplicationClosedEvent {
  readonly name: string = '[Application] Closed';

  constructor(public readonly application: Application) {}
}
