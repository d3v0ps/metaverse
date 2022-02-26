import { Component } from '@angular/core';
import { Asset } from '@central-factory/assets/models/asset';
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
        <div cfElem="assets-grid">
          <cf-assets-grid
            [assets]="data.assets"
            [activeAsset]="selectedAsset"
            (assetClick)="onGridAssetClick($event)"
          ></cf-assets-grid>
        </div>
        <div cfElem="asset-detail">
          <cf-asset-detail
            *ngIf="selectedAsset"
            [asset]="selectedAsset"
          ></cf-asset-detail>
        </div>
      </div>
    </ng-container>
  `,
  styles: [
    `
      .scene-content {
        &--inventory {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          grid-template-rows: 1fr;
          gap: 2rem;

          .scene-content__assets-grid {
            overflow: auto;
          }

          .scene-content__asset-detail {
          }
        }
      }
    `,
  ],
})
export class InventoryScene {
  public readonly assets$ = this.userAssetsRepository.assets$;

  selectedAsset?: Asset;

  constructor(private readonly userAssetsRepository: UserAssetsState) { }

  onGridAssetClick(asset: Asset) {
    this.selectedAsset = asset;
  }
}
