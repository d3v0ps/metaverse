import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MetadronesMainScene } from './metadrones-main.scene';
import { MetadronesRoot } from './metadrones.root';

@NgModule({
  imports: [CommonModule, RouterModule, LeafletModule],
  declarations: [MetadronesRoot, MetadronesMainScene],
  exports: [MetadronesRoot],
})
export class MetadronesRootModule {}
