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
          <cf-avatar-appearance-spritesheet [src]="getLpcUrl(appearancePortrait)"
            [row]="2"
            [col]="0"
            [scale]="2"></cf-avatar-appearance-spritesheet>
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
      return `assets/avatars/lpc/bases/Human/Child/Walk.png`;
    }

    const urlParams = Object.values(appearancePortrait.style.properties).join('/');

    return `assets/avatars/lpc/bases/${urlParams}/Walk.png`;
  }
}
