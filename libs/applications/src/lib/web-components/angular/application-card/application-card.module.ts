import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { SvgIconModule } from '@central-factory/web-components/angular/svg-icon/svg-icon.module';
import { ApplicationCardComponent } from './application-card.component';

@NgModule({
  imports: [CommonModule, BemModule, SvgIconModule],
  declarations: [ApplicationCardComponent],
  exports: [ApplicationCardComponent],
})
export class ApplicationCardModule {}
