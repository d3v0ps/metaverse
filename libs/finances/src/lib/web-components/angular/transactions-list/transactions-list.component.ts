import { Component, Input } from '@angular/core';
import {
  Account,
  Transaction,
} from '@central-factory/finances/__generated__/models';

@Component({
  selector: 'cf-transactions-list',
  template: `
    <div cfBlock="transactions-list">
      <div cfElem="item" *ngFor="let transaction of transactions">
        <cf-transactions-list-item
          [account]="account"
          [transaction]="transaction"
        ></cf-transactions-list-item>
      </div>
    </div>
  `,
  styles: [
    `
      .transactions-list {
        &__item {
          margin-bottom: 0.5rem;
        }
      }
    `,
  ],
})
export class TransactionsListComponent {
  @Input() transactions: Transaction[] = [];
  @Input() account?: Account;
}
