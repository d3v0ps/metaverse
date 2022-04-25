import { Injectable } from '@angular/core';
import { EntityManager } from '@central-factory/persistence/services/entity-manager';
import { Repository } from '@central-factory/persistence/services/repository';
import { BehaviorSubject, forkJoin, switchMap, tap } from 'rxjs';
import type { UserAssetDocType } from '../collections/user-assets.collection';
import { Asset } from '../models/asset';

@Injectable({
  providedIn: 'root',
})
export class UserAssetsState {
  public readonly assets$ = new BehaviorSubject<Asset[]>([]);

  private userAssetsRepository?: Repository<UserAssetDocType>;

  constructor(private entityManager: EntityManager) {
    this.entityManager.initialize$
      .pipe(
        switchMap(() =>
          forkJoin([
            this.entityManager.getRepository<UserAssetDocType>(
              'userassets',
              'com.central-factory.inventory'
            ),
          ])
        ),
        tap(([userAssetsRepository]) => {
          this.userAssetsRepository = userAssetsRepository;

          this.subscribeToDataChanges();
        })
      )
      .subscribe();
  }

  private subscribeToDataChanges() {
    if (!this.userAssetsRepository) {
      throw new Error('Repositories not initialized');
    }

    this.userAssetsRepository
      .observe()
      .pipe(tap((assets) => this.assets$.next(assets as Asset[])))
      .subscribe();
  }
}
