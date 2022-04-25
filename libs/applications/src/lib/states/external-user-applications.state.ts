import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AvailableApplicationsState } from './manage-applications.state';

@Injectable({
  providedIn: 'root',
})
export class ExternalUserApplicationsState {
  applications$ = this.availableApplicationsState.applications$.pipe(
    map((applications) => {
      const result = applications
        .filter(
          (application) =>
            !application.application.additionalProperties?.internal
        )
        .map((application) => application.application);

      return result;
    })
  );

  constructor(private availableApplicationsState: AvailableApplicationsState) {}
}
