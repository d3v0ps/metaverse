import { Injectable } from '@angular/core';
import { EntityManager } from '@central-factory/persistence/services/entity-manager';
import { Repository } from '@central-factory/persistence/services/repository';
import type { UserPreferenceDocType } from '@central-factory/preferences/collections/user-preferences.collection';
import {
  BehaviorSubject,
  forkJoin,
  of,
  switchMap,
  tap,
  throwError,
} from 'rxjs';
import type { UserAvatarDocType } from '../collections/user-avatars.collection';
import type { Avatar } from '../models/avatar';

@Injectable({
  providedIn: 'root',
})
export class SelectedAvatarState {
  avatar$ = new BehaviorSubject<Avatar | undefined>(undefined);

  private userPreferencesRepository?: Repository<UserPreferenceDocType>;
  private userAvatarsRepository?: Repository<UserAvatarDocType>;

  constructor(private entityManager: EntityManager) {
    this.entityManager.initialize$
      .pipe(
        switchMap(() =>
          forkJoin([
            this.entityManager.getRepository<UserPreferenceDocType>(
              'userpreferences',
              'com.central-factory.user-avatars'
            ),
            this.entityManager.getRepository<UserAvatarDocType>(
              'useravatars',
              'com.central-factory.user-avatars'
            ),
          ])
        ),
        tap(([userPreferencesRepository, userAvatarsRepository]) => {
          this.userPreferencesRepository = userPreferencesRepository;
          this.userAvatarsRepository = userAvatarsRepository;

          this.subscribeToDataChanges();
        })
      )
      .subscribe();
  }

  selectAvatar(avatar: Avatar) {
    if (!this.userPreferencesRepository) {
      return throwError(() => new Error('Repositories not initialized'));
    }

    return this.userPreferencesRepository.upsert({
      id: 'userAvatars.selectedAvatar',
      value: avatar.id,
    });
  }

  private subscribeToDataChanges() {
    if (!this.userAvatarsRepository || !this.userPreferencesRepository) {
      throw new Error('Repositories not initialized');
    }

    this.userPreferencesRepository
      .observeOne({
        selector: {
          id: 'userAvatars.selectedAvatar',
        },
      })
      .pipe(
        switchMap((selectedAvatarId) => {
          if (!selectedAvatarId || !this.userAvatarsRepository) {
            return of(undefined);
          }

          return this.userAvatarsRepository.findOne({
            selector: {
              id: selectedAvatarId.value,
            },
          });
        }),
        tap((selectedAvatar) => this.avatar$.next(selectedAvatar as Avatar))
      )
      .subscribe();
  }
}
