import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
// import 'aframe';
import { PreviewAvatarAppearanceScene } from './preview-avatar-appearance.scene';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [PreviewAvatarAppearanceScene],
  exports: [PreviewAvatarAppearanceScene],
})
export class PreviewAvatarAppearanceModule {}
