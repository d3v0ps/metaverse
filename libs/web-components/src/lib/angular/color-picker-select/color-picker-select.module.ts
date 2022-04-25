import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BemModule } from '../bem/bem.module';
import { PopoverModule } from '../popover/popover.module';
import { SvgIconModule } from '../svg-icon/svg-icon.module';
import { ColorPickerSelectComponent } from './color-picker-select.component';

@NgModule({
  declarations: [ColorPickerSelectComponent],
  imports: [CommonModule, SvgIconModule, BemModule, PopoverModule],
  exports: [ColorPickerSelectComponent],
})
export class ColorPickerSelectModule {}
