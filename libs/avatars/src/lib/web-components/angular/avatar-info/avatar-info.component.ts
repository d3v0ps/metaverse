import { Component, Input } from '@angular/core';
import {
  Avatar,
  AvatarRelationship,
  AvatarRelationshipKind,
} from '@central-factory/avatars/models';
import { AvatarProfession, World } from '@central-factory/worlds/models/world';

@Component({
  selector: 'cf-avatar-info',
  template: `
    <div cfBlock="avatar-info" class="clay" *ngIf="avatar">
      <div cfElem="main-content">
        <div cfElem="appearances">
          <cf-avatar-appearance-portrait
            [avatar]="avatar"
            displayComponent="avataaars"
          ></cf-avatar-appearance-portrait>
        </div>

        <h4 cfBlock="heading">
          {{ avatar.identity?.givenName }} {{ avatar.identity?.familyName }}
        </h4>

        <div cfElem="basic-info">
          <div>
            <p *ngIf="avatar.identity?.archetype as archetype">
              <cf-svg-icon src="assets/icons/mdi/account.svg"></cf-svg-icon>
              Archetype:
              <cf-svg-icon
                cfElem="icon"
                *ngIf="archetypes[archetype].identity?.icon as icon"
                [src]="icon"
              ></cf-svg-icon>
              {{ archetypes[archetype].identity?.givenName }}
            </p>
            <p>
              <cf-svg-icon
                src="assets/icons/mdi/gender-male-female.svg"
              ></cf-svg-icon>
              Gender:
              <strong>
                <cf-svg-icon
                  cfElem="icon"
                  [src]="
                    'assets/icons/mdi/gender-' +
                    avatar.appearance?.body?.type?.toLowerCase() +
                    '.svg'
                  "
                ></cf-svg-icon>
              </strong>
              {{ avatar.appearance?.body?.type }}
            </p>
            <p>
              <cf-svg-icon
                src="assets/icons/mdi/account-group.svg"
              ></cf-svg-icon>
              Culture:
              <span [ngStyle]="{ color: culture?.color }">{{
                culture?.name
              }}</span>
            </p>
            <p>
              <cf-svg-icon src="assets/icons/mdi/cross.svg"></cf-svg-icon>
              Religion:
              <span [ngStyle]="{ color: religion?.color }">{{
                religion?.name
              }}</span>
            </p>
          </div>
          <div>
            <p *ngIf="avatar.identity?.birthDate as birthDate">
              <cf-svg-icon src="assets/icons/mdi/cake.svg"></cf-svg-icon>
              Age:
              {{ birthDate | age | async }}
              <i cfBlock="icon">
                <img
                  cfElem="image"
                  *ngIf="birthPlaceShield"
                  [src]="birthPlaceShield"
                />
              </i>
              {{ birthPlace?.name }}
            </p>
            <p>
              <cf-svg-icon src="assets/icons/mdi/city.svg"></cf-svg-icon>
              Location:
              <i cfBlock="icon">
                <img
                  cfElem="image"
                  *ngIf="locationShield"
                  [src]="locationShield"
                />
              </i>
              {{ burgLocation?.name }}
            </p>
            <p *ngIf="avatar.identity?.mainProfession as mainProfession">
              <cf-svg-icon
                src="assets/icons/mdi/account-hard-hat.svg"
              ></cf-svg-icon>
              Main Profession:
              <strong [ngStyle]="{ color: professions[mainProfession].color }">
                <cf-svg-icon
                  cfElem="icon"
                  *ngIf="professions[mainProfession].icon as icon"
                  [src]="icon"
                ></cf-svg-icon>
                {{ professions[mainProfession].label }}
              </strong>
            </p>
            <p
              *ngIf="
                avatar.identity?.secondaryProfession as secondaryProfession
              "
            >
              <cf-svg-icon
                src="assets/icons/mdi/account-hard-hat.svg"
              ></cf-svg-icon>
              Secondary Profession:
              <strong
                [ngStyle]="{ color: professions[secondaryProfession].color }"
              >
                <cf-svg-icon
                  cfElem="icon"
                  *ngIf="professions[secondaryProfession].icon as icon"
                  [src]="icon"
                ></cf-svg-icon>
                {{ professions[secondaryProfession].label }}
              </strong>
            </p>
          </div>
        </div>
      </div>

      <div cfElem="related-content">
        <div cfElem="appearances">
          <cf-avatar-appearance-portrait
            [avatar]="avatar"
          ></cf-avatar-appearance-portrait>
        </div>

        <div cfElem="parents" *ngIf="parents && parents.length > 0">
          <h5>Parents</h5>
          <cf-avatars-carousel
            *ngIf="parents"
            [avatars]="parents"
            [world]="world"
            (avatarClick)="avatar = $event"
            size="small"
          ></cf-avatars-carousel>
        </div>

        <div cfElem="partners" *ngIf="partners && partners.length > 0">
          <h5>Partners</h5>
          <cf-avatars-carousel
            *ngIf="partners"
            [avatars]="partners"
            [world]="world"
            (avatarClick)="avatar = $event"
            size="small"
          ></cf-avatars-carousel>
        </div>

        <div cfElem="children" *ngIf="children && children.length > 0">
          <h5>Children</h5>
          <cf-avatars-carousel
            *ngIf="children"
            [avatars]="children"
            [world]="world"
            (avatarClick)="avatar = $event"
            size="small"
          ></cf-avatars-carousel>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .avatar-info {
        display: flex;
        flex-wrap: wrap;
        height: 100%;
        overflow: auto;

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
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          .avatar-info__parents {
            .avatars-carousel {
              gap: 1rem;
            }
          }
        }

        &__basic-info {
          display: flex;
          justify-content: space-between;
        }
      }
    `,
  ],
})
export class AvatarInfoComponent {
  @Input() avatar?: Avatar;
  @Input() avatars: Avatar[] = [];
  @Input() world?: World;

