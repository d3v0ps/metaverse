import { Component } from '@angular/core';
import { Wallet } from '@central-factory/finances/models/wallet';
import { WalletsState } from '@central-factory/finances/states/wallets.state';

@Component({
  selector: 'cf-wallet-selector',
  template: `
    <div cfBlock="wallet-selector">
      <ng-select
        cfBlock="select"
        cfMod="xs"
        [items]="wallets$ | async"
        [ngModel]="selectedWallet$ | async"
        (ngModelChange)="onWalletSelect($event)"
      >
        <ng-template ng-label-tmp let-item="item" let-clear="clear">
          <cf-typography>Wallet: {{ item.name }}</cf-typography>
          <cf-currency
            typographyType="p"
            [value]="item.balance.total"
          ></cf-currency>
        </ng-template>
        <ng-template ng-option-tmp let-item="item">
          <cf-typography>Wallet: {{ item.name }}</cf-typography>
          <cf-currency [value]="item.balance.total"></cf-currency>
        </ng-template>
      </ng-select>
    </div>
  `,
  styles: [
    `
      .select {
        min-width: 10rem;
      }
    `,
  ],
})
export class WalletSelectorComponent {
  selectedWallet$ = this.walletsState.selectedWallet$;
  wallets$ = this.walletsState.worldWallets$;

  constructor(private walletsState: WalletsState) {}

  onWalletSelect(wallet: Wallet) {
    this.walletsState.selectWallet(wallet);
  }
}
