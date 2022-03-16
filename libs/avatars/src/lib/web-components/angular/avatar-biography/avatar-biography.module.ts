import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AvatarAppearancePortraitModule } from '@central-factory/avatars/web-components/angular/avatar-appearance-portrait/avatar-appearance-portrait.module';
import { AvatarsCarouselModule } from '@central-factory/avatars/web-components/angular/avatars-carousel/avatars-carousel.module';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { SvgIconModule } from '@central-factory/web-components/angular/svg-icon/svg-icon.module';
import { AgeModule } from '@central-factory/worlds/web-components/angular/age/age.module';
import { AvatarBiographyComponent } from './avatar-biography.component';

@NgModule({
  imports: [
    CommonModule,
    BemModule,
    AvatarAppearancePortraitModule,
    AvatarsCarouselModule,
    SvgIconModule,
    AgeModule,
  ],
  declarations: [AvatarBiographyComponent],
  exports: [AvatarBiographyComponent],
})
export class AvatarBiographyModule {}
