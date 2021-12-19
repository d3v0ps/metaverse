import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Avatar } from '../../../domain/models/avatar';

@Component({
  selector: 'cf-avatars-carousel',
  template: `
    <div block="avatars-carousel">
      <ng-container *ngFor="let avatar of avatars">
        <div block="avatars-carousel-item" (click)="avatarClick.emit(avatar)">
          <img
            elem="image"
            [src]="avatar.selectedAppearance.smallPreviewUrl"
          /><br />
          <h4 elem="name">{{ avatar.name }}</h4>
        </div>
      </ng-container>
    </div>
  `,
})
export class AvatarsCarouselComponent {
  @Input() avatars: Avatar[] = [];

  @Output() avatarClick = new EventEmitter<Avatar>();
}
