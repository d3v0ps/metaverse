import { NgModule } from '@angular/core';
import { EssentialsModule } from '@central-factory/web-components/angular/essentials.module';
import { BurgMapComponent } from './burg-map.component';

@NgModule({
  imports: [EssentialsModule],
  declarations: [BurgMapComponent],
  exports: [BurgMapComponent],
})
export class BurgMapModule {}
