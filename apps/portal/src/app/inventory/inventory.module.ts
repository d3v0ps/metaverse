import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BemModule } from 'angular-bem';
import { AssetDetailModule } from './components/asset-detail/asset-detail.module';
import { AssetsGridModule } from './components/assets-grid/assets-grid.module';
import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryScene } from './scenes/inventory.scene';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    BemModule,
    InventoryRoutingModule,
    AssetDetailModule,
    AssetsGridModule,
  ],
  declarations: [InventoryScene],
})
export class InventoryModule {}
