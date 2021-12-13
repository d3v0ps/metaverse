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
            <div fxFlex="60">
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
      format: 'readyplayer.me',
      src: 'assets/avatar-large.png',
      smallPreviewUrl: 'assets/avatar-144.png',
    },
    appearances: [
      {
        format: 'gltf',
        src: 'assets/avatars/samples/ed4aa425-9e13-4e51-9f2c-557dfe0db7ab/ed4aa425-9e13-4e51-9f2c-557dfe0db7ab.glb',
        smallPreviewUrl: 'assets/avatar-144.png',
        previewCamera: {
          position: '0 1.5 0.7',
          rotation: '-5 0 0',
          scale: '0.4 0.4 0.4',
        },
      },
      {
        format: 'gltf',
        src: 'assets/avatars/samples/65989f77-c8bf-4542-9e8a-d0f39eb76662/65989f77-c8bf-4542-9e8a-d0f39eb76662.glb',
        smallPreviewUrl: 'assets/avatar-144.png',
        previewCamera: {
          position: '0 1.5 0.7',
          rotation: '-5 0 0',
          scale: '1 1 1',
        },
      },
      // {
      //   format: 'readyplayer.me',
      //   src: 'assets/avatar-large.png',
      //   smallPreviewUrl: 'assets/avatar-144.png',
      // },
      // {
      //   format: 'Meta',
      //   src: 'assets/avatar-large.png',
      //   smallPreviewUrl: 'assets/avatar-144.png',
      // },
      // {
      //   format: 'NVDIA Omniverse',
      //   src: 'assets/avatar-large.png',
      //   smallPreviewUrl: 'assets/avatar-144.png',
      // },
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
