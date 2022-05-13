import { Injectable } from '@angular/core';
import { EntityManager } from '@central-factory/persistence/entity-manager';
import { Repository } from '@central-factory/persistence/repository';
import { forkJoin } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { ApplicationDocType } from '../__generated__/collections';
import {
  APPLICATION_COLLECTION_NAME,
  USER_APPLICATION_COLLECTION_NAME,
} from '../__generated__/collections/application';
import {
  Application,
  ApplicationAdditionalProperties,
} from '../__generated__/models';
import {
  ApplicationOrigin,
  AvailableApplicationsState,
} from './manage-applications.state';

@Injectable({
  providedIn: 'root',
})
export class StarredApplicationsState {
  applications$ = this.availableApplicationsState.applications$.pipe(
    map((applications) => {
      const result = applications
        .filter(
          (application) => application.application.additionalProperties?.starred
        )
        .map((application) => application.application);

      return result;
    })
  );

  private userApplicationsRepository?: Repository<ApplicationDocType>;
  private storeApplicationsRepository?: Repository<ApplicationDocType>;

  constructor(
    private entityManager: EntityManager,
    private availableApplicationsState: AvailableApplicationsState
  ) {
    this.entityManager.initialize$
      .pipe(
        switchMap(() =>
          forkJoin([
            this.entityManager.getRepository<ApplicationDocType>(
              USER_APPLICATION_COLLECTION_NAME,
              'com.central-factory.portals'
            ),
            this.entityManager.getRepository<ApplicationDocType>(
              APPLICATION_COLLECTION_NAME,
              'com.central-factory.portals'
            ),
          ])
        ),
        tap(([userApplicationsRepository, storeApplicationsRepository]) => {
          this.userApplicationsRepository = userApplicationsRepository;
          this.storeApplicationsRepository = storeApplicationsRepository;
        })
      )
      .subscribe();
  }

  toggleApplication(application: Application, origin?: ApplicationOrigin) {
    const repository =
      origin === ApplicationOrigin.User
        ? this.userApplicationsRepository
        : this.storeApplicationsRepository;

    if (!repository) {
      throw new Error('Repositories not initialized');
    }

    return repository
      .findOne({
        selector: {
          id: application.id,
        },
      })
      .pipe(
        switchMap((doc) => {
          const applicationDoc = {
            ...application,
            additionalProperties: {
              ...(application.additionalProperties as ApplicationAdditionalProperties),
              starred: application.additionalProperties?.starred ? false : true,
            },
          };

          if (!doc) {
            return repository.insert(applicationDoc);
          }

          return repository.update(
            { selector: { id: application.id } },
            applicationDoc
          );
        })
      );
  }
}
