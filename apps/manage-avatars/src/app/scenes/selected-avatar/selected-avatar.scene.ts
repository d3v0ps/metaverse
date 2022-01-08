import { Component } from '@angular/core';
import type { Avatar } from '@central-factory/avatars/models/avatar';
import { SelectedAvatarState } from '@central-factory/avatars/states/selected-avatar.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'cf-selected-avatar',
  template: `
    <ng-container
      *ngIf="{
        avatar: avatar$ | async
      } as data"
    >
      <div cfBlock="scene-content" *ngIf="data.avatar">
        <div fxLayout="column" fxFlexFill style="overflow: auto">
          <div fxFlex="10">
            <cf-avatar-overview
              style="display: block; min-height: 200px;"
              [avatar]="data.avatar"
            ></cf-avatar-overview>
          </div>
          <div fxFlex="90">
            <div style="margin-bottom: 100px;">
              <!-- cf-avatar-skills
                [skills]="data.avatar.skills"
              ></cf-avatar-skills -->
            </div>
            <div fxLayout="row" fxFlexFill>
              <div fxFlex="60">
                <cf-avatar-appearances
                  [appearances]="data.avatar.appearances"
                ></cf-avatar-appearances>
              </div>

              <div fxFlex="40">
                <!-- cf-avatar-scopes
                  [scopes]="data.avatar.scopes"
                ></cf-avatar-scopes-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </ng-container>
  `,
})
export class SelectedAvatarScene {
  public readonly avatar$: Observable<Avatar | undefined> =
    this.selectedAvatarState.avatar$;

  constructor(private readonly selectedAvatarState: SelectedAvatarState) {}
}
