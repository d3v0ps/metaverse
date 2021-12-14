import { Component, Input } from '@angular/core';
import { Asset, AssetKind } from '@central-factory/core';

/** Inventory main scene */
@Component({
  selector: 'cf-inventory',
  template: `
    <div block="scene-content">
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
  @Input() assets: Asset[] = [
    {
      id: '1',
      name: "Raven's Cloak",
      model: "Raven's Cloak",
      producer: 'Shop5363155 Store',
      owner: 'Metam',
      description: 'Microfiber hooded cloak with fleece lining',
      kind: AssetKind.Equipment,
      previewUrl: 'https://i.imgur.com/ukcsu1q.png',
      url: 'https://es.aliexpress.com/item/1005001952208453.html',
      currentValue: 23.62,
      purchaseValue: 23.62,
      purchaseDate: new Date(),
      digital: false,
      private: true,
    },
    {
      id: '2',
      name: "Foundation's Coat",
      model: "Foundation's Coat",
      producer: 'Shop1948549 Store',
      owner: 'Metam',
      description: 'Hooded coat with thick fleece lining',
      kind: AssetKind.Equipment,
      previewUrl: 'https://i.imgur.com/w1XmjIj.png',
      url: 'https://es.aliexpress.com/item/1005003209038453.html',
      currentValue: 43.9,
      purchaseValue: 43.9,
      purchaseDate: new Date(),
      digital: false,
      private: true,
    },
    // {
    //   id: '4',
    //   name: 'Asset 4',
    //   model: 'Scarf 1',
    //   producer: 'Central Factory',
    //   owner: 'John Doe',
    //   description: 'This is the first asset',
    //   kind: AssetKind.Equipment,
    //   previewUrl: 'https://picsum.photos/id/758/200/200',
    //   url: 'https://picsum.photos/id/758/200/200',
    //   currentValue: 150,
    //   purchaseValue: 100,
    //   purchaseDate: new Date(),
    //   digital: true,
    //   private: true,
    // },
    // {
    //   id: '1',
    //   name: 'Asset 1',
    //   model: 'Scarf 1',
    //   producer: 'Central Factory',
    //   owner: 'John Doe',
    //   description: 'This is the first asset',
    //   kind: AssetKind.Equipment,
    //   previewUrl: 'https://picsum.photos/id/758/200/200',
    //   url: 'https://picsum.photos/id/758/200/200',
    //   currentValue: 150,
    //   purchaseValue: 100,
    //   purchaseDate: new Date(),
    //   digital: true,
    //   private: true,
    // },
    // {
    //   id: '5',
    //   name: 'Asset 5',
    //   model: 'Scarf 1',
    //   producer: 'Central Factory',
    //   owner: 'John Doe',
    //   description: 'This is the first asset',
    //   kind: AssetKind.Equipment,
    //   previewUrl: 'https://picsum.photos/id/758/200/200',
    //   url: 'https://picsum.photos/id/758/200/200',
    //   currentValue: 150,
    //   purchaseValue: 100,
    //   purchaseDate: new Date(),
    //   digital: true,
    //   private: true,
    // },
    // {
    //   id: '6',
    //   name: 'Asset 6',
    //   model: 'Scarf 1',
    //   producer: 'Central Factory',
    //   owner: 'John Doe',
    //   description: 'This is the first asset',
    //   kind: AssetKind.Equipment,
    //   previewUrl: 'https://picsum.photos/id/758/200/200',
    //   url: 'https://picsum.photos/id/758/200/200',
    //   currentValue: 150,
    //   purchaseValue: 100,
    //   purchaseDate: new Date(),
    //   digital: true,
    //   private: true,
    // },
  ];

  @Input() selectedAsset: Asset = {
    id: '1',
    name: "Raven's Cloak",
    model: "Raven's Cloak",
    producer: 'Shop5363155 Store',
    owner: 'Metam',
    description: 'Microfiber hooded cloak with fleece lining',
    kind: AssetKind.Equipment,
    previewUrl: 'https://i.imgur.com/ukcsu1q.png',
    url: 'https://es.aliexpress.com/item/1005001952208453.html',
    currentValue: 23.62,
    purchaseValue: 23.62,
    purchaseDate: new Date(),
    digital: false,
    private: true,
  };

  onGridAssetClick(asset: Asset) {
    this.selectedAsset = asset;
  }
}
