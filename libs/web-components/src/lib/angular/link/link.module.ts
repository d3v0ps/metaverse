import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BemModule } from '../bem/bem.module';
import { TypographyModule } from '../typography/typography.module';
import { LinkComponent } from './link.component';

@NgModule({
  imports: [CommonModule, BemModule, TypographyModule],
  exports: [LinkComponent],
  declarations: [LinkComponent],
})
export class LinkModule {}
