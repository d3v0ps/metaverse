import { Injectable } from '@angular/core';
import { EntityManager } from '@central-factory/persistence/services/entity-manager';
import { Repository } from '@central-factory/persistence/services/repository';
import type { UserPreferenceDocType } from '@central-factory/preferences/collections/user-preferences.collection';
import {
  BehaviorSubject,
  forkJoin,
  map,
  of,
  Subscription,
  switchMap,
  tap,
  throwError,
} from 'rxjs';
import type { UserAvatarDocType } from '../collections/user-avatars.collection';
import { Appearance } from '../models';
import type { Avatar } from '../models/avatar';

@Injectable({
  providedIn: 'root',
})
export class SelectedAvatarState {
  avatar$ = new BehaviorSubject<Avatar | undefined>(undefined);

  private userPreferencesRepository?: Repository<UserPreferenceDocType>;
  private userAvatarsRepository?: Repository<UserAvatarDocType>;

  private avatarQuerySubscription?: Subscription;

  constructor(private entityManager: EntityManager) {
    this.entityManager.initialize$
      .pipe(
        switchMap(() =>
          forkJoin([
            this.entityManager.getRepository<UserPreferenceDocType>(
              'userpreferences',
              'com.central-factory.avatars'
            ),
            this.entityManager.getRepository<UserAvatarDocType>(
              'useravatars',
              'com.central-factory.avatars'
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
      key: 'userAvatars.selectedAvatar',
      value: avatar.id,
    });
  }

  selectAppearance(appearance: Appearance) {
    if (!this.userAvatarsRepository) {
      return throwError(() => new Error('Repositories not initialized'));
    }

    const avatar = this.avatar$.getValue();

    if (!avatar) {
      return throwError(() => new Error('Avatar not selected'));
    }

    const avatarUpdate: Avatar = JSON.parse(JSON.stringify(avatar));
    avatarUpdate.selectedAppearance = appearance;

    return this.userAvatarsRepository.upsert(avatarUpdate);
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
      .subscribe((selectedAvatarId) => {
        if (this.avatarQuerySubscription) {
          this.avatarQuerySubscription.unsubscribe();
        }

        if (!selectedAvatarId || !this.userAvatarsRepository) {
          return;
        }

        this.avatarQuerySubscription = this.userAvatarsRepository
          .observeOne({
            selector: {
              id: selectedAvatarId.value,
            },
          })
          .pipe(
            switchMap((avatar) => {
              const hasAttachments =
                avatar &&
                avatar._attachments &&
                Object.keys(avatar._attachments).length > 0;

              if (!hasAttachments || !avatar) {
                return of(avatar);
              }

              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              return this.userAvatarsRepository!.getAllAttachments(
                avatar.id
              ).pipe(
                map((attachments) => {
                  avatar.appearances.forEach((appearance) => {
                    const portraitAttachment = attachments.find(
                      (attachment) => attachment.id === appearance.portrait.id
                    );

                    if (portraitAttachment) {
                      appearance.portrait.src = URL.createObjectURL(
                        portraitAttachment.data as Blob
                      );
                    }

                    const modelAttachment = attachments.find(
                      (attachment) => attachment.id === appearance.id
                    );

                    if (modelAttachment) {
                      appearance.src = URL.createObjectURL(
                        modelAttachment.data as Blob
                      );
                    }
                  });

                  avatar.selectedAppearance = avatar.appearances.find(
                    (appearance) =>
                      appearance.id === avatar.selectedAppearance.id
                  ) as Appearance;

                  return avatar;
                })
              );
            }),
            tap((selectedAvatar) => this.avatar$.next(selectedAvatar as Avatar))
          )
          .subscribe();
      });
  }
}
