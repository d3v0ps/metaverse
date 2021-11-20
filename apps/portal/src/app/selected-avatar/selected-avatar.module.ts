import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BemModule } from 'angular-bem';
import { SelectedAvatarScene } from './scenes/selected-avatar/selected-avatar.scene';
import { SelectedAvatarRoutingModule } from './selected-avatar-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    BemModule,
    SelectedAvatarRoutingModule,
  ],
  declarations: [SelectedAvatarScene],
})
export class SelectedAvatarModule {}
