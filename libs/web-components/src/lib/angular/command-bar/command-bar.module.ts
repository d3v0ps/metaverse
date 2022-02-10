import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { BemModule } from '../bem/bem.module';
import { SvgIconModule } from '../svg-icon/svg-icon.module';
import { CommandBarComponent } from './command-bar.component';

@NgModule({
  declarations: [CommandBarComponent],
  imports: [
    CommonModule,
    BemModule,
    SvgIconModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
  ],
  exports: [CommandBarComponent],
})
export class CommandBarModule {}
