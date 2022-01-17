import { Component, Input } from '@angular/core';
import type { Appearance } from '../../../models/appearance';

@Component({
  selector: 'cf-avatar-appearances',
  template: `
    <div cfBlock="avatar-appearances">
      <h2>Appearances</h2>

      <cf-avatar-appearances-carousel
        [appearances]="appearances"
        [showAdd]="true"
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
}
