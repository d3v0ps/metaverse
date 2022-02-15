import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { AppearancePortrait } from '../../../models/appearance';

@Component({
  selector: 'cf-avatar-appearance-portrait',
  template: `
    <div cfBlock="avatar-appearance-portrait">
      <div
        cfElem="image"
        *ngIf="
          appearancePortrait && appearancePortrait.style?.id === 'avataaars'
        "
      >
        <cf-avatar-appearance-portrait-avataaars
          [properties]="appearancePortrait.style.properties"
        ></cf-avatar-appearance-portrait-avataaars>
      </div>

      <img cfElem="image" *ngIf="false && src" [src]="src" />

      <cf-svg-icon
        *ngIf="!src && showEmptyIcon"
        [src]="emptyIcon"
      ></cf-svg-icon>
    </div>
  `,
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

  public src?: SafeUrl;

  private _appearancePortrait: AppearancePortrait | undefined;

  constructor(private domSanitizer: DomSanitizer) {}
}
