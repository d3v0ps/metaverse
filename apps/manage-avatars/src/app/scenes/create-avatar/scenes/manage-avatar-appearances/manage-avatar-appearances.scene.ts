import { Component } from '@angular/core';
import { Appearance } from '@central-factory/avatars/models/appearance';
import { ManageAvatarAppearancesState } from '@central-factory/avatars/states/manage-avatar-appearances.state';
import { SelectedAvatarState } from '@central-factory/avatars/states/selected-avatar.state';
import { AvatarAppearanceEditorModel } from '@central-factory/avatars/web-components/angular/avatar-appearance-editor/avatar-appearance-editor.component';
import { AvatarAppearancesCarouselDisplayMode } from '@central-factory/avatars/web-components/angular/avatar-appearances-carousel/avatar-appearances-carousel.component';
import { map, tap } from 'rxjs';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'cf-manage-avatar-appearances-scene',
  template: `
    <div
      cfBlock="scene-content"
      cfMod="manage-avatar-appearances"
      *ngIf="appearances$ | async as appearances"
    >
      <div cfBlock="appearances-list" *ngIf="appearances.length > 0">
        <div cfElem="content">
          <cf-avatar-appearances-carousel
            [appearances]="appearances"
            [selectedAppearanceId]="selectedAppearance?.id"
            [displayMode]="carouselDisplayModes.vertical"
            [showAdd]="true"
            (appearanceClick)="onAppearanceClick($event)"
            (appearanceAddClick)="onAppearanceAddClick()"
          >
          </cf-avatar-appearances-carousel>
        </div>
        <div cfElem="footer">
          <div cfBlock="form-buttons">
            <!-- button
              cfBlock="button"
              [cfMod]="['primary', 'has-icon']"
              (click)="onAppearanceAddClick()"
            >
              <cf-svg-icon elem="icon" src="assets/icons/mdi/account-plus.svg">
              </cf-svg-icon>
              <span elem="label">Add a new appearance</span>
            </button -->
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
        </div>
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
        ></cf-avatar-appearance-editor>
      </div>
    </div>
  `,
  styles: [
    `
      .scene-content--manage-avatar-appearances {
        display: grid;
        grid-template-columns: 20% 80%;
        grid-template-rows: 1fr;
        gap: 1rem;

        .appearances-list {
          padding-top: 0.75rem;
          display: flex;
          flex-direction: column;
          overflow: auto;

          &__content {
            overflow: auto;
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
  appearances$ = this.selectedAvatarState.avatar$.pipe(
    map((avatar) => (avatar ? avatar.appearances : [])),
    tap(appearances => this.selectedAppearance = this.selectedAppearance || appearances[0])
  );
  selectedAppearance?: Appearance;

  carouselDisplayModes = AvatarAppearancesCarouselDisplayMode;

  loading = false;

  constructor(
    private manageAvatarAppearancesState: ManageAvatarAppearancesState,
    private selectedAvatarState: SelectedAvatarState
  ) { }

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
  onConfirmAppearancesButtonClick() { }
}
