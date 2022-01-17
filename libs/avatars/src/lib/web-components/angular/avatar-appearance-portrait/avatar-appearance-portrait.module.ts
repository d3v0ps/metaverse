import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { SvgIconModule } from '@central-factory/web-components/angular/svg-icon/svg-icon.module';
import { AvatarAppearancePortraitComponent } from './avatar-appearance-portrait.component';

@NgModule({
  declarations: [AvatarAppearancePortraitComponent],
  imports: [CommonModule, BemModule, SvgIconModule],
  exports: [AvatarAppearancePortraitComponent],
})
export class AvatarAppearancePortraitModule {}
