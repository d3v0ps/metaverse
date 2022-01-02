import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { UserApplicationsState } from './user-applications.state';

@Injectable({
  providedIn: 'root',
})
export class InternalUserApplicationsState {
  applications$ = this.userApplicationsState.applications$.pipe(
    map((applications) =>
      applications.filter(
        (application) =>
          application.additionalProperties &&
          application.additionalProperties.internal
      )
    )
  );

  constructor(private userApplicationsState: UserApplicationsState) {}
}
