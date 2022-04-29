import { Inject, Injectable, InjectionToken } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { v4 as uuid } from 'uuid';
import {
  ApplicationCloseCommand,
  ApplicationGroupCommand,
  ApplicationHideCommand,
  ApplicationOpenCommand,
  ApplicationResizeCommand,
  ApplicationShowCommand,
} from '../models/application-commands';
import { ApplicationOpenedEvent } from '../models/application-events';

export const GROUPLESS_ID = '0';

export enum GROUP_IDS {
  AVATAR = 'avatar',
  KNOWLEDGE_BASE = 'knowledge-base',
  WORLD = 'world',
  INVENTORY = 'inventory',
  PORTALS = 'portals',
}

export const STARTUP_APPLICATIONS_PROVIDER = new InjectionToken<
  ApplicationShowCommand[]
>('ApplicationsModule.StartupApplicationsProvider');

@Injectable({
  providedIn: 'root',
})
export class ApplicationDisplayState {
  openedApplications$ = new BehaviorSubject<ApplicationOpenedEvent[]>([]);

  shownApplications$ = this.openedApplications$.pipe(
    map((events) => events.filter((event) => event.settings.shown === true))
  );
  groupedApplications$ = this.shownApplications$.pipe(
    map((events) =>
      events
        .filter((event) => (event.settings.groupId ? true : false))
        .reduce(
          (result, event) =>
            Object.assign(result, {
              [event.settings.groupId || GROUPLESS_ID]: result[
                event.settings.groupId || GROUPLESS_ID
              ]?.concat(event) || [event],
            }),
          {} as Record<string, ApplicationOpenedEvent[]>
        )
    )
  );

  constructor(
    @Inject(STARTUP_APPLICATIONS_PROVIDER)
    private startupApplicationsProvider: ApplicationShowCommand[]
  ) {
    this.startupApplicationsProvider.forEach((command) => this.show(command));
    this.align();
  }

  open({ application, settings }: ApplicationOpenCommand) {
    const events = this.openedApplications$.getValue();
    const isOpened = events.find(
      (event) => event.application.id === application.id
    );
    const isSameParams = isOpened?.settings === settings;

    if (isOpened && isSameParams) {
      throw new Error('Application already opened on that location');
    }

    events.push({
      name: ApplicationOpenedEvent.name,
      application,
      settings: {
        groupId: uuid(),
        params: undefined,
        ...settings,
        shown: false,
      },
    });

    this.openedApplications$.next(events);

    this.show({ application, settings } as ApplicationShowCommand);
  }

  show({ application, settings }: ApplicationShowCommand) {
    const events = this.openedApplications$.value;
    const isOpened = events.find(
      (event) => event.application.id === application.id
    );

    if (!isOpened) {
      events.push({
        name: ApplicationOpenedEvent.name,
        application,
        settings: {
          groupId: uuid(),
          params: undefined,
          shown: true,
          x: settings?.x || (document.defaultView?.innerWidth || 0) * 0.15,
          y: settings?.y || (document.defaultView?.innerHeight || 0) * 0.15,
          width: settings?.width || `calc(100vw - 30%)`,
          height: settings?.height || `calc(100vh - 30%)`,
          ...settings,
        },
      });
      // events = events.filter(event => event.application.id !== application.id);
    }

    this.openedApplications$.next(
      events.map((event, index) => {
        const previous = events[index - 1];
        if (event.application.id === application.id) {
          const isShown = event.settings.shown;
          event.settings.shown = true;
          event.settings.zIndex = 1;
          if (!isShown) {
            event.settings.x =
              event.settings.x ||
              (previous?.settings?.x
                ? previous.settings.x + 20
                : (document.defaultView?.innerWidth || 0) * 0.15);
            event.settings.y =
              event.settings.y ||
              (previous?.settings?.y
                ? previous.settings.y + 20
                : (document.defaultView?.innerHeight || 0) * 0.15);
            event.settings.width = event.settings.width || 'calc(100vw - 30%)';
            event.settings.height =
              event.settings.height || 'calc(100vh - 30%)';
          }
        } else {
          event.settings.zIndex = (event.settings.zIndex || 1) + 1;
        }
        return event;
      })
    );
  }

  resize({ application, dimensions }: ApplicationResizeCommand) {
    const events = this.openedApplications$.getValue();
    const event = events.find(
      (event) => event.application.id === application.id
    );

    if (!event) {
      throw new Error('Application not opened');
    }

    if (dimensions.width) {
      event.settings.width = `${dimensions.width}px`;
    }
    if (dimensions.height) {
      event.settings.height = `${dimensions.height}px`;
    }
  }

