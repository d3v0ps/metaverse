import { Component, Input } from '@angular/core';
import { Avatar } from '@central-factory/avatars/models';
import { AvatarInfo } from '../../../models/avatar-info';

@Component({
  selector: 'cf-avatar-biography',
  template: `
    <div cfBlock="avatar-biography" *ngIf="avatar && biography">
      <cf-typography type="p">
        {{ avatar.identity?.givenName || '????' }}
        {{ avatar.identity?.familyName || '????' }}
        <ng-container *ngIf="biography.archetype">
          is
          {{
            biography.archetype?.identity?.givenName?.startsWith('A')
              ? ' an '
              : ' a '
          }}
          {{ biography.archetype?.identity?.givenName || '????' }}
        </ng-container>
        <ng-container *ngIf="biography.currentPlace">
          {{ !biography.archetype ? 'is ' : '' }}
          located at
          <a
            href=""
            [ngStyle]="{
              color: coatOfArmsColor,
              'border-color': coatOfArmsColor
            }"
          >
            <i cfBlock="icon">
              <img
                cfElem="image"
                *ngIf="biography.currentPlaceShield"
                [src]="biography.currentPlaceShield"
              />
            </i>
            {{ locationName }}
          </a> </ng-container
        >.
      </cf-typography>
    </div>
  `,
  styles: [
    `
      .avatar-biography {
        display: flex;
        flex-wrap: wrap;
        overflow: auto;

        &__content,
        .heading {
          white-space: break-spaces;
          a {
            font-weight: 700;
            hover: {
              padding-bottom: 0.2rem;
              border-bottom: 2px solid var(--color-base-secondary-medium);
            }
          }
        }

        > * {
          height: 100%;
        }
      }
    `,
  ],
})
export class AvatarBiographyComponent {
  coatOfArmsColors: Record<string, string> = {
    argent: '#f0f0f0',
    or: '#fadc6a',
    gules: '#d13e50',
    azure: '#3f7dcf',
    sable: '#3c3c3c',
    purpure: '#57375f',
    vert: '#2fbe66',
    murrey: '#85235e',
    sanguine: '#b14241',
    tenn: '#c37f24',
  };

  @Input() avatar?: Avatar;

  @Input() biography?: AvatarInfo;

  get locationName() {
    return this.biography?.currentPlace?.name || '????';
  }

  get coatOfArmsColor() {
    return (
      (this.biography?.currentPlace?.coa?.t1 &&
        this.coatOfArmsColors[this.biography.currentPlace.coa.t1]) ||
      '#f0f0f0'
    );
  }
}
