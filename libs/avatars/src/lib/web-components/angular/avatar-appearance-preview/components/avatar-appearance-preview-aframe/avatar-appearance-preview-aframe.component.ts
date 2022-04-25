import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Appearance } from '../../../../../models/appearance';
import { avatarAppearancePreviewAframeScene } from './avatar-appearance-preview.aframe-scene';

@Component({
  selector: 'cf-avatar-appearance-preview-aframe',
  template: `
    <iframe
      *ngIf="frameDoc"
      style="width: {{ width }}; height: {{ height }};"
      [srcdoc]="frameDoc"
    ></iframe>
  `,
})
export class AvatarAppearancePreviewAframeComponent {
  @Input() set appearance(value: Appearance | undefined) {
    if (!value) {
      return;
    }

    this.frameDoc = this.sanitizer.bypassSecurityTrustHtml(
      avatarAppearancePreviewAframeScene(value, this.width, this.height)
    );
  }

  @Input() width = '100%';
  @Input() height = '300px';

  frameDoc?: SafeHtml;

  constructor(private sanitizer: DomSanitizer) {}
}
