import { Injectable } from '@angular/core';
import { EntityManager } from '@central-factory/persistence/services/entity-manager';
import { Repository } from '@central-factory/persistence/services/repository';
import { BehaviorSubject, forkJoin, switchMap, tap } from 'rxjs';
import {
  ApplicationDocType,
  USER_APPLICATION_COLLECTION_NAME,
} from '../__generated__/collections/application';
import type { Application } from '../__generated__/models';

@Injectable({
  providedIn: 'root',
})
export class UserApplicationsState {
  public readonly applications$ = new BehaviorSubject<Application[]>([]);

  private userApplicationsRepository?: Repository<ApplicationDocType>;

  constructor(private entityManager: EntityManager) {
    this.entityManager.initialize$
      .pipe(
        switchMap(() =>
          forkJoin([
            this.entityManager.getRepository<ApplicationDocType>(
              USER_APPLICATION_COLLECTION_NAME,
              'com.central-factory.portals'
            ),
          ])
        ),
        tap(([userApplicationsRepository]) => {
          this.userApplicationsRepository = userApplicationsRepository;

          this.subscribeToDataChanges();
        })
      )
      .subscribe();
  }

  addApplication(application: Application) {
    if (!this.userApplicationsRepository) {
      throw new Error('Repositories not initialized');
    }

    return this.userApplicationsRepository.upsert(application);
  }

  removeApplication(application: Application) {
    if (!this.userApplicationsRepository) {
      throw new Error('Repositories not initialized');
    }

    return this.userApplicationsRepository.remove({
      selector: {
        id: application.id,
      },
    });
  }

  private subscribeToDataChanges() {
    if (!this.userApplicationsRepository) {
      throw new Error('Repositories not initialized');
    }

    this.userApplicationsRepository
      .observe()
      .pipe(
        tap((applications) =>
          this.applications$.next(applications as Application[])
        )
      )
      .subscribe();
  }
}
