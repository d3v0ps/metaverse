import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AvailableAvatarsState } from '@central-factory/agent-avatars/states/available-avatars/available-avatars.state';
import { SelectedAvatarState } from '@central-factory/agent-avatars/states/selected-avatar/selected-avatar.state';
import { Avatar } from '@central-factory/avatars/domain/models/avatar';
import { Observable } from 'rxjs';

/** Select Avatar scene */
@Component({
  selector: 'cf-select-avatar',
  template: `
    <ng-container
      *ngIf="{
        avatars: avatars$ | async
      } as data"
    >
      <div block="scene-content">
        <div block="select-avatar">
          <h2 elem="title" *ngIf="data.avatars && data.avatars.length > 0">
            Select an Avatar
          </h2>
          <div
            elem="avatars-carousel"
            *ngIf="data.avatars && data.avatars.length > 0"
          >
            <cf-avatars-carousel
              [avatars]="data.avatars"
              (avatarClick)="onAvatarClick($event)"
            ></cf-avatars-carousel>
          </div>
          <div elem="create-avatar">
            <button
              block="button"
              [mod]="['primary', 'big']"
              (click)="onCreateAvatarClick()"
            >
              Create a new Avatar
            </button>
          </div>
        </div>
      </div>
    </ng-container>
  `,
  styles: [
    `
      .select-avatar {
        display: flex;
        height: 80vh;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        &__title {
          font-size: 2.5rem;
          margin: 0;
        }

        &__avatars-carousel {
          margin: 2rem 0;
        }
      }
    `,
  ],
})
export class SelectAvatarScene {
  avatars$: Observable<Avatar[]> = this.availableAvatarsState.avatars$;

  constructor(
    private readonly router: Router,
    private readonly availableAvatarsState: AvailableAvatarsState,
    private readonly selectedAvatarState: SelectedAvatarState
  ) {}

  onAvatarClick(avatar: Avatar) {
    this.selectedAvatarState.selectAvatar(avatar);
    this.router.navigate(['/selected-avatar']);
  }

  onCreateAvatarClick() {
    this.router.navigate(['/create-avatar']);
  }
}
