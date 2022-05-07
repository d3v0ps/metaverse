import { Component } from '@angular/core';
import { WalletsState } from '@central-factory/finances/states/wallets.state';
import { Account } from '@central-factory/finances/__generated__/models';

@Component({
  selector: 'cf-wallet',
  template: `
    <div
      cfBlock="wallet-scene"
      *ngIf="{
        wallet: wallet$ | async,
        worldBalance: worldBalance$ | async,
        account: account$ | async,
        transactions: transactions$ | async,
        recurringTransactions: recurringTransactions$ | async
      } as data"
    >
      <cf-world-balance
        [balance]="data.worldBalance || undefined"
      ></cf-world-balance>

      <cf-wallet-selector></cf-wallet-selector>

      <cf-accounts-carousel
        *ngIf="data.wallet"
        [accounts]="data.wallet.accounts"
        [selectedAccount]="data.account || undefined"
        (accountClick)="onAccountClick($event)"
      ></cf-accounts-carousel>

      <cf-account-details
        [account]="data.account || undefined"
        [transactions]="data.transactions || []"
        [recurringTransactions]="data.recurringTransactions || []"
      ></cf-account-details>
    </div>
  `,
  styles: [
    `
      .wallet-scene {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }
    `,
  ],
})
export class WalletScene {
  worldBalance$ = this.walletsState.worldBalance$;
  wallet$ = this.walletsState.selectedWallet$;
  account$ = this.walletsState.selectedAccount$;
  transactions$ = this.walletsState.selectedAccountTransactions$;
  recurringTransactions$ =
    this.walletsState.selectedAccountRecurringTransactions$;

  constructor(private walletsState: WalletsState) {}

  onAccountClick(account: Account) {
    this.walletsState.selectAccount(account);
  }
}
