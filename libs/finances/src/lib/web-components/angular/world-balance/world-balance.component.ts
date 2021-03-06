import { Component, Input } from '@angular/core';
import { Balance } from '@central-factory/finances/__generated__/models';

@Component({
  selector: 'cf-world-balance',
  template: `
    <div cfBlock="world-balance" *ngIf="balance">
      <div cfElem="item">
        <cf-typography> Total: </cf-typography>
        <cf-currency
          [currencyType]="'eur'"
          [value]="balance.total"
          typographyType="h3"
        ></cf-currency>
      </div>
      <div cfElem="item">
        <cf-typography> FIAT: </cf-typography>
        <cf-currency
          [currencyType]="'eur'"
          [value]="balance.fiat"
          typographyType="h3"
        ></cf-currency>
      </div>
      <div cfElem="item">
        <cf-typography> Crypto: </cf-typography>
        <cf-currency
          [currencyType]="'eur'"
          [value]="balance.crypto"
          typographyType="h3"
        ></cf-currency>
      </div>
      <div cfElem="item">
        <cf-typography> Stocks: </cf-typography>
        <cf-currency
          [currencyType]="'eur'"
          [value]="balance.stocks"
          typographyType="h3"
        ></cf-currency>
      </div>
    </div>
  `,
  styles: [
    `
      .world-balance {
        display: flex;
        flex-wrap: nowrap;
        overflow: hidden;
        gap: 1rem;

        &:hover {
          overflow: auto !important;
        }
      }
    `,
  ],
})
export class WorldBalanceComponent {
  @Input() balance?: Balance;
}
