import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { ApplicationDescriptionComponent } from './application-description.component';

@NgModule({
  imports: [CommonModule, BemModule],
  declarations: [ApplicationDescriptionComponent],
  exports: [ApplicationDescriptionComponent],
})
export class ApplicationDescriptionModule {}
