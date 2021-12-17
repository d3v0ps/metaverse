import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Avatar } from '@central-factory/core';

/** Select Avatar scene */
@Component({
  selector: 'cf-select-avatar',
  template: `
    <div block="scene-content">
      <div block="select-avatar">
        <h2 elem="title">Select an Avatar</h2>
        <div elem="avatars-carousel">
          <cf-avatars-carousel
            [avatars]="avatars"
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
  @Input() avatars: Avatar[] = [
    {
      welcomeMessage: 'Hello!',
      name: 'John',
      title: 'Software Engineer',
      selectedAppearance: {
        format: 'readyplayer.me',
        src: 'assets/avatar-large.png',
        smallPreviewUrl: 'assets/avatar-144.png',
      },
      appearances: [],
      scopes: [],
      skills: [],
      physics: [],
      roles: [],
      routines: [],
    },
    {
      welcomeMessage: 'Hello!',
      name: 'John',
      title: 'Software Engineer',
      selectedAppearance: {
        format: 'readyplayer.me',
        src: 'assets/avatar-large.png',
        smallPreviewUrl: 'assets/avatar-144.png',
      },
      appearances: [],
      scopes: [],
      skills: [],
      physics: [],
      roles: [],
      routines: [],
    },
    {
      welcomeMessage: 'Hello!',
      name: 'John',
      title: 'Software Engineer',
      selectedAppearance: {
        format: 'readyplayer.me',
        src: 'assets/avatar-large.png',
        smallPreviewUrl: 'assets/avatar-144.png',
      },
      appearances: [],
      scopes: [],
      skills: [],
      physics: [],
      roles: [],
      routines: [],
    },
  ];

  constructor(private readonly router: Router) {}

  onAvatarClick(avatar: Avatar) {
    this.router.navigate(['/selected-avatar']);
  }

  onCreateAvatarClick() {
    this.router.navigate(['/create-avatar']);
  }
}
