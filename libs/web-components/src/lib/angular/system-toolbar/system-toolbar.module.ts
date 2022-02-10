import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BemModule } from '../bem/bem.module';
import { CommandBarModule } from '../command-bar/command-bar.module';
import { SvgIconModule } from '../svg-icon/svg-icon.module';
import { SystemToolbarComponent } from './system-toolbar.component';

@NgModule({
  declarations: [SystemToolbarComponent],
  imports: [CommonModule, BemModule, SvgIconModule, CommandBarModule],
  exports: [SystemToolbarComponent],
})
export class SystemToolbarModule {}
