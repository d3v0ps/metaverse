import { Injectable } from '@angular/core';
import { EntityManager } from '@central-factory/persistence/entity-manager';
import { Repository } from '@central-factory/persistence/repository';
import { forkJoin, of, throwError } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { AvatarAppearanceEditorModel } from '../web-components/angular/avatar-appearance-editor/avatar-appearance-editor.component';
import {
  AvatarDocType,
  USER_AVATAR_COLLECTION_NAME,
} from '../__generated__/collections/avatar';
import { Avatar } from '../__generated__/models';

@Injectable({
  providedIn: 'root',
})
export class ManageAvatarAppearancesState {
  private userAvatarsRepository?: Repository<AvatarDocType>;

  constructor(private entityManager: EntityManager) {
    this.entityManager.initialize$
      .pipe(
        switchMap(() =>
          forkJoin([
            this.entityManager.getRepository<AvatarDocType>(
              USER_AVATAR_COLLECTION_NAME,
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

    if (!this.userAvatarsRepository.putAttachment) {
      return throwError(
        () => new Error('Repository doesnt implement attachment feature')
      );
    }

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

        avatar.appearances = avatar.appearances || [];
        const alreadyExistingAppearance = avatar.appearances.find(
          (appearance) => appearance.id === model.id
        );

        const appearance: any = {
          id: model.id,
          format: '' as any,
          filename: model.filename || alreadyExistingAppearance?.filename || '',
          src: model.file
            ? undefined
            : model.src || alreadyExistingAppearance?.src,
          info,
          portrait: {
            id: portrait.id,
            format: '',
            filename:
              portrait.filename ||
              alreadyExistingAppearance?.variations?.portrait.filename ||
              '',
            src: portrait.file
              ? undefined
              : portrait.src ||
                alreadyExistingAppearance?.variations?.portrait.src,
            style: portrait.style,
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
