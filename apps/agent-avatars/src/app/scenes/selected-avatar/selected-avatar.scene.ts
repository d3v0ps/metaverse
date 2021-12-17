import { Component } from '@angular/core';
import { SelectedAvatarState } from '@central-factory/agent-avatars/states/selected-avatar/selected-avatar.state';
import { Avatar } from '@central-factory/avatars/domain/models/avatar';
import { Observable } from 'rxjs';

@Component({
  selector: 'cf-selected-avatar',
  template: `
    <ng-container
      *ngIf="{
        avatar: avatar$ | async
      } as data"
    >
      <div block="scene-content" *ngIf="data.avatar">
        <div fxLayout="column" fxFlexFill>
          <div fxFlex="40">
            <cf-avatar-overview
              style="display: block; min-height: 200px;"
              [avatar]="data.avatar"
            ></cf-avatar-overview>
          </div>
          <div fxFlex="60">
            <div style="margin-bottom: 100px;">
              <cf-avatar-skills
                [skills]="{
                  skills: data.avatar.skills
                }"
              ></cf-avatar-skills>
            </div>
            <div fxLayout="row" fxFlexFill>
              <div fxFlex="60">
                <cf-avatar-appearances
                  [appearances]="{
                    appearances: data.avatar.appearances
                  }"
                ></cf-avatar-appearances>
              </div>

              <div fxFlex="40">
                <cf-avatar-scopes
                  [scopes]="{
                    scopes: data.avatar.scopes
                  }"
                ></cf-avatar-scopes>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ng-container>
  `,
})
export class SelectedAvatarScene {
  avatar$: Observable<Avatar> = this.selectedAvatarState.avatar$;

  constructor(private selectedAvatarState: SelectedAvatarState) {}
}
