import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Appearance } from '@central-factory/avatars/models/appearance';
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
        <cf-avatar-overview
          [avatar]="data.avatar"
        ></cf-avatar-overview>

        <p *ngIf="data.avatar.bio">
          {{ data.avatar.bio }}
        </p>

        <!-- cf-avatar-skills
            [skills]="data.avatar.skills"
          ></cf-avatar-skills -->

        <cf-avatar-appearances
          [appearances]="data.avatar.appearances"
          [selectedAppearanceId]="data.avatar.selectedAppearance?.id"
          (appearanceClick)="onAppearanceClick($event)"
          (appearanceAddClick)="onAppearanceAddClick()"
        ></cf-avatar-appearances>

        <!-- cf-avatar-scopes
            [scopes]="data.avatar.scopes"
          ></cf-avatar-scopes-->
      </div>
    </ng-container>
  `,
})
export class SelectedAvatarScene {
  public readonly avatar$: Observable<Avatar | undefined> =
    this.selectedAvatarState.avatar$;

  constructor(
    private readonly selectedAvatarState: SelectedAvatarState,
    private readonly router: Router
  ) { }

  onAppearanceClick(appearance: Appearance) {
    this.selectedAvatarState.selectAppearance(appearance).subscribe();
  }

  onAppearanceAddClick() {
    this.router.navigate(['/create-avatar']);
  }
}
