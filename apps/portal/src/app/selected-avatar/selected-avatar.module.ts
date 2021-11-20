import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectedAvatarScene } from './scenes/selected-avatar/selected-avatar.scene';
import { SelectedAvatarRoutingModule } from './selected-avatar-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SelectedAvatarRoutingModule,
  ],
  declarations: [SelectedAvatarScene],
})
export class SelectedAvatarModule {}
