import { Injectable } from "@angular/core";
import { BehaviorSubject, map } from "rxjs";
import { v4 as uuid } from "uuid";
import { ApplicationCloseCommand, ApplicationGroupCommand, ApplicationHideCommand, ApplicationOpenCommand, ApplicationShowCommand } from "../models/application-commands";
import { ApplicationOpenedEvent } from "../models/application-events";

export const GROUPLESS_ID = '0';

@Injectable({
  providedIn: 'root',
})
export class ApplicationDisplayState {

  openedApplications$ = new BehaviorSubject<ApplicationOpenedEvent[]>([]);

  shownApplications$ = this.openedApplications$.pipe(
    map(events => events.filter(event => event.settings.shown === true)),
  );
  groupedApplications$ = this.shownApplications$.pipe(
    map(events => events.filter(event => event.settings.groupId ? true : false).reduce((result, event) =>
      Object.assign(result, {
        [event.settings.groupId || GROUPLESS_ID]: (result[event.settings.groupId || GROUPLESS_ID]?.concat(event) || [event])
      }), {} as Record<string, ApplicationOpenedEvent[]>)
    ),
  );

  open({
    application,
    settings
  }: ApplicationOpenCommand) {
    console.log('open');
    const events = this.openedApplications$.getValue();
    const isOpened = events.find(event => event.application.id === application.id);
    const isSameParams = isOpened?.settings === settings;

    if (isSameParams) {
      throw new Error('Application already opened on that location');
    }

    events.push({
      name: ApplicationOpenedEvent.name,
      application,
      settings: {
        groupId: uuid(),
        params: undefined,
        ...settings,
        shown: true,
      }
    });

    this.openedApplications$.next(events);
  }

  show({
    application,
    settings,
  }: ApplicationShowCommand) {
    const events = this.openedApplications$.value;
    const isOpened = events.find(event => event.application.id === application.id);
    const isSameParams = isOpened?.settings.shown === true;

    // if (isSameParams) {
    //   throw new Error('Application already shown on that location');
    // }

    if (!isOpened) {
      events.push({
        name: ApplicationOpenedEvent.name,
        application,
        settings: {
          groupId: uuid(),
          params: undefined,
          shown: true,
          ...settings,
        }
      });
      // events = events.filter(event => event.application.id !== application.id);
    }

    this.openedApplications$.next(events.map(event => {
      if (event.application.id === application.id) {
        event.settings.shown = true;
        event.settings.zIndex = 1;
      } else {
        event.settings.zIndex = (event.settings.zIndex || 1) + 1;
      }
      return event;
    }));
  }

  hide({
    application
  }: ApplicationHideCommand) {
    let events = this.openedApplications$.getValue();
    const isOpened = events.find(event => event.application.id === application.id);
    const isSameParams = isOpened?.settings.shown === false;

    if (isSameParams) {
      throw new Error('Application already hidden');
    }

    if (isOpened) {
      events = events.filter(event => event.application.id !== application.id);
    }

    events.push({
      name: ApplicationOpenedEvent.name,
      application,
      settings: {
        groupId: uuid(),
        params: undefined,
        shown: true,
        ...isOpened?.settings,
      }
    });


    this.openedApplications$.next(events);

  }

  group({
    application,
    groupId
  }: ApplicationGroupCommand) {
    let events = this.openedApplications$.getValue();

    const isOpened = events.find(event => event.application.id === application.id);
    const isSameParams = isOpened?.settings.groupId === groupId;

    if (isSameParams) {
      throw new Error('Application already in that group');
    }

    if (!isOpened) {
      throw new Error('Application not opened');
    }

    events = events.filter(event => event.application.id !== application.id);

    events.push({
      name: ApplicationOpenedEvent.name,
      application,
      settings: {
        groupId,
        params: undefined,
        ...isOpened.settings,
      }
    });


    this.openedApplications$.next(events);
  }

  close({
    application
  }: ApplicationCloseCommand) {
    let events = this.openedApplications$.getValue();

    events = events.filter(event => event.application.id !== application.id);
    this.openedApplications$.next(events);
  }
}
