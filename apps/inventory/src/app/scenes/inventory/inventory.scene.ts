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
      <div cfBlock="scene-content" cfMod="inventory" *ngIf="data.assets">
        <cf-assets-grid
          [assets]="data.assets"
          [activeAsset]="selectedAsset"
          (assetClick)="onGridAssetClick($event)"
        ></cf-assets-grid>
        <cf-asset-detail
          *ngIf="selectedAsset"
          [asset]="selectedAsset"
        ></cf-asset-detail>
      </div>
    </ng-container>
  `,
  styles: [
    `
      .scene-content {
        &--inventory {
          display: flex;
          gap: 2rem;
        }
      }
    `,
  ],
})
export class InventoryScene {
  public readonly assets$ = this.userAssetsRepository.assets$;

  selectedAsset?: Asset;

  constructor(private readonly userAssetsRepository: UserAssetsState) {}

  onGridAssetClick(asset: Asset) {
    this.selectedAsset = asset;
  }
}
