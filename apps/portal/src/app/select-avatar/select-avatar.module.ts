import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BemModule } from 'angular-bem';
import { AvatarsCarouselModule } from './components/avatars-carousel/avatars-carousel.module';
import { SelectAvatarScene } from './scenes/select-avatar.scene';
import { SelectAvatarRoutingModule } from './select-avatar-routing.module';

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
