import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AssetDetailModule } from '@central-factory/assets/web-components/angular/asset-detail/asset-detail.module';
import { AssetsGridModule } from '@central-factory/assets/web-components/angular/assets-grid/assets-grid.module';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryScene } from './inventory.scene';

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
