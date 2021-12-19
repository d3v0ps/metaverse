import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AvatarsCarouselModule } from '@central-factory/avatars/web-components/angular/avatars-carousel/avatars-carousel.module';
import { BemModule } from 'angular-bem';
import { SelectAvatarRoutingModule } from './select-avatar-routing.module';
import { SelectAvatarScene } from './select-avatar.scene';

@NgModule({
  imports: [
    CommonModule,
    BemModule,
    AvatarsCarouselModule,
    SelectAvatarRoutingModule,
  ],
  declarations: [SelectAvatarScene],
})
export class SelectAvatarModule {}
