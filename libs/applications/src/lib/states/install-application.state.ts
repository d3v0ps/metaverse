import { Injectable } from '@angular/core';
import { Application } from '../models/application';
import { UserApplicationsState } from './user-applications.state';

@Injectable({
  providedIn: 'root',
})
export class InstallApplicationsState {
  constructor(private userApplicationsState: UserApplicationsState) {}

  install(application: Application) {
    this.userApplicationsState.addApplication(application).subscribe();
  }
}
