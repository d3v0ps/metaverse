import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { AvatarAppearancePreviewImageComponent } from './avatar-appearance-preview-image.component';

@NgModule({
  declarations: [AvatarAppearancePreviewImageComponent],
  imports: [CommonModule, BemModule],
  exports: [AvatarAppearancePreviewImageComponent],
})
export class AvatarAppearancePreviewImageModule {}
