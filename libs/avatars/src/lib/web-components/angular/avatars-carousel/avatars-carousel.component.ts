import { Component, EventEmitter, Input, Output } from '@angular/core';
import type { Avatar } from '../../../models/avatar';

@Component({
  selector: 'cf-avatars-carousel',
  template: `
    <div cfBlock="avatars-carousel">
      <ng-container *ngFor="let avatar of avatars">
        <div cfBlock="avatars-carousel-item" (click)="avatarClick.emit(avatar)">
          <img
            cfElem="image"
            [src]="avatar.selectedAppearance.smallPreviewUrl"
          /><br />
          <h4 cfElem="name">{{ avatar.name }}</h4>
        </div>
      </ng-container>
    </div>
  `,
})
export class AvatarsCarouselComponent {
  @Input() avatars: Avatar[] = [];

  @Output() avatarClick = new EventEmitter<Avatar>();
}