  hide({ application }: ApplicationHideCommand) {
    let events = this.openedApplications$.getValue();
    const isOpened = events.find(
      (event) => event.application.id === application.id
    );
    const isSameParams = isOpened?.settings.shown === false;

    if (isSameParams) {
      throw new Error('Application already hidden');
    }

    if (isOpened) {
      events = events.filter(
        (event) => event.application.id !== application.id
      );
    }

    events.push({
      name: ApplicationOpenedEvent.name,
      application,
      settings: {
        groupId: uuid(),
        params: undefined,
        shown: true,
        ...isOpened?.settings,
      },
    });

    this.openedApplications$.next(events);
  }

  group({ application, groupId }: ApplicationGroupCommand) {
    let events = this.openedApplications$.getValue();

    const isOpened = events.find(
      (event) => event.application.id === application.id
    );
    const isSameParams = isOpened?.settings.groupId === groupId;

    if (isSameParams) {
      throw new Error('Application already in that group');
    }

    if (!isOpened) {
      throw new Error('Application not opened');
    }

    events = events.filter((event) => event.application.id !== application.id);

    events.push({
      name: ApplicationOpenedEvent.name,
      application,
      settings: {
        groupId,
        params: undefined,
        ...isOpened.settings,
      },
    });

    this.openedApplications$.next(events);
  }

  close({ application }: ApplicationCloseCommand) {
    let events = this.openedApplications$.getValue();

    events = events.filter((event) => event.application.id !== application.id);
    this.openedApplications$.next(events);
  }

  async align() {
    const colNumber = 100;
    const rowNumber = 100;
    const marginX = 10;
    const marginTop = 49;
    const marginBot = 10;
    const paddingX = 5;
    const paddingY = 5;
    const vw = document.documentElement.clientWidth;
    const vh = document.documentElement.clientHeight;
    const gridWidth = vw - marginX * 2;
    const gridHeight = vh - marginTop - marginBot;
    const colWidth = gridWidth / colNumber;
    const rowHeight = gridHeight / rowNumber;

    let events = this.openedApplications$.getValue();

    const getColWidth = (columns: number) => columns * colWidth - paddingX * 2;
    const getColHeight = (columns: number) =>
      columns * rowHeight - paddingY * 2;

    const getWidthForColumns = (cols: number) => `${getColWidth(cols)}px`;
    const getHeightForColumns = (cols: number) => `${getColHeight(cols)}px`;

    events = events.map((event) => {
      switch (event.settings.groupId) {
        case GROUP_IDS.AVATAR:
          event.settings.width = getWidthForColumns(20);
          event.settings.height = getHeightForColumns(70);
          console.debug('avatar height', event.settings.height);
          event.settings.x = marginX + paddingX + getColWidth(80) + paddingY;
          event.settings.y = marginTop + paddingY;
          break;

        case GROUP_IDS.KNOWLEDGE_BASE:
          event.settings.width = getWidthForColumns(20);
          event.settings.height = getHeightForColumns(70);
          event.settings.x = marginX + paddingX;
          event.settings.y = marginTop + +paddingY;
          break;

        case GROUP_IDS.WORLD:
          event.settings.width = getWidthForColumns(20);
          event.settings.height = getHeightForColumns(30);
          event.settings.x = marginX + paddingX;
          event.settings.y =
            marginTop + paddingY + getColHeight(70) + paddingY * 2;
          break;

        case GROUP_IDS.INVENTORY:
          event.settings.width = getWidthForColumns(20);
          event.settings.height = getHeightForColumns(30);
          console.debug('inventory height', event.settings.height);
          event.settings.x = marginX + paddingX + getColWidth(80) + paddingY;
          event.settings.y =
            marginTop + paddingY + getColHeight(70) + paddingY * 2;
          break;

        case GROUP_IDS.PORTALS:
          event.settings.width = getWidthForColumns(60);
          event.settings.height = getHeightForColumns(30);
          event.settings.x = marginX + paddingX + getColWidth(20) + paddingX;
          event.settings.y =
            marginTop + paddingY + getColHeight(70) + paddingY * 2;
          break;

        case GROUPLESS_ID:
        default:
          break;
      }

      return event;
    });

    this.openedApplications$.next(events);
  }
}
