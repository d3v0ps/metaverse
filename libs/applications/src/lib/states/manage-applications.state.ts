import { Injectable } from '@angular/core';
import { combineLatest, map, Observable } from 'rxjs';
import type { Application } from '../__generated__/models';
import { StoreApplicationsState } from './store-applications.state';
import { UserApplicationsState } from './user-applications.state';

export enum ApplicationOrigin {
  User = 0,
  Store = 1,
}

export type AvailableApplication = {
  origin: ApplicationOrigin;
  application: Application;
};

@Injectable({
  providedIn: 'root',
})
export class AvailableApplicationsState {
  public readonly applications$: Observable<AvailableApplication[]> =
    combineLatest([
      this.storeApplicationsState.applications$,
      this.userApplicationsState.applications$,
    ]).pipe(
      map(([storeApplications, userApplications]) => {
        return [
          ...userApplications.map((app) => ({
            origin: ApplicationOrigin.User,
            application: app,
          })),
          ...storeApplications.map((app) => ({
            origin: ApplicationOrigin.Store,
            application: app,
          })),
        ].filter(
          (source, index, sources) =>
            sources.findIndex(
              (other) => source.application.id === other.application.id
            ) === index
        );
      })
    );

  constructor(
    private storeApplicationsState: StoreApplicationsState,
    private userApplicationsState: UserApplicationsState
  ) {}
}
