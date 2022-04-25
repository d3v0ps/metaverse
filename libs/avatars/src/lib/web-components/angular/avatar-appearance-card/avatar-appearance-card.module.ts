import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { SvgIconModule } from '@central-factory/web-components/angular/svg-icon/svg-icon.module';
import { AvatarAppearancePreviewModule } from '../avatar-appearance-preview/avatar-appearance-preview.module';
import { AvatarAppearanceCardComponent } from './avatar-appearance-card.component';

@NgModule({
  declarations: [AvatarAppearanceCardComponent],
  imports: [
    CommonModule,
    BemModule,
    SvgIconModule,
    AvatarAppearancePreviewModule,
  ],
  exports: [AvatarAppearanceCardComponent],
})
export class AvatarAppearanceCardModule {}
