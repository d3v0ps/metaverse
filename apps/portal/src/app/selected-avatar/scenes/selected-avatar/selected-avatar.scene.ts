import { Component } from '@angular/core';
import { FormArray, FormGroup } from '@ng-stack/forms';
import { Scope } from '../../models/scope';

@Component({
  selector: 'cf-selected-avatar',
  template: `
    <div block="scene-content">
      <div fxLayout="column" fxFlexFill>
        <div fxFlex="40">
          <cf-avatar-overview
            style="display: block; min-height: 200px;"
            [avatar]="avatarOverviewInput"
          ></cf-avatar-overview>
        </div>
        <div fxFlex="60">
          <cf-avatar-appearances
            [appearances]="avatarAppearancesInput"
          ></cf-avatar-appearances>

          <cf-avatar-scopes [scopes]="avatarScopesInput"></cf-avatar-scopes>

          <cf-avatar-skills [skills]="avatarSkillsInput"></cf-avatar-skills>
        </div>
      </div>
    </div>
  `,
})
export class SelectedAvatarScene {
  avatarOverviewInput = {
    welcomeMessage: "Hi! I'm a developing avatar!",
    name: 'John',
    title: 'Software Engineer',
    smallPreviewUrl: 'assets/avatar-144.png',
  };

  avatarAppearancesInput = {
    appearances: [
      {
        protocol: 'readyplayer.me',
        largePreviewUrl: 'assets/avatar-large.png',
        smallPreviewUrl: 'assets/avatar-144.png',
      },
      {
        protocol: 'readyplayer.one',
        largePreviewUrl: 'assets/avatar-large.png',
        smallPreviewUrl: 'assets/avatar-144.png',
      },
      {
        protocol: 'readyplayer.two',
        largePreviewUrl: 'assets/avatar-large.png',
        smallPreviewUrl: 'assets/avatar-144.png',
      },
    ],
  };

  avatarScopesInput = {
    scopes: [
      {
        integration: 'CF',
        domain: 'Calendar',
        scope: 'manage',
      },
      {
        integration: 'Google',
        domain: 'Calendar',
        scope: 'manage',
      },
    ],
  };

  avatarSkillsInput = {
    skills: [
      {
        domain: 'Calendar',
        scope: 'manage',
        skill: 'create-calendar',
      },
    ],
  };

  selectedAvatarForm = new FormGroup<any>({
    // physics: new FormArray<any>([]),
    // roles: new FormArray<any>([]),
    // routines: new FormArray<any>([]),
  });

  get physics() {
    return this.selectedAvatarForm.controls.physics as FormArray<any>;
  }

  get roles() {
    return this.selectedAvatarForm.controls.roles as FormArray<any>;
  }

  get routines() {
    return this.selectedAvatarForm.controls.routines as FormArray<any>;
  }

  get scopes() {
    return this.selectedAvatarForm.controls.scopes as FormArray<Scope>;
  }
}
