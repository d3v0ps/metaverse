import { Component, Input } from '@angular/core';
import { Appearance } from '../../../models/appearance';

@Component({
  selector: 'cf-avatar-appearance-portrait',
  template: `
    <div cfBlock="avatar-appearance-portrait">
      <img cfElem="image" *ngIf="appearance" [src]="appearance.portrait.src" />
      <cf-svg-icon
        *ngIf="!appearance && showEmptyIcon"
        src="assets/icons/mdi/head-question.svg"
      ></cf-svg-icon>
    </div>
  `,
})
export class AvatarAppearancePortraitComponent {
  @Input() appearance?: Appearance;
  @Input() showEmptyIcon = true;
}
