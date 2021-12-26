import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import type { Appearance } from '../../../models/appearance';
import { previewAvatarAppearanceAframeScene } from './preview-avatar-appearance.aframe-scene';

@Component({
  selector: 'cf-preview-avatar-appearance',
  template: `
    <iframe
      *ngIf="frameDoc"
      style="width: {{ width }}; height: {{ height }};"
      [srcdoc]="frameDoc"
    ></iframe>
  `,
})
export class PreviewAvatarAppearanceComponent {
  @Input() set appearance(value: Appearance) {
    if (!value) {
      return;
    }

    this.frameDoc = this.sanitizer.bypassSecurityTrustHtml(
      previewAvatarAppearanceAframeScene(value, this.width, this.height)
    );
  }

  frameDoc!: SafeHtml;

  @Input() height = '300px';
  @Input() width = '100%';

  constructor(private sanitizer: DomSanitizer) {}
}
