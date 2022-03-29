import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { SvgIconModule } from '@central-factory/web-components/angular/svg-icon/svg-icon.module';
import { EraTitleModule } from '../eras/era-title/era-title.module';
import { WorldCardComponent } from './world-card.component';

@NgModule({
  imports: [CommonModule, BemModule, SvgIconModule, EraTitleModule],
  declarations: [WorldCardComponent],
  exports: [WorldCardComponent],
})
export class WorldCardModule {}
