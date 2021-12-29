import { Injectable } from '@angular/core';
import { EntityManager } from '@central-factory/persistence/services/entity-manager';
import { Repository } from '@central-factory/persistence/services/repository';
import { BehaviorSubject, forkJoin, switchMap, tap } from 'rxjs';
import type { UserAvatarDocType } from '../collections/user-avatars.collection';
import type { Avatar } from '../models/avatar';

@Injectable({
  providedIn: 'root',
})
export class AvailableAvatarsState {
  avatars$ = new BehaviorSubject<Avatar[]>([]);

  private userAvatarsRepository?: Repository<UserAvatarDocType>;

  constructor(private entityManager: EntityManager) {
    this.entityManager.initialize$
      .pipe(
        switchMap(() =>
          forkJoin([
            this.entityManager.getRepository<UserAvatarDocType>(
              'useravatars',
              'com.central-factory.user-avatars'
            ),
          ])
        ),
        tap(([userAvatarsRepository]) => {
          this.userAvatarsRepository = userAvatarsRepository;

          this.subscribeToDataChanges();
        })
      )
      .subscribe();
  }

  private subscribeToDataChanges() {
    if (!this.userAvatarsRepository) {
      throw new Error('Repositories not initialized');
    }

    this.userAvatarsRepository
      .observe()
      .pipe(tap((avatars) => this.avatars$.next(avatars as Avatar[])))
      .subscribe();
  }
}
