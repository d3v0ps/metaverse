import { Injectable } from '@angular/core';
import { AvailableApplicationsState } from '@central-factory/applications/states/manage-applications.state';
import { BehaviorSubject, map, Subscription, tap } from 'rxjs';
import { Application } from '../models/application';

@Injectable({
  providedIn: 'root',
})
export class SelectedApplicationState {
  application$ = new BehaviorSubject<Application | undefined>(undefined);
  sidebarIsOpen$ = new BehaviorSubject<boolean>(false);

  private changesSubscription?: Subscription;

  constructor(private availableApplicationsState: AvailableApplicationsState) {}

  listenForChanges(applicationId?: string) {
    if (this.changesSubscription) {
      this.changesSubscription.unsubscribe();
    }

    if (!applicationId) {
      this.application$.next(undefined);
      return;
    }

    this.changesSubscription = this.availableApplicationsState.applications$
      .pipe(
        map((applications) =>
          applications.find(
            (application) => application.application.id === applicationId
          )
        ),
        tap((application) =>
          this.application$.next(application?.application as Application)
        )
      )
      .subscribe();
  }

  selectApplication(application: Application) {
    this.listenForChanges(application.id);
  }

  unselectApplication() {
    this.listenForChanges(undefined);
  }

  openSidebar() {
    this.sidebarIsOpen$.next(true);
  }

  closeSidebar() {
    this.sidebarIsOpen$.next(false);
  }
}
