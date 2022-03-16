import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { WorldMapComponent } from './world-map.component';

@NgModule({
  imports: [CommonModule, BemModule],
  declarations: [WorldMapComponent],
  exports: [WorldMapComponent],
})
export class WorldMapModule {}
