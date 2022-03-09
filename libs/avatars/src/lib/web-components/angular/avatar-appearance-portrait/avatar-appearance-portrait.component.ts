import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { GameLayer, GameLayerType } from '@central-factory/web-components/phaser/models/game-object';
import { PhaserScene } from '@central-factory/web-components/phaser/scenes/phaser.scene';
import { Scene } from 'phaser';
import { v4 as uuid } from 'uuid';
import { AppearanceVariation } from '../../../models/appearance';

@Component({
  selector: 'cf-avatar-appearance-portrait',
  template: `
    <div cfBlock="avatar-appearance-portrait" (click)="appearanceClick.emit(appearancePortrait)"
      [cfMod]="[active ? 'active' : 'inactive', rarity ? rarity : undefined]">
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

    console.debug('appearancePortrait', value);

    const layers = this.getLpcLayers(value);
    const animation = value.style.properties?.animation ? `${value.style.properties.animation}/${value.style.properties.direction}` : 'walk/south';

    console.debug('layers', layers);
    if (layers.length <= 0) {
      this.scenes = undefined;
      return;
    }

    this.scenes = {
      room: new PhaserScene({}, this.http, this.getLpcLayers(value), animation)
    }
  }
  get appearancePortrait(): AppearanceVariation | undefined {
    return this._appearancePortrait;
  }
  @Input() emptyIcon = 'assets/icons/mdi/head-question.svg';
  @Input() showEmptyIcon = false;
  @Input() active = false;
  @Input() rarity?: string;

  @Input() scale = 3;

  @Output() appearanceClick = new EventEmitter<AppearanceVariation>();

  scenes?: Record<string, Scene>;

  public src?: SafeUrl;

  private _appearancePortrait: AppearanceVariation | undefined;

  constructor(private domSanitizer: DomSanitizer, private http: HttpClient) { }

  getLpcUrl(appearancePortrait: AppearanceVariation | undefined) {
    if (!appearancePortrait) {
      return `assets/avatars/lpc/bases/Human/Child/Universal.png`;
    }

    const urlParams = Object.values(appearancePortrait.style.properties).join('/');

    return `assets/avatars/lpc/bases/${urlParams}/Universal.png`;
  }

  getLpcLayers(appearancePortrait: AppearanceVariation | undefined): GameLayer[] {
    // https://raw.githubusercontent.com/central-factory/Universal-LPC-spritesheet/master/body/male/dark.png
    const baseUrl = `https://raw.githubusercontent.com/central-factory/Universal-LPC-spritesheet/master`;

    const canRender = appearancePortrait && appearancePortrait.style.properties.bodyType && appearancePortrait.style.properties.bodyVariation;

    if (!canRender) {
      return [];
    }

    const lpcLayers = [
      {
        name: 'Shadows',
        description: 'Shadow layer',
        src: [
          baseUrl,
          'shadows',
          appearancePortrait.style.properties.bodyVariation,
          `shadow.png`
        ].join('/')
      },
      {
        name: 'Body',
        description: 'Body layer',
        src: [
          baseUrl,
          'body',
          appearancePortrait.style.properties.bodyVariation,
          `${appearancePortrait.style.properties.bodyType}.png`
        ].join('/')
      },
      appearancePortrait.style.properties.legs ? {
        name: 'Legs',
        description: 'Legs layer',
        src: [
          baseUrl,
          'legs',
          appearancePortrait.style.properties.bodyVariation,
          `${appearancePortrait.style.properties.legs}.png`
        ].join('/')
      } : null,
      appearancePortrait.style.properties.feet ? {
        name: 'Feet',
        description: 'Feet layer',
        src: [
          baseUrl,
          'feet',
          appearancePortrait.style.properties.bodyVariation,
          `${appearancePortrait.style.properties.feet}.png`
        ].join('/')
      } : null,
      appearancePortrait.style.properties.torso ? {
        name: 'Torso',
        description: 'Torso Layer',
        src: [
          baseUrl,
          'torso',
          appearancePortrait.style.properties.bodyVariation,
          `${appearancePortrait.style.properties.torso}.png`
        ].join('/')
      } : null,

      appearancePortrait.style.properties.torso2 ? {
        name: 'Torso 2',
        description: 'Torso 2 Layer',
        src: [
          baseUrl,
          'torso',
          appearancePortrait.style.properties.bodyVariation,
          `${appearancePortrait.style.properties.torso2}.png`
        ].join('/')
      } : null,

      appearancePortrait.style.properties.arms ? {
        name: 'Arms',
        description: 'Arms Layer',
        src: [
          baseUrl,
          'torso',
          appearancePortrait.style.properties.bodyVariation,
          `${appearancePortrait.style.properties.arms}.png`
        ].join('/')
      } : null,

      appearancePortrait.style.properties.back ? {
        name: 'Back',
        description: 'Back Layer',
        src: [
          baseUrl,
          'torso',
          appearancePortrait.style.properties.bodyVariation,
          'back',
          `${appearancePortrait.style.properties.back}.png`
        ].join('/')
      } : null,
      appearancePortrait.style.properties.ears ?
        {
          name: 'Ears',
          description: 'Ears Layer',
          src: [
            baseUrl,
            'body',
            appearancePortrait.style.properties.bodyVariation,
            'ears',
            `${appearancePortrait.style.properties.ears}_${appearancePortrait.style.properties.bodyType}.png`
          ].join('/')
        } : null,
      appearancePortrait.style.properties.nose ?
        {
          name: 'Nose',
          description: 'Nose Layer',
          src: [
            baseUrl,
            'body',
            appearancePortrait.style.properties.bodyVariation,
            'nose',
            `${appearancePortrait.style.properties.nose}_${appearancePortrait.style.properties.bodyType}.png`
          ].join('/')
        } : null,
      appearancePortrait.style.properties.eyes ?
        {
          name: 'Eyes',
          description: 'Eyes Layer',
          src: [
            baseUrl,
            'body',
            appearancePortrait.style.properties.bodyVariation,
            'eyes',
            `${appearancePortrait.style.properties.eyes}.png`
          ].join('/')
        } : null,
      appearancePortrait.style.properties.hair ?
        {
          name: 'Hair',
          description: 'Hair Layer',
          src: [
            baseUrl,
            'hair',
            appearancePortrait.style.properties.bodyVariation,
            appearancePortrait.style.properties.hair,
            `${appearancePortrait.style.properties.hairColor}.png`
          ].join('/')
        } : null,
      appearancePortrait.style.properties.facialHair ?
        {
          name: 'Facial Hair',
          description: 'Facial Hair Layer',
          src: [
            baseUrl,
            'facial',
            appearancePortrait.style.properties.bodyVariation,
            appearancePortrait.style.properties.facialHair,
            `${appearancePortrait.style.properties.facialHairColor || appearancePortrait.style.properties.hairColor}.png`
          ].join('/')
        } : null,
      appearancePortrait.style.properties.head ?
        {
          name: 'Head',
          description: 'Head Layer',
          src: [
            baseUrl,
            'head',
            appearancePortrait.style.properties.bodyVariation,
            `${appearancePortrait.style.properties.head}.png`
          ].join('/')
        } : null,
      appearancePortrait.style.properties.visor ?
        {
          name: 'Visor',
          description: 'Visor Layer',
          src: [
            baseUrl,
            'head',
            appearancePortrait.style.properties.bodyVariation,
            `${appearancePortrait.style.properties.visor}.png`
          ].join('/')
        } : null,
      appearancePortrait.style.properties.accessory ? {
        name: 'Accessory',
        description: 'Accessory Layer',
        src: [
          baseUrl,
          'accessories',
          appearancePortrait.style.properties.bodyVariation,
          `${appearancePortrait.style.properties.accessory}.png`
        ].join('/')
      } : null,
      appearancePortrait.style.properties.headAccesory ? {
        name: 'Head Accesory',
        description: 'Head Accesory Layer',
        src: [
          baseUrl,
          'head',
          appearancePortrait.style.properties.bodyVariation,
          `${appearancePortrait.style.properties.headAccesory}.png`
        ].join('/')
      } : null,
      appearancePortrait.style.properties.leftHand ? {
        name: 'Left Hand',
        description: 'Left Hand Layer',
        src: [
          baseUrl,
          'weapons',
          appearancePortrait.style.properties.bodyVariation,
          'left-hand',
          `${appearancePortrait.style.properties.leftHand}.png`
        ].join('/')
      } : null,
      appearancePortrait.style.properties.rightHand ? {
        name: 'Right Hand',
        description: 'Right Hand Layer',
        src: [
          baseUrl,
          'weapons',
          appearancePortrait.style.properties.bodyVariation,
          'right-hand',
          `${appearancePortrait.style.properties.rightHand}.png`
        ].join('/')
      } : null,
      appearancePortrait.style.properties.bothHands ? {
        name: 'Both Hands',
        description: 'Both Hands Layer',
        src: [
          baseUrl,
          'weapons',
          appearancePortrait.style.properties.bodyVariation,
          'both-hand',
          `${appearancePortrait.style.properties.bothHands}.png`
        ].join('/')
      } : null,
    ].filter(val => val ? true : false) as { name: string; src: string; description?: string }[];

    return this.phaserLayersFromLPCLayers(lpcLayers);
  }

  private phaserLayersFromLPCLayers(lpcLayers: {
    name: string;
    src: string;
    description?: string;
  }[]) {
    return lpcLayers.reduce(
      (phaserLayers, layer) => phaserLayers.concat(
        {
          id: uuid(),
          type: GameLayerType.Sprite,
          name: layer.name,
          description: layer.description || `${layer.name} layer`,
          dimensions: {
            scale: 3,
          },
          properties: {
            name: layer.name.toLowerCase(),
            src: layer.src,
          }
        },
        {
          id: uuid(),
          type: GameLayerType.AnimationGroup,
          name: `${layer.name} Cast`,
          description: `${layer.name} animation layer`,
          properties: {
            animations: [
              {
                name: 'north',
              },
              {
                name: 'left'
              },
              {
                name: 'south'
              },
              {
                name: 'right'
              }
            ],
            name: 'cast',
            textureKey: layer.name,
            steps: 7,
            row: 0,
            cols: 13,
          },
        },
        {
          id: uuid(),
          type: GameLayerType.AnimationGroup,
          name: `${layer.name} Dual-Wield`,
          description: `${layer.name} animation layer`,
          properties: {
            animations: [
              {
                name: 'north',
              },
              {
                name: 'left'
              },
              {
                name: 'south'
              },
              {
                name: 'right'
              }
            ],
            name: 'dual-wield',
            textureKey: layer.name,
            steps: 8,
            row: 4,
            cols: 13,
          },
        },
        {
          id: uuid(),
          type: GameLayerType.AnimationGroup,
          name: `${layer.name} Walk`,
          description: `${layer.name} animation layer`,
          properties: {
            animations: [
              {
                name: 'north',
              },
              {
                name: 'left'
              },
              {
                name: 'south'
              },
              {
                name: 'right'
              }
            ],
            name: 'walk',
            textureKey: layer.name,
            steps: 9,
            row: 8,
            cols: 13,
          },
        },
        {
          id: uuid(),
          type: GameLayerType.AnimationGroup,
          name: `${layer.name} Right Hand`,
          description: `${layer.name} animation layer`,
          properties: {
            animations: [
              {
                name: 'north',
              },
              {
                name: 'left'
              },
              {
                name: 'south'
              },
              {
                name: 'right'
              }
            ],
            name: 'right-arm',
            textureKey: layer.name,
            steps: 6,
            row: 12,
            cols: 13,
          },
        },
        {
          id: uuid(),
          type: GameLayerType.AnimationGroup,
          name: `${layer.name} Bow`,
          description: `${layer.name} animation layer`,
          properties: {
            animations: [
              {
                name: 'north',
              },
              {
                name: 'left'
              },
              {
                name: 'south'
              },
              {
                name: 'right'
              }
            ],
            name: 'bow',
            textureKey: layer.name,
            steps: 13,
            row: 16,
            cols: 13,
          },
        },
        {
          id: uuid(),
          type: GameLayerType.AnimationGroup,
          name: `${layer.name} Fall`,
          description: `${layer.name} animation layer`,
          properties: {
            animations: [
              {
                name: 'south'
              },
            ],
            name: 'fall',
            textureKey: layer.name,
            steps: 6,
            row: 20,
            cols: 13,
          },
        }
      ), [] as GameLayer[]);
  }
}
