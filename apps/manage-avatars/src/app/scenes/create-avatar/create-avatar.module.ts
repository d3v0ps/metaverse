import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { CreateAvatarRoutingModule } from './create-avatar-routing.module';
import { CreateAvatarScene } from './create-avatar.scene';

@NgModule({
  imports: [CommonModule, BemModule, CreateAvatarRoutingModule],
  declarations: [CreateAvatarScene],
})
export class CreateAvatarModule {}
