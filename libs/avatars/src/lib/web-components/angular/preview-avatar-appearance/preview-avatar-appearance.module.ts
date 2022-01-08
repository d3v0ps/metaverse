import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import '@google/model-viewer';
// import 'aframe';
import { PreviewAvatarAppearanceComponent } from './preview-avatar-appearance.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PreviewAvatarAppearanceComponent],
  exports: [PreviewAvatarAppearanceComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PreviewAvatarAppearanceModule {}
