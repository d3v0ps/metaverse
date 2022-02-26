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
          <div cfBlock="spritesheet-layers">
            <ng-container *ngFor="let layer of getLpcLayers(appearancePortrait)">
              <cf-avatar-appearance-spritesheet [src]="layer.url"
                [row]="layer.row"
                [col]="layer.col"
                [scale]="layer.scale">
              </cf-avatar-appearance-spritesheet>
            </ng-container>
          </div>
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
    if (!appearancePortrait) {
      return [];
    }

    const body = [
      baseUrl,
      'body',
      appearancePortrait.style.properties.bodyVariation,
      `${appearancePortrait.style.properties.bodyType}.png`
    ].join('/');

    const torso = [
      baseUrl,
      'torso',
      appearancePortrait.style.properties.bodyVariation,
      `${appearancePortrait.style.properties.torso}.png`
    ].join('/');

    const hair = [
      baseUrl,
      'hair',
      appearancePortrait.style.properties.bodyVariation,
      appearancePortrait.style.properties.hair,
      `${appearancePortrait.style.properties.hairColor}.png`
    ].join('/');

    const facialHair = [
      baseUrl,
      'facial',
      appearancePortrait.style.properties.bodyVariation,
      appearancePortrait.style.properties.facialHair,
      `${appearancePortrait.style.properties.hairColor}.png`
    ].join('/');

    const layers = [
      {
        url: body,
        row: 2,
        col: 0,
        scale: 2,
      },
      {
        url: torso,
        row: 2,
        col: 0,
        scale: 2,
      },
      {
        url: hair,
        row: 2,
        col: 0,
        scale: 2,
      },
      {
        url: facialHair,
        row: 2,
        col: 0,
        scale: 2,
      }
    ];

    console.log(layers);

    return layers;
  }
}
