import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Scene } from 'phaser';
import { AppearancePortrait, AppearanceVariation } from '../../../models/appearance';
import { LPCAvatarScene } from '../../phaser/lpc-avatar.scene';

@Component({
  selector: 'cf-avatar-appearance-portrait',
  template: `
    <div cfBlock="avatar-appearance-portrait" (click)="appearanceClick.emit(appearancePortrait)"
      [cfMod]="[active ? 'active' : undefined]">
      <ng-container *ngIf="appearancePortrait && appearancePortrait.style" [ngSwitch]="appearancePortrait.style?.id">
        <ng-container *ngSwitchCase="'avataaars'">
          <div cfElem="image">
            <cf-avatar-appearance-portrait-avataaars
              [properties]="appearancePortrait.style.properties"
            ></cf-avatar-appearance-portrait-avataaars>
        </div>
        </ng-container>
        <ng-container *ngSwitchCase="'lpc'">
          <cf-phaser-renderer *ngIf="scenes" [scenes]="scenes"></cf-phaser-renderer>
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
  @Input() set appearancePortrait(value: AppearanceVariation | undefined) {
    this.src = value?.src
      ? this.domSanitizer.bypassSecurityTrustUrl(value.src)
      : undefined;
    this._appearancePortrait = value;

    if (!value) {
      return;
    }

    const layers = this.getLpcLayers(value);
    const animation = value.style.properties?.animation ? `${value.style.properties.animation}/${value.style.properties.direction}` : 'walk/south';

    if (layers.length <= 0) {
      this.scenes = undefined;
      return;
    }

    this.scenes = {
      room: new LPCAvatarScene({}, this.getLpcLayers(value), animation)
    }
  }
  get appearancePortrait(): AppearanceVariation | undefined {
    return this._appearancePortrait;
  }
  @Input() emptyIcon = 'assets/icons/mdi/head-question.svg';
  @Input() showEmptyIcon = false;
  @Input() active = false;

  @Input() scale = 3;

  @Output() appearanceClick = new EventEmitter<AppearancePortrait>();

  scenes?: Record<string, Scene>;

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

  getLpcLayers(appearancePortrait: AppearancePortrait | undefined): {
    id: string;
    url: string;
  }[] {
    // https://raw.githubusercontent.com/central-factory/Universal-LPC-spritesheet/master/body/male/dark.png
    const baseUrl = `https://raw.githubusercontent.com/central-factory/Universal-LPC-spritesheet/master`;

    const canRender = appearancePortrait && appearancePortrait.style.properties.bodyType && appearancePortrait.style.properties.bodyVariation;

    if (!canRender) {
      return [];
    }

    return [
      appearancePortrait.style.properties.shadows ? {
        id: 'shadows',
        url: [
          baseUrl,
          'shadows',
          appearancePortrait.style.properties.bodyVariation,
          `shadow.png`
        ].join('/')
      } : null,

      appearancePortrait.style.properties.bodyType ? {
        id: 'body',
        url: [
          baseUrl,
          'body',
          appearancePortrait.style.properties.bodyVariation,
          `${appearancePortrait.style.properties.bodyType}.png`
        ].join('/')
      } : null,

      appearancePortrait.style.properties.legs ? {
        id: 'legs',
        url: [
          baseUrl,
          'legs',
          appearancePortrait.style.properties.bodyVariation,
          `${appearancePortrait.style.properties.legs}.png`
        ].join('/')
      } : null,

      appearancePortrait.style.properties.feet ? {
        id: 'feet',
        url: [
          baseUrl,
          'feet',
          appearancePortrait.style.properties.bodyVariation,
          `${appearancePortrait.style.properties.feet}.png`
        ].join('/')
      } : null,

      appearancePortrait.style.properties.torso ? {
        id: 'torso',
        url: [
          baseUrl,
          'torso',
          appearancePortrait.style.properties.bodyVariation,
          `${appearancePortrait.style.properties.torso}.png`
        ].join('/')
      } : null,

      appearancePortrait.style.properties.torso2 ? {
        id: 'torso2',
        url: [
          baseUrl,
          'torso',
          appearancePortrait.style.properties.bodyVariation,
          `${appearancePortrait.style.properties.torso2}.png`
        ].join('/')
      } : null,

      appearancePortrait.style.properties.arms ? {
        id: 'arms',
        url: [
          baseUrl,
          'torso',
          appearancePortrait.style.properties.bodyVariation,
          `${appearancePortrait.style.properties.arms}.png`
        ].join('/')
      } : null,

      appearancePortrait.style.properties.back ? {
        id: 'back',
        url: [
          baseUrl,
          'torso',
          appearancePortrait.style.properties.bodyVariation,
          'back',
          `${appearancePortrait.style.properties.back}.png`
        ].join('/')
      } : null,
      appearancePortrait.style.properties.ears ?
        {
          id: 'ears',
          url: [
            baseUrl,
            'body',
            appearancePortrait.style.properties.bodyVariation,
            'ears',
            `${appearancePortrait.style.properties.ears}_${appearancePortrait.style.properties.bodyType}.png`
          ].join('/')
        } : null,
      appearancePortrait.style.properties.nose ?
        {
          id: 'nose',
          url: [
            baseUrl,
            'body',
            appearancePortrait.style.properties.bodyVariation,
            'nose',
            `${appearancePortrait.style.properties.nose}_${appearancePortrait.style.properties.bodyType}.png`
          ].join('/')
        } : null,
      appearancePortrait.style.properties.eyes ?
        {
          id: 'eyes',
          url: [
            baseUrl,
            'body',
            appearancePortrait.style.properties.bodyVariation,
            'eyes',
            `${appearancePortrait.style.properties.eyes}.png`
          ].join('/')
        } : null,
      appearancePortrait.style.properties.hair ?
        {
          id: 'hair',
          url: [
            baseUrl,
            'hair',
            appearancePortrait.style.properties.bodyVariation,
            appearancePortrait.style.properties.hair,
            `${appearancePortrait.style.properties.hairColor}.png`
          ].join('/')
        } : null,
      appearancePortrait.style.properties.facialHair ?
        {
          id: 'facialHair',
          url: [
            baseUrl,
            'facial',
            appearancePortrait.style.properties.bodyVariation,
            appearancePortrait.style.properties.facialHair,
            `${appearancePortrait.style.properties.facialHairColor || appearancePortrait.style.properties.hairColor}.png`
          ].join('/')
        } : null,
      appearancePortrait.style.properties.head ?
        {
          id: 'head',
          url: [
            baseUrl,
            'head',
            appearancePortrait.style.properties.bodyVariation,
            `${appearancePortrait.style.properties.head}.png`
          ].join('/')
        } : null,
      appearancePortrait.style.properties.visor ?
        {
          id: 'visor',
          url: [
            baseUrl,
            'head',
            appearancePortrait.style.properties.bodyVariation,
            `${appearancePortrait.style.properties.visor}.png`
          ].join('/')
        } : null,
      appearancePortrait.style.properties.headAccesory ? {
        id: 'headAccesory',
        url: [
          baseUrl,
          'head',
          appearancePortrait.style.properties.bodyVariation,
          `${appearancePortrait.style.properties.headAccesory}.png`
        ].join('/')
      } : null,
      appearancePortrait.style.properties.leftHand ? {
        id: 'leftHand',
        url: [
          baseUrl,
          'weapons',
          appearancePortrait.style.properties.bodyVariation,
          'left-hand',
          `${appearancePortrait.style.properties.leftHand}.png`
        ].join('/')
      } : null,
      appearancePortrait.style.properties.rightHand ? {
        id: 'rightHand',
        url: [
          baseUrl,
          'weapons',
          appearancePortrait.style.properties.bodyVariation,
          'right-hand',
          `${appearancePortrait.style.properties.rightHand}.png`
        ].join('/')
      } : null,
      appearancePortrait.style.properties.bothHands ? {
        id: 'bothHands',
        url: [
          baseUrl,
          'weapons',
          appearancePortrait.style.properties.bodyVariation,
          'both-hand',
          `${appearancePortrait.style.properties.bothHands}.png`
        ].join('/')
      } : null,
    ].filter(layer => layer ? true : false) as { id: string; url: string; }[];
  }
}
