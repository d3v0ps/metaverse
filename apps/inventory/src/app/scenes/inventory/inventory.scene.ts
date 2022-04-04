import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { OnApplicationLoad } from '@central-factory/applications/models/application-interfaces';
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
      <div cfBlock="inventory" *ngIf="data.assets">
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
      .inventory {
        display: grid;
        grid-template-columns: 1.5fr 1fr;
        grid-template-rows: 1fr;
        gap: 2rem;

        &__assets-grid {
          overflow: auto;
        }

        &__asset-detail {
        }
      }
    `,
  ],
})
export class InventoryScene implements OnInit, OnApplicationLoad {
  public readonly assets$ = this.userAssetsRepository.assets$;

  selectedAsset?: Asset;

  @Output() applicationLoad = new EventEmitter<void>();

  constructor(private readonly userAssetsRepository: UserAssetsState) {}

  ngOnInit(): void {
    this.applicationLoad.emit();
  }

  onGridAssetClick(asset: Asset) {
    this.selectedAsset = asset;
  }
}
