import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BemModule } from '../bem/bem.module';
import { TypographyComponent } from './typography.component';

@NgModule({
  imports: [CommonModule, BemModule],
  exports: [TypographyComponent],
  declarations: [TypographyComponent],
})
export class TypographyModule {}
