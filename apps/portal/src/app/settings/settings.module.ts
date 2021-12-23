import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { NgSelectModule } from '@ng-select/ng-select';
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
    NgSelectModule,
    SettingsRoutingModule,
  ],
  exports: [],
})
export class SettingsModule {}
