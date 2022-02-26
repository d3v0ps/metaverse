import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { AppearancePortrait } from '../../../models/appearance';

@Component({
  selector: 'cf-avatar-appearance-portrait',
  template: `
    <div cfBlock="avatar-appearance-portrait" (click)="appearanceClick.emit(appearancePortrait)"
      *ngIf="appearancePortrait && appearancePortrait.style"
      [cfMod]="[active ? 'active' : undefined]">
      <ng-container [ngSwitch]="appearancePortrait.style?.id">
        <ng-container *ngSwitchCase="'avataaars'">
          <div cfElem="image">
            <cf-avatar-appearance-portrait-avataaars
              [properties]="appearancePortrait.style.properties"
            ></cf-avatar-appearance-portrait-avataaars>
        </div>
        </ng-container>
        <ng-container *ngSwitchCase="'lpc'">
          <cf-layered-spritesheet
            [layers]="getLpcLayers(appearancePortrait)"></cf-layered-spritesheet>
        </ng-container>
        <ng-container *ngSwitchCase="'image'">
          <img cfElem="image" *ngIf="src" [src]="src" />
        </ng-container>
      </ng-container>

      <cf-svg-icon
        *ngIf="!src && showEmptyIcon"
        [src]="emptyIcon"
      ></cf-svg-icon>
    </div>
  `,
  styles: [
    `
      .avatar-appearance-portrait {
        &--active {
          background: var(--color-base-primary-medium, red);
        }
      }

      .spritesheet-layers {
        position: relative;
        /* left: 0; */
        /* top: 0; */
        /* width: 100%; */
        /* height: 100%; */
        margin: 0 auto;
        width: 64px;
        height: 64px;

        cf-avatar-appearance-spritesheet {
          position: absolute;
          margin: 0 auto;
          left: 0;
          top: 0;
        }
      }
    `
  ]
})
export class AvatarAppearancePortraitComponent {
  @Input() set appearancePortrait(value: AppearancePortrait | undefined) {
    this.src = value?.src
      ? this.domSanitizer.bypassSecurityTrustUrl(value.src)
      : undefined;
    this._appearancePortrait = value;
  }
  get appearancePortrait(): AppearancePortrait | undefined {
    return this._appearancePortrait;
  }
  @Input() emptyIcon = 'assets/icons/mdi/head-question.svg';
  @Input() showEmptyIcon = false;
  @Input() active = false;

  @Output() appearanceClick = new EventEmitter<AppearancePortrait>();

  public src?: SafeUrl;

  private _appearancePortrait: AppearancePortrait | undefined;

  constructor(private domSanitizer: DomSanitizer) { }

  getLpcUrl(appearancePortrait: AppearancePortrait | undefined) {
    if (!appearancePortrait) {
      return `assets/avatars/lpc/bases/Human/Child/Universal.png`;
    }

    const urlParams = Object.values(appearancePortrait.style.properties).join('/');

    return `assets/avatars/lpc/bases/${urlParams}/Universal.png`;
  }

  getLpcLayers(appearancePortrait: AppearancePortrait | undefined) {
    // https://raw.githubusercontent.com/central-factory/Universal-LPC-spritesheet/master/body/male/dark.png
    const baseUrl = `https://raw.githubusercontent.com/central-factory/Universal-LPC-spritesheet/master`;

    const canRender = appearancePortrait && appearancePortrait.style.properties.bodyType && appearancePortrait.style.properties.bodyType;

    if (!canRender) {
      return [];
    }

    const layerUrls: string[] = [];

    layerUrls.push([
      baseUrl,
      'body',
      appearancePortrait.style.properties.bodyVariation,
      `${appearancePortrait.style.properties.bodyType}.png`
    ].join('/'));

    if (appearancePortrait.style.properties.legs) {
      layerUrls.push([
        baseUrl,
        'legs',
        appearancePortrait.style.properties.bodyVariation,
        `${appearancePortrait.style.properties.legs}.png`
      ].join('/'));
    }

    if (appearancePortrait.style.properties.feet) {
      layerUrls.push([
        baseUrl,
        'feet',
        appearancePortrait.style.properties.bodyVariation,
        `${appearancePortrait.style.properties.feet}.png`
      ].join('/'));
    }

    if (appearancePortrait.style.properties.torso) {
      layerUrls.push([
        baseUrl,
        'torso',
        appearancePortrait.style.properties.bodyVariation,
        `${appearancePortrait.style.properties.torso}.png`
      ].join('/'));
    }

    if (appearancePortrait.style.properties.torso2) {
      layerUrls.push([
        baseUrl,
        'torso',
        appearancePortrait.style.properties.bodyVariation,
        `${appearancePortrait.style.properties.torso2}.png`
      ].join('/'));
    }

    if (appearancePortrait.style.properties.hair) {
      layerUrls.push([
        baseUrl,
        'hair',
        appearancePortrait.style.properties.bodyVariation,
        appearancePortrait.style.properties.hair,
        `${appearancePortrait.style.properties.hairColor}.png`
      ].join('/'));
    }

    if (appearancePortrait.style.properties.facialHair) {
      layerUrls.push([
        baseUrl,
        'facial',
        appearancePortrait.style.properties.bodyVariation,
        appearancePortrait.style.properties.facialHair,
        `${appearancePortrait.style.properties.facialHairColor || appearancePortrait.style.properties.hairColor}.png`
      ].join('/'));
    }

    if (appearancePortrait.style.properties.leftHand) {
      layerUrls.push([
        baseUrl,
        'weapons',
        appearancePortrait.style.properties.bodyVariation,
        'left-hand',
        `${appearancePortrait.style.properties.leftHand}.png`
      ].join('/'));
    }

    if (appearancePortrait.style.properties.rightHand) {
      layerUrls.push([
        baseUrl,
        'weapons',
        appearancePortrait.style.properties.bodyVariation,
        'right-hand',
        `${appearancePortrait.style.properties.rightHand}.png`
      ].join('/'));
    }

    if (appearancePortrait.style.properties.bothHands) {
      layerUrls.push([
        baseUrl,
        'weapons',
        appearancePortrait.style.properties.bodyVariation,
        'both-hand',
        `${appearancePortrait.style.properties.bothHands}.png`
      ].join('/'));
    }

    const animation = parseInt(appearancePortrait.style.properties.animation || '0', 10);
    const direction = animation === 20 ? 0 : parseInt(appearancePortrait.style.properties.direction || '1', 10);

    const row = animation + direction;

    return layerUrls.map(url => ({
      url,
      row,
      col: 1,
      scale: 3
    }));
  }
}
