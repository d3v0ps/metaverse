import { Component, Input } from '@angular/core';
import { AppearancePortrait } from '../../../models/appearance';

@Component({
  selector: 'cf-avatar-appearance-portrait',
  template: `
    <div cfBlock="avatar-appearance-portrait">
      <img
        cfElem="image"
        *ngIf="appearancePortrait"
        [src]="appearancePortrait.src"
      />
      <cf-svg-icon
        *ngIf="!appearancePortrait && showEmptyIcon"
        src="assets/icons/mdi/head-question.svg"
      ></cf-svg-icon>
    </div>
  `,
})
export class AvatarAppearancePortraitComponent {
  @Input() appearancePortrait?: AppearancePortrait;
  @Input() showEmptyIcon = false;
}
