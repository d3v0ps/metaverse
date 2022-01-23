import { Component, EventEmitter, Input, Output } from '@angular/core';
import type { Avatar } from '../../../models/avatar';

@Component({
  selector: 'cf-avatars-carousel',
  template: `
    <div cfBlock="avatars-carousel">
      <ng-container *ngFor="let avatar of avatars">
        <div cfBlock="avatars-carousel-item" (click)="avatarClick.emit(avatar)">
          <cf-avatar-appearance-portrait
            [appearancePortrait]="avatar.selectedAppearance?.portrait"
          >
          </cf-avatar-appearance-portrait>
          <br />
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
