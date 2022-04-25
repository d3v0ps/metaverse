import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AvatarProfession, World } from '@central-factory/worlds/models/world';
import type { Avatar } from '../../../models/avatar';

@Component({
  selector: 'cf-avatars-carousel',
  template: `
    <div
      cfBlock="avatars-carousel"
      cfMod="direction-{{ direction }} {{ size }}"
    >
      <ng-container *ngFor="let avatar of avatars">
        <div
          *ngIf="avatar"
          cfBlock="avatars-carousel-item"
          (click)="avatarClick.emit(avatar)"
          [cfMod]="size"
        >
          <cf-avatar-appearance-portrait
            [displayComponent]="'avataaars'"
            [avatar]="avatar"
          >
          </cf-avatar-appearance-portrait>
          <br />
          <h4 cfBlock="heading">
            {{ avatar.identity?.givenName }} {{ avatar.identity?.familyName }}
          </h4>
          <p cfBlock="text">
            <cf-svg-icon
              cfElem="icon"
              [src]="
                'assets/icons/mdi/gender-' +
                avatar.appearance?.body?.type?.toLowerCase() +
                '.svg'
              "
            ></cf-svg-icon>
            <strong
              *ngIf="avatar.identity?.mainProfession as mainProfession"
              [ngStyle]="{
                color: professions[mainProfession]
                  ? professions[mainProfession].color
                  : '#fff'
              }"
            >
              <cf-svg-icon
                cfElem="icon"
                *ngIf="
                  professions[mainProfession] &&
                  professions[mainProfession].icon as icon
                "
                [src]="icon"
              ></cf-svg-icon>
            </strong>
            <strong
              *ngIf="
                avatar.identity?.secondaryProfession as secondaryProfession
              "
              [ngStyle]="{
                color: professions[secondaryProfession]
                  ? professions[secondaryProfession].color
                  : '#fff'
              }"
            >
              <cf-svg-icon
                cfElem="icon"
                *ngIf="
                  professions[secondaryProfession] &&
                  professions[secondaryProfession].icon as icon
                "
                [src]="icon"
              ></cf-svg-icon>
            </strong>
          </p>
        </div>
      </ng-container>
    </div>
  `,
})
export class AvatarsCarouselComponent {
  @Input() avatars: Avatar[] = [];
  @Input() world?: World;
  @Input() variation?: 'portrait';
  @Input() direction: 'column' | 'row' = 'row';

  @Input() displayComponent: 'avataaars' | 'lpc' = 'avataaars';
  @Input() size = '';

  @Output() avatarClick = new EventEmitter<Avatar>();

  get professions(): Record<string, AvatarProfession> {
    return (
      this.world?.professions?.reduce(
        (acc, profession) => ({
          ...acc,
          [profession.id]: profession,
        }),
        {}
      ) || {}
    );
  }
}
