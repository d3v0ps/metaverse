import { Injectable } from '@angular/core';
import { EntityManager } from '@central-factory/persistence/services/entity-manager';
import { Repository } from '@central-factory/persistence/services/repository';
import { BehaviorSubject, forkJoin, map, of, switchMap, tap } from 'rxjs';
import type { UserAvatarDocType } from '../collections/user-avatars.collection';
import { Appearance } from '../models';
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
      .pipe(
        switchMap((avatars) => {
          return avatars.length > 0
            ? forkJoin(
                avatars.map((avatar) => {
                  const hasAttachments =
                    avatar._attachments &&
                    Object.keys(avatar._attachments).length > 0;

                  if (!hasAttachments) {
                    return of(avatar);
                  }

                  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                  return this.userAvatarsRepository!.getAllAttachments(
                    avatar.id
                  ).pipe(
                    map((attachments) => {
                      avatar.appearances.forEach((appearance) => {
                        const portraitAttachment = attachments.find(
                          (attachment) =>
                            attachment.id === appearance.portrait.id
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
                })
              )
            : of(avatars);
        }),
        tap((avatars) => this.avatars$.next(avatars as Avatar[]))
      )
      .subscribe();
  }
}