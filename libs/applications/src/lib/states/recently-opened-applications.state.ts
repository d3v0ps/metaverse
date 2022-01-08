import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Application } from '../models/application';

@Injectable({
  providedIn: 'root',
})
export class RecentlyOpenedApplicationsState {
  applications$ = new BehaviorSubject<Application[]>([]);

  private readonly maxApplications = 4;

  addApplication(application: Application) {
    const applications = this.applications$.getValue();

    const found = applications.find((app) => app.id === application.id);

    if (found) {
      return;
    }

    if (applications.length >= this.maxApplications) {
      applications.shift();
    }

    applications.unshift(application);

    this.applications$.next(applications);
  }
}
