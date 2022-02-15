import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { AvatarAppearancePortraitAvataaarsComponent } from './avatar-appearance-portrait-avataaars.component';

@NgModule({
  declarations: [AvatarAppearancePortraitAvataaarsComponent],
  imports: [CommonModule, BemModule],
  exports: [AvatarAppearancePortraitAvataaarsComponent],
})
export class AvatarAppearancePortraitAvataaarsModule {}
