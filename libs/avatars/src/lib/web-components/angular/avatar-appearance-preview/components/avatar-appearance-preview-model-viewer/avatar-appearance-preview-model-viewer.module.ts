import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import '@google/model-viewer';
import { AvatarAppearancePreviewModelViewerComponent } from './avatar-appearance-preview-model-viewer.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AvatarAppearancePreviewModelViewerComponent],
  exports: [AvatarAppearancePreviewModelViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AvatarAppearancePreviewModelViewerModule {}
