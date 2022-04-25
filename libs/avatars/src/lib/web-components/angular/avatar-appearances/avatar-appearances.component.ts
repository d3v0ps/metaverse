import { Component, EventEmitter, Input, Output } from '@angular/core';
import type { Appearance } from '../../../models/appearance';

@Component({
  selector: 'cf-avatar-appearances',
  template: `
    <div cfBlock="avatar-appearances">
      <h2>Appearances</h2>

      <cf-avatar-appearances-carousel
        [selectedAppearanceId]="selectedAppearanceId"
        [appearances]="appearances"
        [showAdd]="true"
        (appearanceClick)="appearanceClick.emit($event)"
        (appearanceAddClick)="appearanceAddClick.emit()"
      >
      </cf-avatar-appearances-carousel>
    </div>
  `,
  styles: [
    `
      .avatar-appearances {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
    `,
  ],
})
export class AvatarAppearancesComponent {
  @Input() appearances?: Appearance[];
  @Input() selectedAppearanceId?: string;

  @Output() appearanceClick = new EventEmitter<Appearance>();
  @Output() appearanceAddClick = new EventEmitter<Appearance>();
}
