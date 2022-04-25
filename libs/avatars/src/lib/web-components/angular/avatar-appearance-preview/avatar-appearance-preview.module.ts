import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AvatarAppearancePreviewComponent } from './avatar-appearance-preview.component';
import { AvatarAppearancePreviewImageModule } from './components/avatar-appearance-preview-image/avatar-appearance-preview-image.module';
import { AvatarAppearancePreviewModelViewerModule } from './components/avatar-appearance-preview-model-viewer/avatar-appearance-preview-model-viewer.module';

@NgModule({
  imports: [
    CommonModule,
    AvatarAppearancePreviewModelViewerModule,
    AvatarAppearancePreviewImageModule,
  ],
  declarations: [AvatarAppearancePreviewComponent],
  exports: [AvatarAppearancePreviewComponent],
})
export class AvatarAppearancePreviewModule {}
