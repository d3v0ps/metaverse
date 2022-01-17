import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { AvatarAppearancePortraitModule } from '../avatar-appearance-portrait/avatar-appearance-portrait.module';
import { AvatarsCarouselComponent } from './avatars-carousel.component';

@NgModule({
  declarations: [AvatarsCarouselComponent],
  imports: [CommonModule, BemModule, AvatarAppearancePortraitModule],
  exports: [AvatarsCarouselComponent],
})
export class AvatarsCarouselModule {}
