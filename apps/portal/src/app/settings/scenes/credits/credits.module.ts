import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { CreditsRoutingModule } from './credits-routing.module';
import { CreditsScene } from './credits.scene';

@NgModule({
  declarations: [CreditsScene],
  imports: [CommonModule, BemModule, CreditsRoutingModule],
  exports: [],
})
export class CreditsModule {}
