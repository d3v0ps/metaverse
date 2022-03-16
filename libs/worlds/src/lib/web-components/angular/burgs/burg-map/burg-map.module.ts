import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { BurgMapComponent } from './burg-map.component';

@NgModule({
  imports: [CommonModule, BemModule],
  declarations: [BurgMapComponent],
  exports: [BurgMapComponent],
})
export class BurgMapModule {}
