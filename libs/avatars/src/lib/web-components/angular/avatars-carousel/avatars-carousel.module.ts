import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BemModule } from 'angular-bem';
import { AvatarsCarouselComponent } from './avatars-carousel.component';

@NgModule({
  declarations: [AvatarsCarouselComponent],
  imports: [CommonModule, BemModule],
  exports: [AvatarsCarouselComponent],
})
export class AvatarsCarouselModule {}