import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { SvgIconModule } from '@central-factory/web-components/angular/svg-icon/svg-icon.module';
import { AvatarAppearancesCarouselModule } from '../avatar-appearances-carousel/avatar-appearances-carousel.module';
import { AvatarAppearancesComponent } from './avatar-appearances.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BemModule,
    SvgIconModule,
    AvatarAppearancesCarouselModule,
  ],
  declarations: [AvatarAppearancesComponent],
  exports: [AvatarAppearancesComponent],
})
export class AvatarAppearancesModule {}
