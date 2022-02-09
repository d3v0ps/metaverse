import { Injectable } from '@angular/core';
import { EntityManager } from '@central-factory/persistence/services/entity-manager';
import { Repository } from '@central-factory/persistence/services/repository';
import { forkJoin } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { StoreApplicationDocType } from '../collections/store-applications.collection';
import { UserApplicationDocType } from '../collections/user-applications.collection';
import {
  Application,
  ApplicationAdditionalProperties,
} from '../models/application';
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

  private userApplicationsRepository?: Repository<UserApplicationDocType>;
  private storeApplicationsRepository?: Repository<StoreApplicationDocType>;

  constructor(
    private entityManager: EntityManager,
    private availableApplicationsState: AvailableApplicationsState
  ) {
    this.entityManager.initialize$
      .pipe(
        switchMap(() =>
          forkJoin([
            this.entityManager.getRepository<UserApplicationDocType>(
              'userapplications',
              'com.central-factory.start'
            ),
            this.entityManager.getRepository<StoreApplicationDocType>(
              'storeapplications',
              'com.central-factory.start'
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
