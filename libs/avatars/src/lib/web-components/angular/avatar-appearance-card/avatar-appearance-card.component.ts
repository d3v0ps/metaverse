import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Appearance } from '../../../models/appearance';

@Component({
  selector: 'cf-avatar-appearance-card',
  template: `
    <div
      class="card"
      cfBlock="appearance-card"
      [cfMod]="{
        active: active,
        empty: !appearance
      }"
      (click)="appearanceClick.emit(appearance)"
    >
      <ng-container *ngIf="!appearance && showEmptyIcon">
        <cf-svg-icon
          [src]="emptyIcon"
          cfElem="icon"
          [svgClass]="'icon__svg'"
        ></cf-svg-icon>
      </ng-container>

      <ng-container *ngIf="appearance">
        <cf-avatar-appearance-preview
          [width]="width"
          [height]="height"
          [appearance]="appearance"
        ></cf-avatar-appearance-preview>
      </ng-container>
    </div>
  `,
})
export class AvatarAppearanceCardComponent {
  @Input() appearance?: Appearance;
  @Input() active?: boolean;
  @Input() showEmptyIcon = false;
  @Input() emptyIcon = 'assets/icons/mdi/account-question.svg';

  @Input() width = '100%';
  @Input() height = '300px';

  @Output() appearanceClick = new EventEmitter<Appearance>();
}
