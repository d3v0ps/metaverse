import { Injectable } from '@angular/core';
import { EntityManager } from '@central-factory/persistence/services/entity-manager';
import { Repository } from '@central-factory/persistence/services/repository';
import { BehaviorSubject, forkJoin, switchMap, tap } from 'rxjs';
import { StoreApplicationDocType } from '../collections/store-applications.collection';
import type { Application } from '../models/application';

@Injectable({
  providedIn: 'root',
})
export class StoreApplicationsState {
  public readonly applications$ = new BehaviorSubject<Application[]>([]);

  private storeApplicationsRepository?: Repository<StoreApplicationDocType>;

  constructor(private entityManager: EntityManager) {
    this.entityManager.initialize$
      .pipe(
        switchMap(() =>
          forkJoin([
            this.entityManager.getRepository<StoreApplicationDocType>(
              'storeapplications',
              'com.central-factory.player'
            ),
          ])
        ),
        tap(([storeApplicationsRepository]) => {
          this.storeApplicationsRepository = storeApplicationsRepository;

          this.subscribeToDataChanges();
        })
      )
      .subscribe();
  }

  private subscribeToDataChanges() {
    if (!this.storeApplicationsRepository) {
      throw new Error('Repositories not initialized');
    }

    this.storeApplicationsRepository
      .observe()
      .pipe(
        tap((applications) =>
          this.applications$.next(applications as Application[])
        )
      )
      .subscribe();
  }
}
