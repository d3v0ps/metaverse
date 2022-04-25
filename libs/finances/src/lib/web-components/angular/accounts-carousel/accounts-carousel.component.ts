import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Account } from '@central-factory/finances/models/account';

@Component({
  selector: 'cf-accounts-carousel',
  template: `
    <div cfBlock="accounts-carousel">
      <div
        cfElem="item"
        *ngFor="let account of accounts"
        (click)="accountClick.emit(account)"
      >
        <cf-account-balance-card
          [account]="account"
          [active]="account.id === selectedAccount?.id"
        ></cf-account-balance-card>
      </div>
    </div>
  `,
  styles: [
    `
      .accounts-carousel {
        display: flex;
        flex-wrap: nowrap;
        overflow: hidden;
        gap: 0.5rem;

        &:hover {
          overflow: auto !important;
        }
      }
    `,
  ],
})
export class AccountsCarouselComponent {
  @Input() accounts: Account[] = [];
  @Input() selectedAccount?: Account;
  @Output() accountClick = new EventEmitter<Account>();
}
