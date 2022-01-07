import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Application } from '../models/application';

@Injectable({
  providedIn: 'root',
})
export class SelectedApplicationState {
  application$ = new BehaviorSubject<Application | undefined>(undefined);
  sidebarIsOpen$ = new BehaviorSubject<boolean>(false);

  selectApplication(application: Application) {
    this.application$.next(application);
  }

  unselectApplication() {
    this.application$.next(undefined);
  }

  openSidebar() {
    this.sidebarIsOpen$.next(true);
  }

  closeSidebar() {
    this.sidebarIsOpen$.next(false);
  }
}
