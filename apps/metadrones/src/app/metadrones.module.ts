import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MetadronesMainScene } from './metadrones-main.scene';
import { MetadronesRoutingModule } from './metadrones-routing.module';
import { MetadronesRoot } from './metadrones.root';

@NgModule({
  imports: [CommonModule, BrowserModule, MetadronesRoutingModule],
  declarations: [MetadronesRoot, MetadronesMainScene],
  bootstrap: [MetadronesRoot],
})
export class MetadronesModule {}
