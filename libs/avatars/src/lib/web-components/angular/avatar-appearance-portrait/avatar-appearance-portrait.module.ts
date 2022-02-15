import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { SvgIconModule } from '@central-factory/web-components/angular/svg-icon/svg-icon.module';
import { AvatarAppearancePortraitComponent } from './avatar-appearance-portrait.component';
import { AvatarAppearancePortraitAvataaarsModule } from './components/avatar-appearance-portrait-avataaars/avatar-appearance-portrait-avataaars.module';

@NgModule({
  declarations: [AvatarAppearancePortraitComponent],
  imports: [
    CommonModule,
    BemModule,
    SvgIconModule,
    AvatarAppearancePortraitAvataaarsModule,
  ],
  exports: [AvatarAppearancePortraitComponent],
})
export class AvatarAppearancePortraitModule {}
