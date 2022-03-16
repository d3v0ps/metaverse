import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { toAvataaars } from '@central-factory/avatars/data/mappers/to-avataaars';
import { toLPCLayers } from '@central-factory/avatars/data/mappers/to-lpc';
import { Avatar } from '@central-factory/avatars/models/avatar';
import {
  GameLayer,
  GameLayerType,
} from '@central-factory/web-components/phaser/models/game-object';
import { PhaserScene } from '@central-factory/web-components/phaser/scenes/phaser.scene';
import { Scene } from 'phaser';
import { v4 as uuid } from 'uuid';
import { AppearanceVariation } from '../../../models/appearance';

@Component({
  selector: 'cf-avatar-appearance-portrait',
  template: `
    <div
      cfBlock="avatar-appearance-portrait"
      (click)="appearanceClick.emit(appearancePortrait)"
      [cfMod]="[active ? 'active' : 'inactive', rarity ? rarity : undefined]"
    >
      <ng-container
        *ngIf="appearancePortrait && appearancePortrait.style"
        [ngSwitch]="appearancePortrait.style?.id"
      >
        <ng-container *ngSwitchCase="'avataaars'">
          <div cfElem="image">
            <cf-avatar-appearance-portrait-avataaars
              [properties]="appearancePortrait.style.properties"
            ></cf-avatar-appearance-portrait-avataaars>
          </div>
        </ng-container>
        <ng-container *ngSwitchCase="'lpc'">
          <cf-phaser-renderer
            *ngIf="scenes"
            [scenes]="scenes"
          ></cf-phaser-renderer>
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
    `,
  ],
})
export class AvatarAppearancePortraitComponent {
  @Input() set avatar(value: Avatar | undefined) {
    this._avatar = value;
    if (!value) {
      return;
    }

    this.appearancePortrait = this.getAppearance(value);
  }

  @Input() set appearancePortrait(value: AppearanceVariation | undefined) {
    if (!value) {
      return;
    }

    this.src = value?.src
      ? this.domSanitizer.bypassSecurityTrustUrl(value.src)
      : undefined;
    this._appearancePortrait = value;

    if (!value || !value.style.properties || value.style.id !== 'lpc') {
      return;
    }

    const animation = value.style.properties?.animation
      ? `${value.style.properties.animation}/${value.style.properties.direction}`
      : 'walk/south';

    if (!this._avatar) {
      return;
    }

    const sceneLayers = toLPCLayers(this._avatar);

    this.scenes = {
      room: new PhaserScene(
        {},
        this.http,
        this.phaserLayersFromLPCLayers(
          Array.isArray(value.style.properties)
            ? value.style.properties
            : sceneLayers
        ),
        animation
      ),
    };
  }
  get appearancePortrait(): AppearanceVariation | undefined {
    return this._appearancePortrait;
  }
  @Input() displayComponent: 'avataaars' | 'lpc' = 'lpc';
  @Input() emptyIcon = 'assets/icons/mdi/head-question.svg';
  @Input() showEmptyIcon = false;
  @Input() active = false;
  @Input() rarity?: string;

  @Input() scale = 3;

  @Output() appearanceClick = new EventEmitter<AppearanceVariation>();

  scenes?: Record<string, Scene>;

  public src?: SafeUrl;

  private _appearancePortrait: AppearanceVariation | undefined;
  private _avatar: Avatar | undefined;

  constructor(private domSanitizer: DomSanitizer, private http: HttpClient) {}

  getAppearance(avatar: Avatar): AppearanceVariation {
    const { appearance } = avatar;

    if (!appearance) {
      throw new Error('Appearance not found');
    }

    if (!this._avatar) {
      return {
        id: '',
        filename: '',
        style: {
          id: '',
          properties: {},
        },
      };
    }

    switch (this.displayComponent) {
      case 'avataaars':
        return {
          id: avatar.id,
          filename: '',
          style: {
            id: 'avataaars',
            properties: toAvataaars(appearance),
          },
        };
      case 'lpc':
        return {
          id: avatar.id,
          filename: '',
          style: {
            id: 'lpc',
            properties: toLPCLayers(this._avatar),
          },
        };
    }
  }

  getLpcUrl(appearancePortrait: AppearanceVariation | undefined) {
    if (!appearancePortrait) {
      return `assets/avatars/lpc/bases/Human/Child/Universal.png`;
    }

    const urlParams = Object.values(appearancePortrait.style.properties).join(
      '/'
    );

    return `assets/avatars/lpc/bases/${urlParams}/Universal.png`;
  }

  private phaserLayersFromLPCLayers(
    lpcLayers: {
      name: string;
      src: string;
      description?: string;
    }[]
  ) {
    return lpcLayers.reduce(
      (phaserLayers, layer) =>
        phaserLayers.concat(
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
            },
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
                  name: 'left',
                },
                {
                  name: 'south',
                },
                {
                  name: 'right',
                },
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
                  name: 'left',
                },
                {
                  name: 'south',
                },
                {
                  name: 'right',
                },
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
                  name: 'left',
                },
                {
                  name: 'south',
                },
                {
                  name: 'right',
                },
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
                  name: 'left',
                },
                {
                  name: 'south',
                },
                {
                  name: 'right',
                },
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
                  name: 'left',
                },
                {
                  name: 'south',
                },
                {
                  name: 'right',
                },
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
                  name: 'south',
                },
              ],
              name: 'fall',
              textureKey: layer.name,
              steps: 6,
              row: 20,
              cols: 13,
            },
          }
        ),
      [] as GameLayer[]
    );
  }
}
