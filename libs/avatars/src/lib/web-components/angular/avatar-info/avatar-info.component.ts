import { Component, Input } from '@angular/core';
import { professions } from '@central-factory/avatars/data/demo/professions.data';
import { mapAvatarToAvatarInfo } from '@central-factory/avatars/mappers/avatar-to-avatar-info.mapper';
import {
  Avatar,
  Profession,
} from '@central-factory/avatars/__generated__/models';
import { World } from '@central-factory/worlds/__generated__/models';
import { AvatarInfo } from '../../../models/avatar-info';

@Component({
  selector: 'cf-avatar-info',
  template: `
    <div cfBlock="avatar-info" *ngIf="avatar && info">
      <section cfElem="main-content">
        <div cfElem="heading">
          <div cfElem="appearances">
            <cf-tabset>
              <cf-tab title="Portrait">
                <cf-avatar-appearance-portrait
                  [avatar]="avatar"
                  displayComponent="avataaars"
                ></cf-avatar-appearance-portrait>
              </cf-tab>
              <cf-tab title="Pixel">
                <cf-avatar-appearance-portrait
                  [avatar]="avatar"
                  displayComponent="lpc"
                ></cf-avatar-appearance-portrait>
              </cf-tab>
            </cf-tabset>
          </div>
          <div cfBlock="name">
            <cf-typography type="h5" [bold]="true">
              {{ avatar.identity?.givenName || '????' }}
              {{ avatar.identity?.familyName || '????' }}
            </cf-typography>

            <section>
              <cf-typography type="h5" [bold]="true">
                <cf-svg-icon
                  src="assets/icons/mdi/map-marker.svg"
                ></cf-svg-icon>
                <span
                  [ngStyle]="{
                    color: coatOfArmsColor,
                    cursor: 'pointer'
                  }"
                  >{{ info.currentPlace?.name }}</span
                >
                <i cfBlock="icon" *ngIf="info.currentPlaceShield">
                  <img
                    cfElem="image"
                    *ngIf="info.currentPlaceShield"
                    [src]="info.currentPlaceShield"
                  />
                </i>
              </cf-typography>
            </section>
            <section *ngIf="avatar.identity?.birthDate as birthDate">
              <cf-typography type="h5" [bold]="true" [cfPopover]="colorPopover">
                <cf-svg-icon src="assets/icons/mdi/cake.svg"></cf-svg-icon>
                {{ birthDate | cfAge }}
              </cf-typography>
            </section>
            <section style="flex-direction: row; justify-content: flex-start;">
              <cf-typography
                type="h5"
                [bold]="true"
                [ngStyle]="{
                  color: info.culture.color,
                  cursor: 'pointer'
                }"
              >
                <cf-svg-icon [src]="info.cultureIcon"> </cf-svg-icon>
              </cf-typography>
              <cf-avatar-gender [gender]="avatar.identity?.gender">
              </cf-avatar-gender>
            </section>
          </div>
          <div cfBlock="biography">
            <cf-avatar-biography
              [avatar]="avatar"
              [biography]="info"
            ></cf-avatar-biography>
          </div>
        </div>

        <div cfElem="basic-info">
          <div>
            <p *ngIf="info.archetype">
              <cf-svg-icon src="assets/icons/mdi/account.svg"></cf-svg-icon>
              Archetype:
              <strong>
                <cf-svg-icon
                  cfElem="icon"
                  *ngIf="info.archetype?.identity?.icon as icon"
                  [src]="icon"
                ></cf-svg-icon>
                {{ info.archetype?.identity?.givenName }}
              </strong>
            </p>
            <section style="flex-direction: row;">
              <cf-avatar-beliefs
                [beliefs]="info.beliefs"
                [ngStyle]="{
                  width: '50%'
                }"
              ></cf-avatar-beliefs>
              <cf-avatar-professions
                *ngIf="professions.length > 0"
                [professions]="professions"
                [ngStyle]="{
                  display: 'inline-block',
                  cursor: 'pointer',
                  width: '50%'
                }"
              >
                ></cf-avatar-professions
              >
            </section>
          </div>
        </div>
      </section>

      <div cfElem="related-content">
        <div cfElem="parents" *ngIf="info.parents && info.parents.length > 0">
          <h5>Parents</h5>
          <cf-avatars-carousel
            [avatars]="info.parents"
            [world]="world"
            (avatarClick)="avatar = $event"
            size="small"
          ></cf-avatars-carousel>
        </div>

        <div
          cfElem="partners"
          *ngIf="info.partners && info.partners.length > 0"
        >
          <h5>Partners</h5>
          <cf-avatars-carousel
            [avatars]="info.partners"
            [world]="world"
            (avatarClick)="avatar = $event"
            size="small"
          ></cf-avatars-carousel>
        </div>

        <div
          cfElem="children"
          *ngIf="info.children && info.children.length > 0"
        >
          <h5>Children</h5>
          <cf-avatars-carousel
            [avatars]="info.children"
            [world]="world"
            (avatarClick)="avatar = $event"
            size="small"
          ></cf-avatars-carousel>
        </div>
      </div>
    </div>

    <cf-popover-content #colorPopover [closeOnClickOutside]="true">
      <cf-typography
        type="h5"
        [bold]="true"
        *ngIf="info && avatar?.identity?.birthDate as birthDate"
      >
        (born at
        {{ birthDate | cfDate | date: 'mediumDate' }}
        <i cfBlock="icon">
          <img
            cfElem="image"
            *ngIf="info.birthPlaceShield"
            [src]="info.birthPlaceShield"
          />
        </i>
        {{ info.birthPlace?.name }}
        )
      </cf-typography>
    </cf-popover-content>
  `,
})
export class AvatarInfoComponent {
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

  @Input() set avatar(value: Avatar | undefined) {
    this._avatar = value;

    if (this.avatar && this.world) {
      this.info = this.generateInfo(this.avatar, this.world);
    }
  }
  get avatar() {
    return this._avatar;
  }

  @Input() set world(value: World | undefined) {
    this._world = value;

    if (this.avatar && this.world) {
      this.info = this.generateInfo(this.avatar, this.world);
    }
  }
  get world() {
    return this._world;
  }

  get professions(): Profession[] {
    const professions: Profession[] = [];

    if (this.info?.professions?.main) {
      professions.push(this.info.professions.main);
    }

    if (this.info?.professions?.secondary) {
      professions.push(this.info.professions.secondary);
    }

    return professions;
  }

  info?: AvatarInfo;

  private _avatar: Avatar | undefined;
  private _world: World | undefined;

  private generateInfo(avatar: Avatar, world: World): AvatarInfo {
    const {
      cultures,
      religions,
      burgs = [],
    } = world.map?.cells || {
      religions: [],
      cultures: [],
    };
    const avatars = world.avatars || [];
    const archetypes = world.archetypes || [];

    return mapAvatarToAvatarInfo(avatar, {
      cultures,
      places: burgs,
      beliefs: religions,
      avatars,
      archetypes,
      professions,
      cultureNameBases: world.map?.nameBases || [],
    });
  }

  get locationName() {
    return this.info?.currentPlace?.name || '????';
  }

  get coatOfArmsColor() {
    return (
      (this.info?.currentPlace?.coa?.t1 &&
        this.coatOfArmsColors[this.info.currentPlace.coa.t1]) ||
      '#f0f0f0'
    );
  }
}
