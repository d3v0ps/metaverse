import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BemModule } from 'angular-bem';
import { SettingsScene } from './scenes/settings.scene';
import { SettingsRoutingModule } from './settings-routing.module';

@NgModule({
  declarations: [SettingsScene],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    BemModule,
    SettingsRoutingModule,
  ],
  exports: [],
})
export class SettingsModule {}
