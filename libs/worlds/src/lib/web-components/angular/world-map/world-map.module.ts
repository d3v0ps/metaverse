import { NgModule } from '@angular/core';
import { EssentialsModule } from '@central-factory/web-components/angular/essentials.module';
import { WorldMapComponent } from './world-map.component';

@NgModule({
  imports: [EssentialsModule],
  declarations: [WorldMapComponent],
  exports: [WorldMapComponent],
})
export class WorldMapModule {}
