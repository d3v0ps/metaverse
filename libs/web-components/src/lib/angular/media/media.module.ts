import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { SvgIconModule } from '@central-factory/web-components/angular/svg-icon/svg-icon.module';
import { MediaComponent } from './media.component';

@NgModule({
  imports: [CommonModule, BemModule, SvgIconModule],
  declarations: [MediaComponent],
  exports: [MediaComponent],
})
export class MediaModule {}
