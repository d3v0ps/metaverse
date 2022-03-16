import { Component, Input } from '@angular/core';
import { Avatar } from '@central-factory/avatars/models';
import { AvatarInfo } from '../avatar-info/avatar-info';

@Component({
  selector: 'cf-avatar-biography',
  template: `
    <div cfBlock="avatar-biography" *ngIf="avatar && biography">
      <h4 cfBlock="heading">
        {{ avatar.identity?.givenName || '????' }}
        {{ avatar.identity?.familyName || '????' }}
      </h4>
      <p cfElem="content">
        {{ avatar.identity?.givenName || '????' }}
        {{ avatar.identity?.familyName || '????' }} is
        {{
          biography.archetype.identity?.givenName?.startsWith('A')
            ? ' an '
            : ' a '
        }}
        {{ biography.archetype?.identity?.givenName || '????' }} located at
        <a
          href=""
          [ngStyle]="{
            color: coatOfArmsColors[biography.locationBurg.coa.t1],
            'border-color': coatOfArmsColors[biography.locationBurg.coa.t1]
          }"
        >
          <i cfBlock="icon">
            <img
              cfElem="image"
              *ngIf="biography.locationShield"
              [src]="biography.locationShield"
            />
          </i>
          {{ biography.locationBurg.name || '????' }} </a
        >.
      </p>
    </div>
  `,
  styles: [
    `
      .avatar-biography {
        display: flex;
        flex-wrap: wrap;
        overflow: auto;

        &__content {
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

        > *:nth-child(1) {
          flex: 1 1 60%;
          min-width: 30ch;
        }

        > *:nth-child(2) {
          flex: 1 1 40%;
          min-width: 25ch;
          gap: 1rem;
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
}
