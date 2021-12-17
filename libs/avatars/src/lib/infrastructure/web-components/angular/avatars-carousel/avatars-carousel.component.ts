import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Avatar } from '../../../../domain/models/avatar';

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
  styles: [
    `
      .avatars-carousel {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 2rem;
      }

      .avatars-carousel-item {
        margin: 0.5rem;
        width: 144px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        &:hover {
          transform: scale(1.05);
          & > .avatars-carousel-item__image {
            border: 0.5rem solid var(--color-primary);
          }
          & > .avatars-carousel-item__name {
            color: var(--color-primary);
          }
        }

        &__image {
          width: 100%;
          height: auto;
          border-radius: 50%;
          margin-top: 15px;
        }

        &__name {
          font-size: 1.5rem;
          font-weight: bold;
          margin: 0.5rem 0;
          color: var(--color-light);
        }
      }
    `,
  ],
})
export class AvatarsCarouselComponent {
  @Input() avatars: Avatar[] = [];

  @Output() avatarClick = new EventEmitter<Avatar>();
}
