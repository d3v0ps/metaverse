import { Component, Input } from '@angular/core';
import { Asset, AssetKind } from '@central-factory/core';

/** Inventory main scene */
@Component({
  selector: 'cf-inventory',
  template: `
    <div block="scene-content">
      <div fxLayout="row" fxFlexFill fxLayoutGap="1rem">
        <div fxFlex="70">
          <cf-assets-grid [assets]="assets"></cf-assets-grid>
        </div>
        <div fxFlex="30">
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
      name: 'Asset 1',
      model: 'Scarf 1',
      producer: 'Central Factory',
      owner: 'John Doe',
      description: 'This is the first asset',
      kind: AssetKind.Equipment,
      previewUrl: 'https://picsum.photos/id/758/200/200',
      url: 'https://picsum.photos/id/758/200/200',
      currentValue: 150,
      purchaseValue: 100,
      purchaseDate: new Date(),
      digital: true,
      private: true,
    },
    {
      id: '2',
      name: 'Asset 2',
      model: 'Scarf 1',
      producer: 'Central Factory',
      owner: 'John Doe',
      description: 'This is the first asset',
      kind: AssetKind.Equipment,
      previewUrl: 'https://picsum.photos/id/758/200/200',
      url: 'https://picsum.photos/id/758/200/200',
      currentValue: 150,
      purchaseValue: 100,
      purchaseDate: new Date(),
      digital: true,
      private: true,
    },
    {
      id: '3',
      name: 'Asset 3',
      model: 'Scarf 1',
      producer: 'Central Factory',
      owner: 'John Doe',
      description: 'This is the first asset',
      kind: AssetKind.Equipment,
      previewUrl: 'https://picsum.photos/id/758/200/200',
      url: 'https://picsum.photos/id/758/200/200',
      currentValue: 150,
      purchaseValue: 100,
      purchaseDate: new Date(),
      digital: true,
      private: true,
    },
    {
      id: '4',
      name: 'Asset 4',
      model: 'Scarf 1',
      producer: 'Central Factory',
      owner: 'John Doe',
      description: 'This is the first asset',
      kind: AssetKind.Equipment,
      previewUrl: 'https://picsum.photos/id/758/200/200',
      url: 'https://picsum.photos/id/758/200/200',
      currentValue: 150,
      purchaseValue: 100,
      purchaseDate: new Date(),
      digital: true,
      private: true,
    },
    {
      id: '5',
      name: 'Asset 5',
      model: 'Scarf 1',
      producer: 'Central Factory',
      owner: 'John Doe',
      description: 'This is the first asset',
      kind: AssetKind.Equipment,
      previewUrl: 'https://picsum.photos/id/758/200/200',
      url: 'https://picsum.photos/id/758/200/200',
      currentValue: 150,
      purchaseValue: 100,
      purchaseDate: new Date(),
      digital: true,
      private: true,
    },
    {
      id: '6',
      name: 'Asset 6',
      model: 'Scarf 1',
      producer: 'Central Factory',
      owner: 'John Doe',
      description: 'This is the first asset',
      kind: AssetKind.Equipment,
      previewUrl: 'https://picsum.photos/id/758/200/200',
      url: 'https://picsum.photos/id/758/200/200',
      currentValue: 150,
      purchaseValue: 100,
      purchaseDate: new Date(),
      digital: true,
      private: true,
    },
  ];

  @Input() selectedAsset: Asset = {
    id: '1',
    name: 'Asset 1',
    model: 'Scarf 1',
    producer: 'Central Factory',
    owner: 'John Doe',
    description: 'This is the first asset',
    kind: AssetKind.Equipment,
    previewUrl: 'https://picsum.photos/id/758/200/200',
    url: 'https://picsum.photos/id/758/200/200',
    currentValue: 150,
    purchaseValue: 100,
    purchaseDate: new Date(),
    digital: true,
    private: true,
  };
}
