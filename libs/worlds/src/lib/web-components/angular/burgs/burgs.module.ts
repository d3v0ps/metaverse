import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { BurgMapModule } from './burg-map/burg-map.module';
import { BurgScene } from './burg.scene';

@NgModule({
  imports: [CommonModule, BemModule, BurgMapModule],
  declarations: [BurgScene],
  exports: [BurgScene],
})
export class BurgsModule {}