  get culture() {
    const cultures = this.world?.map?.cells?.cultures || [];
    return cultures.find(
      (culture) => culture.i === this.avatar?.identity?.culture
    );
  }

  get religion() {
    const religions = this.world?.map?.cells?.religions || [];
    return religions.find(
      (religion) => religion.i === this.avatar?.identity?.religion
    );
  }

  get birthPlace() {
    const burgs = this.world?.map?.cells?.burgs || [];
    return burgs.find((burg) => burg.i === this.avatar?.identity?.birthPlace);
  }

  get birthPlaceShield() {
    if (!this.birthPlace?.coa) {
      return undefined;
    }

    const url = new URL('https://armoria.herokuapp.com');
    url.searchParams.set('size', '28');
    url.searchParams.set('format', 'svg');
    url.searchParams.set('coa', JSON.stringify(this.birthPlace?.coa));

    return url.href;
  }

  get burgLocation() {
    const burgs = this.world?.map?.cells?.burgs || [];
    return burgs.find((burg) => burg.i === this.avatar?.location?.burg);
  }

  get locationShield() {
    if (!this.burgLocation?.coa) {
      return undefined;
    }

    const url = new URL('https://armoria.herokuapp.com');
    url.searchParams.set('size', '28');
    url.searchParams.set('format', 'svg');
    url.searchParams.set('coa', JSON.stringify(this.burgLocation?.coa));

    return url.href;
  }

  get partners(): Avatar[] {
    const partners: AvatarRelationship[] =
      this.avatar?.relationships?.filter(
        (relationship) => relationship.kind === AvatarRelationshipKind.Spouse
      ) || [];

    return partners
      .filter(
        (partner, index) =>
          partner?.avatar !== '0' &&
          partners.findIndex((other) => partner.avatar === other.avatar) ===
            index
      )
      .map(
        (partner) =>
          this.avatars.find((avatar) => avatar.id === partner.avatar) as Avatar
      );
  }

  get parents(): Avatar[] {
    const parents: AvatarRelationship[] =
      this.avatar?.relationships?.filter(
        (relationship) => relationship.kind === AvatarRelationshipKind.Parent
      ) || [];

    return parents
      .filter(
        (parent, index) =>
          parent.avatar !== '0' &&
          parents.findIndex((other) => parent.avatar === other.avatar) === index
      )
      .map(
        (parent) =>
          this.avatars.find((avatar) => avatar.id === parent.avatar) as Avatar
      );
  }

  get children(): Avatar[] {
    return this.avatars.filter((avatar) =>
      avatar.relationships?.some(
        (relationship) =>
          relationship.kind === AvatarRelationshipKind.Parent &&
          relationship.avatar === this.avatar?.id
      )
    );
  }

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

  get archetypes(): Record<string, Avatar> {
    return (
      this.world?.archetypes?.reduce(
        (acc, archetype) => ({
          ...acc,
          [archetype.id]: archetype,
        }),
        {}
      ) || {}
    );
  }
}
