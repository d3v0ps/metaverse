import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { SvgIconModule } from '@central-factory/web-components/angular/svg-icon/svg-icon.module';
import { EraTitleComponent } from './era-title.component';

@NgModule({
  imports: [CommonModule, BemModule, SvgIconModule],
  declarations: [EraTitleComponent],
  exports: [EraTitleComponent],
})
export class EraTitleModule {}
