import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Appearance } from '../../../../domain/models/appearance';
import { previewAvatarAppearanceAframeScene } from './preview-avatar-appearance.aframe-scene';

@Component({
  selector: 'cf-preview-avatar-appearance',
  template: `
    <iframe
      style="width: {{ width }}; height: {{ height }};"
      [srcdoc]="frameDoc"
    ></iframe>
  `,
  styles: [
    `
      iframe {
        border: none;
      }
    `,
  ],
})
export class PreviewAvatarAppearanceScene {
  @Input() set appearance(value: Appearance) {
    this.frameDoc = this.sanitizer.bypassSecurityTrustHtml(
      previewAvatarAppearanceAframeScene(value, this.width, this.height)
    );
  }

  frameDoc!: SafeHtml;

  @Input() height = '300px';
  @Input() width = '100%';

  constructor(private sanitizer: DomSanitizer) {}
}
