import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import type { Appearance } from '../../../models/appearance';
import { previewAvatarAppearanceAframeScene } from './preview-avatar-appearance.aframe-scene';

@Component({
  selector: 'cf-preview-avatar-appearance',
  template: `
    <!-- iframe
      *ngIf="frameDoc"
      style="width: {{ width }}; height: {{ height }};"
      [srcdoc]="frameDoc"
    ></iframe-->
    <model-viewer
      style="width: {{ width }}; height: {{ height }};"
      *ngIf="appearance?.src"
      [src]="appearance?.src"
      ar
      ar-modes="webxr scene-viewer quick-look"
      seamless-poster
      shadow-intensity="1"
      camera-controls
    ></model-viewer>
  `,
})
export class PreviewAvatarAppearanceComponent {
  @Input() set appearance(value: Appearance | undefined) {
    this._appearance = value;
    if (!value) {
      return;
    }

    this.frameDoc = this.sanitizer.bypassSecurityTrustHtml(
      previewAvatarAppearanceAframeScene(value, this.width, this.height)
    );
  }
  get appearance(): Appearance | undefined {
    return this._appearance;
  }

  frameDoc!: SafeHtml;

  @Input() height = '300px';
  @Input() width = '100%';

  private _appearance?: Appearance;

  constructor(private sanitizer: DomSanitizer) {}
}
