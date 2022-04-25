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
    const marginX = 15;
    const paddingX = 15;
    const marginY = 49;
    const colNumber = 10;
    const vw = document.documentElement.clientWidth;
    const vh = document.documentElement.clientHeight;
    const colWidth =
      (vw - marginX * 2 - paddingX * (colNumber - 1)) / colNumber;
    let events = this.openedApplications$.getValue();

    const getWidthForColumns = (cols: number) => `${colWidth * cols}px`;

    events = events.map((event) => {
      switch (event.settings.groupId) {
        case GROUP_IDS.AVATAR:
          event.settings.width = getWidthForColumns(2);
          event.settings.height = `calc(100vh - 35%)`;
          event.settings.x = vw - colWidth * 2 - marginX;
          event.settings.y = marginY;
          break;

        case GROUP_IDS.KNOWLEDGE_BASE:
          event.settings.width = getWidthForColumns(2);
          event.settings.height = `calc(100vh - 40%)`;
          event.settings.x = marginX;
          event.settings.y = marginY;
          break;

        case GROUP_IDS.WORLD:
          event.settings.width = getWidthForColumns(2);
          event.settings.height = `calc(100vh - 70%)`;
          event.settings.x = marginX;
          event.settings.y = (vh * 67) / 100;
          break;

        case GROUP_IDS.INVENTORY:
          event.settings.width = getWidthForColumns(2);
          event.settings.height = `calc(100vh - 75%)`;
          event.settings.x = vw - colWidth * 2 - marginX;
          event.settings.y = (vh * 72) / 100;
          break;

        case GROUP_IDS.PORTALS:
          event.settings.width = getWidthForColumns(6);
          event.settings.height = `calc(100vh - 70%)`;
          event.settings.x = marginX * 2 + (colWidth + paddingX) * 2 + paddingX;
          event.settings.y = (vh * 67) / 100;
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
