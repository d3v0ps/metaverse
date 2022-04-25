import { Component } from '@angular/core';
import { Asset, AssetKind, Consumable } from '@central-factory/assets/models';
import { Observable, of } from 'rxjs';

/** Marketplace component */
@Component({
  selector: 'cf-marketplace',
  template: `
    <div cfBlock="marketplace">
      <ul>
        <li *ngFor="let consumable of consumables$ | async">
          {{ consumable.name }}
          <cf-button
            text="Add to Cart"
            icon="assets/icons/mdi/cart-arrow-down.svg"
          ></cf-button>
        </li>
      </ul>
      <ul>
        <li *ngFor="let clothes of clothes$ | async">
          {{ clothes.name }}
          <cf-button
            text="Add to Cart"
            icon="assets/icons/mdi/cart-arrow-down.svg"
          ></cf-button>
        </li>
      </ul>
      <ul>
        <li *ngFor="let furniture of furnitures$ | async">
          {{ furniture.name }}
          <cf-button
            text="Add to Cart"
            icon="assets/icons/mdi/cart-arrow-down.svg"
          ></cf-button>
        </li>
      </ul>
    </div>
  `,
})
export class MarketplaceComponent {
  // TODO: Create a "Product" model with stock
  consumables$: Observable<Asset<Consumable>[]> = of([
    {
      id: '1',
      name: 'Coffee',
      description: 'A delicious cup of coffee',
      digital: false,
      kind: AssetKind.Consumable,
      previewUrl: 'assets/images/coffee.jpg',
      owner: 'Mercadona',
      producer: 'Starbucks',
    },
  ]);
  clothes$: Observable<Asset<Consumable>[]> = of([
    {
      id: '1',
      name: 'Coffee',
      description: 'A delicious cup of coffee',
      digital: false,
      kind: AssetKind.Consumable,
      previewUrl: 'assets/images/coffee.jpg',
      owner: 'Mercadona',
      producer: 'Starbucks',
    },
  ]);
  furnitures$: Observable<Asset<Consumable>[]> = of([
    {
      id: '1',
      name: 'Coffee',
      description: 'A delicious cup of coffee',
      digital: false,
      kind: AssetKind.Consumable,
      previewUrl: 'assets/images/coffee.jpg',
      owner: 'Mercadona',
      producer: 'Starbucks',
    },
  ]);
}
