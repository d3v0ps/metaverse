import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BemModule } from '../bem/bem.module';
import { CasePipe } from './pipes/case.pipe';
import { TypographyComponent } from './typography.component';

@NgModule({
  imports: [CommonModule, BemModule],
  exports: [TypographyComponent, CasePipe],
  declarations: [TypographyComponent, CasePipe],
})
export class TypographyModule {}
