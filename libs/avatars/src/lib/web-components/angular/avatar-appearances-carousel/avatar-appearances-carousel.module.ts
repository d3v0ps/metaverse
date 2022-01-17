import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { AvatarAppearanceCardModule } from '../avatar-appearance-card/avatar-appearance-card.module';
import { AvatarAppearancesCarouselComponent } from './avatar-appearances-carousel.component';

@NgModule({
  imports: [CommonModule, BemModule, AvatarAppearanceCardModule],
  declarations: [AvatarAppearancesCarouselComponent],
  exports: [AvatarAppearancesCarouselComponent],
})
export class AvatarAppearancesCarouselModule {}
