import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AvailableAvatarsState } from '@central-factory/avatars/states/available-avatars.state';
import { SelectedAvatarState } from '@central-factory/avatars/states/selected-avatar.state';
import type { Avatar } from '@central-factory/avatars/__generated__/models';
import { Observable, tap } from 'rxjs';

/** Select Avatar scene */
@Component({
  selector: 'cf-select-avatar',
  template: `
    <ng-container
      *ngIf="{
        avatars: avatars$ | async
      } as data"
    >
      <div cfBlock="scene-content" cfMod="select-avatar">
        <div cfBlock="select-avatar">
          <h2 cfElem="title" *ngIf="data.avatars && data.avatars.length > 0">
            Enter The World
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
          <!-- div cfElem="create-avatar">
            <button
              cfBlock="button"
              [cfMod]="['primary']"
              (click)="onCreateAvatarClick()"
            >
              Create a new Avatar
            </button>
          </div -->
        </div>
      </div>
    </ng-container>
  `,
  styles: [
    `
      .scene-content {
        &--select-avatar {
          margin-top: 20vh;
          height: 60vh;
        }
      }
    `,
  ],
})
export class SelectAvatarScene {
  public readonly avatars$: Observable<Avatar[]> =
    this.availableAvatarsState.avatars$;

  constructor(
    private readonly router: Router,
    private readonly selectedAvatarState: SelectedAvatarState,
    private readonly availableAvatarsState: AvailableAvatarsState
  ) {}

  public onAvatarClick(avatar: Avatar) {
    this.selectedAvatarState
      .selectAvatar(avatar)
      .pipe(tap(() => this.router.navigate(['/start'])))
      .subscribe();
  }

  public onCreateAvatarClick() {
    this.router.navigate(['/create-avatar']);
  }
}
