import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { SettingsNavComponent } from './components/settings-nav/settings-nav.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsScene } from './settings.scene';

@NgModule({
  declarations: [SettingsScene, SettingsNavComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BemModule,
    NgSelectModule,
    SettingsRoutingModule,
  ],
  exports: [],
})
export class SettingsModule {}
