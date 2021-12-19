import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Avatar } from '@central-factory/avatars/domain/models/avatar';
import { Observable } from 'rxjs';
import { AvailableAvatarsState } from '../../states/available-avatars/available-avatars.state';
import { SelectedAvatarState } from '../../states/selected-avatar/selected-avatar.state';

/** Select Avatar scene */
@Component({
  selector: 'cf-select-avatar',
  template: `
    <ng-container
      *ngIf="{
        avatars: avatars$ | async
      } as data"
    >
      <div cfBlock="scene-content">
        <div cfBlock="select-avatar">
          <h2 cfElem="title" *ngIf="data.avatars && data.avatars.length > 0">
            Select an Avatar
          </h2>
          <div
            cfElem="avatars-carousel"
            *ngIf="data.avatars && data.avatars.length > 0"
          >
            <cf-avatars-carousel
              [avatars]="data.avatars"
              (avatarClick)="onAvatarClick($event)"
            ></cf-avatars-carousel>
          </div>
          <div cfElem="create-avatar">
            <button
              cfBlock="button"
              [cfMod]="['primary', 'big']"
              (click)="onCreateAvatarClick()"
            >
              Create a new Avatar
            </button>
          </div>
        </div>
      </div>
    </ng-container>
  `,
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
