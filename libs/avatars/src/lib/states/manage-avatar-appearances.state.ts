import { Injectable } from '@angular/core';
import { EntityManager } from '@central-factory/persistence/services/entity-manager';
import { Repository } from '@central-factory/persistence/services/repository';
import { forkJoin, of, throwError } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { UserAvatarDocType } from '../collections/user-avatars.collection';
import { Appearance, Avatar } from '../models';
import { AvatarAppearanceEditorModel } from '../web-components/angular/avatar-appearance-editor/avatar-appearance-editor.component';

@Injectable({
  providedIn: 'root',
})
export class ManageAvatarAppearancesState {
  private userAvatarsRepository?: Repository<UserAvatarDocType>;

  constructor(private entityManager: EntityManager) {
    this.entityManager.initialize$
      .pipe(
        switchMap(() =>
          forkJoin([
            this.entityManager.getRepository<UserAvatarDocType>(
              'useravatars',
              'com.central-factory.avatars'
            ),
          ])
        ),
        tap(([userAvatarsRepository]) => {
          this.userAvatarsRepository = userAvatarsRepository;
          (window as any)['userAvatarsRepository'] = userAvatarsRepository;
        })
      )
      .subscribe();
  }

  putAppearance(avatarId: string, value: AvatarAppearanceEditorModel) {
    if (!this.userAvatarsRepository) {
      return throwError(() => new Error('Repositories not initialized'));
    }

    const { model, portrait, info } = value;

    const avatarFetch$ = this.userAvatarsRepository
      .findOne({
        selector: {
          id: avatarId,
        },
      })
      // transform to remove the readonly as we are going to update the document
      .pipe(map((avatar) => JSON.parse(JSON.stringify(avatar)) as Avatar));

    const modelUpload$ = model.file
      ? this.userAvatarsRepository.putAttachment(avatarId, {
          data: model.file,
          id: model.id,
          type: 'model/vnd.gltf.binary',
        })
      : of(model.id);

    const portraitUpload$ = portrait.file
      ? this.userAvatarsRepository.putAttachment(avatarId, {
          data: portrait.file,
          id: portrait.id,
          type: 'image/png',
        })
      : of(portrait.id);

    return forkJoin([modelUpload$, portraitUpload$]).pipe(
      switchMap(([modelId, portraitId]) =>
        avatarFetch$.pipe(map((avatar) => ({ avatar, modelId, portraitId })))
      ),
      switchMap(({ avatar, modelId, portraitId }) => {
        if (!this.userAvatarsRepository) {
          return throwError(() => new Error('Repositories not initialized'));
        }

        if (!avatar) {
          return throwError(() => new Error('Avatar not found'));
        }

        const alreadyExistingAppearance = avatar.appearances.find(
          (appearance) => appearance.id === model.id
        );

        const appearance: Appearance = {
          id: model.id,
          format: model.format,
          filename: model.filename || alreadyExistingAppearance?.filename || '',
          src: model.file
            ? undefined
            : model.src || alreadyExistingAppearance?.src,
          info,
          portrait: {
            id: portrait.id,
            format: portrait.format,
            filename:
              portrait.filename ||
              alreadyExistingAppearance?.portrait.filename ||
              '',
            src: portrait.file
              ? undefined
              : portrait.src || alreadyExistingAppearance?.portrait.src,
          },
        };

        if (alreadyExistingAppearance) {
          avatar.appearances[
            avatar.appearances.indexOf(alreadyExistingAppearance)
          ] = appearance;
        } else {
          avatar.appearances = [...avatar.appearances, appearance];
        }

        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return this.userAvatarsRepository!.update(
          {
            selector: {
              id: avatar.id,
            },
          },
          avatar
        );
      })
    );
  }
}
