import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Appearance } from '../../../../../models/appearance';

@Component({
  selector: 'cf-avatar-appearance-preview-model-viewer',
  template: `
    <model-viewer
      style="width: {{ width }}; height: {{ height }};"
      *ngIf="src"
      [src]="src"
      bounds="tight"
      ar
      ar-modes="webxr scene-viewer quick-look"
      seamless-poster
      shadow-intensity="1"
      camera-controls
      environment-image="assets/model-viewer/environments/aircraft_workshop_01_1k.hdr"
    ></model-viewer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarAppearancePreviewModelViewerComponent {
  @Input() set appearance(value: Appearance | undefined) {
    if (value?.src === this.src) {
      return;
    }

    this.src = value?.src;
  }

  @Input() width = '100%';
  @Input() height = '300px';

  src?: string;
}
