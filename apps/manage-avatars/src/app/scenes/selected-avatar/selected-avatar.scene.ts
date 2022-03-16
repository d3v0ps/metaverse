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
        <cf-avatar-overview [avatar]="data.avatar"></cf-avatar-overview>

        <p *ngIf="data.avatar.identity?.bio">
          {{ data.avatar.identity?.bio }}
        </p>

        <cf-avatar-appearances
          [appearances]="data.avatar.appearances"
          (appearanceClick)="onAppearanceClick($event)"
          (appearanceAddClick)="onAppearanceAddClick()"
        ></cf-avatar-appearances>
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
  ) {}

  onAppearanceClick(appearance: Appearance) {
    this.selectedAvatarState.selectOutfit(appearance).subscribe();
  }

  onAppearanceAddClick() {
    this.router.navigate(['/create-avatar']);
  }
}
