import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { ApplicationIconModule } from '../application-icon/application-icon.module';
import { ApplicationInfoModule } from '../application-info/application-info.module';
import { ApplicationHeaderComponent } from './application-header.component';

@NgModule({
  imports: [
    CommonModule,
    BemModule,
    ApplicationInfoModule,
    ApplicationIconModule,
  ],
  declarations: [ApplicationHeaderComponent],
  exports: [ApplicationHeaderComponent],
})
export class ApplicationHeaderModule {}
