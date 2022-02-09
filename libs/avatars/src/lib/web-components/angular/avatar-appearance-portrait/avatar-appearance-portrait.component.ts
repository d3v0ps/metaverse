import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { AppearancePortrait } from '../../../models/appearance';

@Component({
  selector: 'cf-avatar-appearance-portrait',
  template: `
    <div cfBlock="avatar-appearance-portrait">
      <img cfElem="image" *ngIf="src" [src]="src" />
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
  }
  @Input() emptyIcon = 'assets/icons/mdi/head-question.svg';
  @Input() showEmptyIcon = false;

  public src?: SafeUrl;

  constructor(private domSanitizer: DomSanitizer) {}
}
