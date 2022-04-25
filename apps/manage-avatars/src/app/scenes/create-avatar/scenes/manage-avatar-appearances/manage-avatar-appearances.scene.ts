import { Component } from '@angular/core';
import { Appearance } from '@central-factory/avatars/models/appearance';
import { ManageAvatarAppearancesState } from '@central-factory/avatars/states/manage-avatar-appearances.state';
import { SelectedAvatarState } from '@central-factory/avatars/states/selected-avatar.state';
import { AvatarAppearanceEditorModel } from '@central-factory/avatars/web-components/angular/avatar-appearance-editor/avatar-appearance-editor.component';
import { AvatarAppearancesCarouselDisplayMode } from '@central-factory/avatars/web-components/angular/avatar-appearances-carousel/avatar-appearances-carousel.component';
import { map, switchMap, take, tap } from 'rxjs';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'cf-manage-avatar-appearances-scene',
  template: `
    <div
      cfBlock="manage-avatar-appearances"
      *ngIf="appearances$ | async as appearances"
    >
      <div cfBlock="appearances-list" *ngIf="appearances.length > 0">
        <div cfElem="content">
          <cf-avatar-appearances-carousel
            [appearances]="appearances"
            [showAdd]="true"
            (appearanceClick)="onAppearanceClick($event)"
            (appearanceAddClick)="onAppearanceAddClick()"
          >
          </cf-avatar-appearances-carousel>
        </div>
        <!-- div cfElem="footer">
          <div cfBlock="form-buttons">
            <button
              cfBlock="button"
              [cfMod]="['primary', 'has-icon']"
              (click)="onAppearanceAddClick()"
            >
              <cf-svg-icon elem="icon" src="assets/icons/mdi/account-plus.svg">
              </cf-svg-icon>
              <span elem="label">Add a new appearance</span>
            </button>
            <button
              cfBlock="button"
              [cfMod]="['primary', 'has-icon', 'full-width']"
              (click)="onConfirmAppearancesButtonClick()"
              [disabled]="appearances.length === 0"
            >
              <cf-svg-icon
                elem="icon"
                src="assets/icons/mdi/account-multiple-check.svg"
              >
              </cf-svg-icon>
              <span elem="label">Confirm appearances</span>
            </button>
          </div>
        </div -->
      </div>
      <div cfBlock="appearance-editor">
        <ng-container *ngIf="loading"> Loading... </ng-container>
        <ng-container *ngIf="!selectedAppearance">
          <h3>
            <ng-container *ngIf="appearances.length > 0">
              You currently have {{ appearances.length }} appearances for this
              avatar, but you cand add more if you want.
            </ng-container>
            <ng-container *ngIf="appearances.length <= 0">
              You don't have any appearance for this avatar, start adding at
              least one.
            </ng-container>
          </h3>
          <button
            cfBlock="button"
            [cfMod]="['primary', 'has-icon']"
            (click)="onAppearanceAddClick()"
          >
            <cf-svg-icon elem="icon" src="assets/icons/mdi/account-plus.svg">
            </cf-svg-icon>
            <span elem="label">Add a new appearance</span>
          </button>
        </ng-container>
        <cf-avatar-appearance-editor
          *ngIf="selectedAppearance"
          [appearance]="selectedAppearance"
          (appearanceSubmit)="onAppearanceSubmit($event)"
          (portraitChange)="onPortraitChange($event)"
        ></cf-avatar-appearance-editor>
      </div>
    </div>
  `,
  styles: [
    `
      .manage-avatar-appearances {
        display: flex;
        flex-direction: column;
        grid-template-columns: 20% 80%;
        grid-template-rows: 1fr;
        gap: 1rem;
        height: 100%;

        .appearances-list {
          display: flex;
          flex-direction: column;

          &__content {
            overflow: auto;
            height: 100%;
          }

          &__footer {
            padding: 0rem 1.1rem 1rem;
          }
        }

        .appearance-editor {
          height: 100%;
          overflow: hidden;
        }

        .form-buttons {
          flex-direction: column;
          gap: 0.5rem;
        }
      }
    `,
  ],
})
export class ManageAvatarAppearancesScene {
  // appearances$ = new BehaviorSubject<Appearance[]>([
  //   {
  //     id: uuid(),
  //     filename: '',
  //     format: AppearanceFormat.Image,
  //     variations: {
  //       portrait: {
  //         id: uuid(),
  //         filename: '',
  //         style: {
  //           id: 'avataaars',
  //           properties: {
  //             skinColor: 'Pale',
  //             topType: 'NoHair',
  //             facialHairType: 'Blank',
  //             eyeType: 'Default',
  //             eyebrowType: 'Default',
  //             mouthType: 'Default',
  //             clotheType: 'ShirtCrewNeck',
  //             clotheColor: 'Black',
  //           }
  //         }
  //       },
  //       dim2: {
  //         id: uuid(),
  //         filename: '',
  //         style: {
  //           id: 'lpc',
  //           properties: {
  //             // animation
  //             animation: 'walk',
  //             direction: 'south',

  //             // body
  //             hair: null,
  //             ears: null,
  //             nose: null,
  //             facialHair: null,
  //             // clothes
  //             head: null,
  //             headAccesory: null,
  //             visor: null,
  //             torso: null,
  //             torso2: null,
  //             // arms: 'plate/arms',
  //             arms: null,
  //             back: null,
  //             legs: null,
  //             feet: null,
  //             // items
  //             rightHand: null,
  //             leftHand: null,
  //             bothHands: null,

  //           }
  //         }
  //       }
  //     }
  //   }
  // ])

  appearances$ = this.selectedAvatarState.avatar$.pipe(
    map((avatar) => (avatar ? avatar.appearances : [])),
    tap(
      (appearances) =>
        (this.selectedAppearance = this.selectedAppearance || appearances[0])
    )
  );

  selectedAppearance?: Appearance;

  carouselDisplayModes = AvatarAppearancesCarouselDisplayMode;

  loading = false;

  constructor(
    private manageAvatarAppearancesState: ManageAvatarAppearancesState,
    private selectedAvatarState: SelectedAvatarState
  ) {}

  onAppearanceClick(appearance: Appearance) {
    this.selectedAppearance = appearance;
  }

  onAppearanceAddClick() {
    this.selectedAppearance = {
      id: uuid(),
      portrait: {
        id: uuid(),
      },
    } as unknown as Appearance;
  }

  onPortraitChange(style: { id: string; properties: Record<string, string> }) {
    this.appearances$.pipe(
      take(1),
      switchMap((appearances) => {
        const appearance = appearances.find(
          (appearance) => this.selectedAppearance?.id === appearance.id
        );

        if (!appearance) {
          throw new Error('Appearance not found');
        }

        appearance.variations = appearance.variations || {};

        appearance.variations.portrait.style = style;

        return this.selectedAvatarState.updateAppearance(appearance);
      })
    ).subscribe;
  }

  onAppearanceSubmit(appearance: AvatarAppearanceEditorModel) {
    if (this.loading) {
      return;
    }

    const avatarId = this.selectedAvatarState.avatar$.value?.id;

    if (!avatarId) {
      return;
    }

    this.loading = true;

    this.manageAvatarAppearancesState
      .putAppearance(avatarId, appearance)
      .subscribe({
        complete: () => (this.loading = false),
        next: () => {
          this.selectedAppearance = undefined;
        },
      });
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onConfirmAppearancesButtonClick() {}
}
