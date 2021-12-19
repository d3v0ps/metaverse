import { Component, Input } from '@angular/core';
import { Asset, Equipment } from '@central-factory/assets';
import { equipmentsMocks } from '@central-factory/assets/mocks/equipments';

/** Inventory main scene */
@Component({
  selector: 'cf-inventory',
  template: `
    <div cfBlock="scene-content">
      <div fxLayout="row" fxFlexFill fxLayoutGap="1rem">
        <div fxFlex="70" fxFlex.lt-md="50" fxFlex.lt-sm="30">
          <cf-assets-grid
            [assets]="assets"
            [activeAsset]="selectedAsset"
            (assetClick)="onGridAssetClick($event)"
          ></cf-assets-grid>
        </div>
        <div fxFlex="30" fxFlex.lt-md="50" fxFlex.lt-sm="70">
          <cf-asset-detail [asset]="selectedAsset"></cf-asset-detail>
        </div>
      </div>
    </div>
  `,
})
export class InventoryScene {
  @Input() assets: Asset<Equipment>[] = equipmentsMocks;

  @Input() selectedAsset: Asset<Equipment> = equipmentsMocks[0];

  onGridAssetClick(asset: Asset<Equipment>) {
    this.selectedAsset = asset;
  }
}
