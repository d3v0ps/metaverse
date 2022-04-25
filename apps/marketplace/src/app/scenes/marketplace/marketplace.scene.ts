import { Component } from '@angular/core';
import { OpenSeaAssetsCatalog } from '@central-factory/assets/catalogs/opensea.catalog';

/** Marketplace main scene */
@Component({
  selector: 'cf-marketplace',
  template: `
    <div cfBlock="scene-content">
      <h5>Marketplace</h5>

      <ng-container *ngIf="assets$ | async as assets">
        <ng-container *ngFor="let asset of assets">
          {{ asset.name }}
          {{ asset.description }}
          {{ asset.currentValue?.usd | currency }}
          <img width="200px" [src]="asset.previewUrl" />
        </ng-container>
      </ng-container>
    </div>
  `,
})
export class MarketplaceScene {
  assets$ = this.openSeaAssetsCatalog.fetchAssets();

  constructor(private openSeaAssetsCatalog: OpenSeaAssetsCatalog) {}
}
