import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BemModule } from '../bem/bem.module';
import { BadgeComponent } from './badge.component';

@NgModule({
  imports: [CommonModule, BemModule],
  exports: [BadgeComponent],
  declarations: [BadgeComponent],
})
export class BadgeModule {}
