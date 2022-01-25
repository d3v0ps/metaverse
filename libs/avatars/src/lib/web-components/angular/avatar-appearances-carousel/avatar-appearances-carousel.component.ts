import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Appearance } from '../../../models/appearance';

export enum AvatarAppearancesCarouselDisplayMode {
  horizontal = 'horizontal',
  vertical = 'vertical',
}

@Component({
  selector: 'cf-avatar-appearances-carousel',
  template: `
    <div cfBlock="avatar-appearances-carousel" [cfMod]="displayMode">
      <cf-avatar-appearance-card
        *ngIf="showAdd && reverse"
        emptyIcon="assets/icons/mdi/plus.svg"
        [showEmptyIcon]="true"
        (appearanceClick)="appearanceAddClick.emit()"
      >
      </cf-avatar-appearance-card>

      <ng-container *ngFor="let appearance of appearances">
        <cf-avatar-appearance-card
          [appearance]="appearance"
          [active]="appearance.id === selectedAppearanceId"
          (appearanceClick)="appearanceClick.emit(appearance)"
        >
        </cf-avatar-appearance-card>
      </ng-container>

      <cf-avatar-appearance-card
        *ngIf="showAdd && !reverse"
        emptyIcon="assets/icons/mdi/plus.svg"
        [showEmptyIcon]="true"
        (appearanceClick)="appearanceAddClick.emit()"
      >
      </cf-avatar-appearance-card>
    </div>
  `,
})
export class AvatarAppearancesCarouselComponent {
  @Input() appearances?: Appearance[];
  @Input() selectedAppearanceId?: string;
  @Input() displayMode: AvatarAppearancesCarouselDisplayMode =
    AvatarAppearancesCarouselDisplayMode.horizontal;
  @Input() showAdd = false;
  @Input() reverse = false;

  @Output() appearanceClick = new EventEmitter<Appearance>();
  @Output() appearanceAddClick = new EventEmitter();
}
