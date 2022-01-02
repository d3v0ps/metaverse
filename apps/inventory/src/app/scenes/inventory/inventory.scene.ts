import { Component } from '@angular/core';
import { Asset } from '@central-factory/assets';
import { UserAssetsState } from '@central-factory/assets/states/user-assets.state';

/** Inventory main scene */
@Component({
  selector: 'cf-inventory',
  template: `
    <ng-container
      *ngIf="{
        assets: assets$ | async
      } as data"
    >
      <div cfBlock="scene-content" *ngIf="data.assets">
        <div fxLayout="row" fxFlexFill fxLayoutGap="1rem">
          <div fxFlex="70" fxFlex.lt-md="50" fxFlex.lt-sm="30">
            <cf-assets-grid
              [assets]="data.assets"
              [activeAsset]="selectedAsset"
              (assetClick)="onGridAssetClick($event)"
            ></cf-assets-grid>
          </div>
          <div fxFlex="30" fxFlex.lt-md="50" fxFlex.lt-sm="70">
            <cf-asset-detail
              *ngIf="selectedAsset"
              [asset]="selectedAsset"
            ></cf-asset-detail>
          </div>
        </div>
      </div>
    </ng-container>
  `,
})
export class InventoryScene {
  public readonly assets$ = this.userAssetsRepository.assets$;

  selectedAsset?: Asset;

  constructor(private readonly userAssetsRepository: UserAssetsState) {}

  onGridAssetClick(asset: Asset) {
    this.selectedAsset = asset;
  }
}
