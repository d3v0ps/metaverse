import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BemModule } from 'angular-bem';
import { CreateAvatarRoutingModule } from './create-avatar-routing.module';
import { CreateAvatarScene } from './scenes/create-avatar.scene';

@NgModule({
  imports: [CommonModule, BemModule, CreateAvatarRoutingModule],
  declarations: [CreateAvatarScene],
})
export class CreateAvatarModule {}
