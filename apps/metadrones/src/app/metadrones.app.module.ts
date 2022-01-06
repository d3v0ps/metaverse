import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './metadrones-routing.module';
import { MetadronesRoot } from './metadrones.root';
import { MetadronesRootModule } from './metadrones.root.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    MetadronesRootModule,
    RouterModule.forRoot(routes),
  ],
  bootstrap: [MetadronesRoot],
})
export class MetadronesAppModule {}
