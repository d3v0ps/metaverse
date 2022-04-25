import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BemModule } from './bem/bem.module';
import { ButtonModule } from './button/button.module';
import { SvgIconModule } from './svg-icon/svg-icon.module';
import { TypographyModule } from './typography/typography.module';

@NgModule({
  imports: [
    CommonModule,
    BemModule,
    SvgIconModule,
    TypographyModule,
    ButtonModule,
  ],
  exports: [
    CommonModule,
    BemModule,
    SvgIconModule,
    TypographyModule,
    ButtonModule,
  ],
  declarations: [],
  providers: [],
})
export class EssentialsModule {}
