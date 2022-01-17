import { Component, Input } from '@angular/core';
import { Appearance } from '../../../../../models/appearance';

@Component({
  selector: 'cf-avatar-appearance-preview-model-viewer',
  template: `
    <model-viewer
      style="width: {{ width }}; height: {{ height }};"
      *ngIf="appearance?.src"
      [src]="appearance?.src"
      bounds="tight"
      ar
      ar-modes="webxr scene-viewer quick-look"
      seamless-poster
      shadow-intensity="1"
      camera-controls
      environment-image="assets/model-viewer/environments/aircraft_workshop_01_1k.hdr"
    ></model-viewer>
  `,
})
export class AvatarAppearancePreviewModelViewerComponent {
  @Input() appearance?: Appearance;

  @Input() width = '100%';
  @Input() height = '300px';
}
