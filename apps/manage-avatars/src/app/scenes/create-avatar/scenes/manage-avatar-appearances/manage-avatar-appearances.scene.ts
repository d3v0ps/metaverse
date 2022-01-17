import { Component } from '@angular/core';
import { userAvatars } from '@central-factory/avatars/data/mocks/user-avatars.data';
import { Appearance } from '@central-factory/avatars/models/appearance';
import { AvatarAppearancesCarouselDisplayMode } from '@central-factory/avatars/web-components/angular/avatar-appearances-carousel/avatar-appearances-carousel.component';

@Component({
  selector: 'cf-manage-avatar-appearances-scene',
  template: `
    <div cfBlock="scene-content" cfMod="manage-avatar-appearances">
      <div cfBlock="appearances-list" *ngIf="appearances.length > 0">
        <div cfElem="content">
          <cf-avatar-appearances-carousel
            [appearances]="appearances"
            [selectedAppearanceId]="selectedAppearance?.id"
            [showAdd]="true"
            [displayMode]="carouselDisplayModes.vertical"
            (appearanceClick)="onAppearanceClick($event)"
            (appearanceAddClick)="onAppearanceAddClick()"
          >
          </cf-avatar-appearances-carousel>
        </div>
        <div cfElem="footer">
          <div cfBlock="form-buttons">
            <button
              cfBlock="button"
              [cfMod]="['primary', 'full-width']"
              (click)="onConfirmAppearancesButtonClick()"
              [disabled]="appearances.length === 0"
            >
              Confirm appearances
            </button>
          </div>
        </div>
      </div>
      <div cfBlock="appearance-editor">
        <cf-avatar-appearance-editor
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
        grid-template-columns: 0.5fr 1fr;
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
        }
      }
    `,
  ],
})
export class ManageAvatarAppearancesScene {
  appearances: Appearance[] = userAvatars[0].appearances;
  selectedAppearance?: Partial<Appearance>;

  carouselDisplayModes = AvatarAppearancesCarouselDisplayMode;

  onAppearanceClick(appearance: Appearance) {
    this.selectedAppearance = appearance;
  }

  onAppearanceAddClick() {
    this.selectedAppearance = undefined;
  }

  onAppearanceSubmit(appearance: Appearance) {
    if (this.selectedAppearance) {
      this.selectedAppearance = appearance;
    } else {
      this.appearances = [...this.appearances, appearance];
    }
  }

  onConfirmAppearancesButtonClick() {
    console.log('Confirm appearances');
  }
}
