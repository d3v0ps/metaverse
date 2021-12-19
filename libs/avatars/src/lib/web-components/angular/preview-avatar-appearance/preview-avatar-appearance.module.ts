import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// import 'aframe';
import { PreviewAvatarAppearanceComponent } from './preview-avatar-appearance.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PreviewAvatarAppearanceComponent],
  exports: [PreviewAvatarAppearanceComponent],
})
export class PreviewAvatarAppearanceModule {}
