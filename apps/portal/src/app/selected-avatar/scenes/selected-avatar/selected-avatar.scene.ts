import { Component, Input } from '@angular/core';
import { Avatar } from '@central-factory/core';

@Component({
  selector: 'cf-selected-avatar',
  template: `
    <div block="scene-content">
      <div fxLayout="column" fxFlexFill>
        <div fxFlex="40">
          <cf-avatar-overview
            style="display: block; min-height: 200px;"
            [avatar]="avatar"
          ></cf-avatar-overview>
        </div>
        <div fxFlex="60">
          <div style="margin-bottom: 100px;">
            <cf-avatar-skills
              [skills]="{
                skills: avatar.skills
              }"
            ></cf-avatar-skills>
          </div>
          <div fxLayout="row" fxFlexFill>
            <div fxFlex="40">
              <cf-avatar-appearances
                [appearances]="{
                  appearances: avatar.appearances
                }"
              ></cf-avatar-appearances>
            </div>

            <div fxFlex="40">
              <cf-avatar-scopes
                [scopes]="{
                  scopes: avatar.scopes
                }"
              ></cf-avatar-scopes>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class SelectedAvatarScene {
  @Input() avatar: Avatar = {
    welcomeMessage: "Hi! I'm a developing avatar!",
    name: 'John',
    title: 'Software Engineer',
    selectedAppearance: {
      protocol: 'readyplayer.me',
      largePreviewUrl: 'assets/avatar-large.png',
      smallPreviewUrl: 'assets/avatar-144.png',
    },
    appearances: [
      {
        protocol: 'readyplayer.me',
        largePreviewUrl: 'assets/avatar-large.png',
        smallPreviewUrl: 'assets/avatar-144.png',
      },
      {
        protocol: 'Meta',
        largePreviewUrl: 'assets/avatar-large.png',
        smallPreviewUrl: 'assets/avatar-144.png',
      },
      {
        protocol: 'NVDIA Omniverse',
        largePreviewUrl: 'assets/avatar-large.png',
        smallPreviewUrl: 'assets/avatar-144.png',
      },
    ],
    scopes: [
      {
        integration: 'CF',
        domain: 'Calendars',
        scope: 'manage',
      },
      {
        integration: 'Google',
        domain: 'Calendars',
        scope: 'manage',
      },
      {
        integration: 'NFT',
        domain: 'Tokens',
        scope: 'manage',
      },
    ],
    skills: [
      {
        domain: 'calendar',
        scope: 'manage',
        skill: 'create',
      },
      {
        domain: 'event',
        scope: 'manage',
        skill: 'create',
      },
      {
        domain: 'assets',
        scope: 'manage',
        skill: 'trade',
      },
    ],
    physics: [],
    roles: [],
    routines: [],
  };
}
