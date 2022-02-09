import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { SvgIconModule } from '@central-factory/web-components/angular/svg-icon/svg-icon.module';
import { ApplicationIconComponent } from './application-icon.component';

@NgModule({
  imports: [CommonModule, BemModule, SvgIconModule],
  declarations: [ApplicationIconComponent],
  exports: [ApplicationIconComponent],
})
export class ApplicationIconModule {}
