import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { ApplicationInfoComponent } from './application-info.component';

@NgModule({
  imports: [CommonModule, BemModule],
  declarations: [ApplicationInfoComponent],
  exports: [ApplicationInfoComponent],
})
export class ApplicationInfoModule {}
