import { Component, Input } from '@angular/core';
import { Account } from '@central-factory/finances/models/account';
import { Transaction } from '@central-factory/finances/models/transaction';
import { CurrencyMood } from '../currency/currency.component';

@Component({
  selector: 'cf-transactions-list-item',
  template: `
    <div cfBlock="transactions-list-item" *ngIf="transaction">
      <div cfBlock="transaction-info">
        <cf-typography type="h2" [bold]="true" *ngIf="transaction.description">
          {{ transaction.description }}
        </cf-typography>
        <cf-typography type="p" [bold]="true">
          <!-- cf-svg-icon [src]="accountTypeIcons[account.type]"></cf-svg-icon -->
          {{ transaction.category || 'Uncategorized' }}
        </cf-typography>
      </div>
      <div cfBlock="transaction-value">
        <cf-currency
          [currencyType]="transaction.currency || userCurrency"
          [displayCurrency]="userCurrency"
          [mood]="transactionMood"
          [value]="transaction.amount"
          typographyType="h4"
        ></cf-currency>
      </div>
      <!-- ng-container
        *ngIf="transaction.currency && transaction.currency !== userCurrency"
      >
        <cf-currency
          [value]="transaction.amount"
          [currencyType]="transaction.currency"
          [mood]="transactionMood"
          typographyType="p"
        ></cf-currency>
      </ng-container -->
    </div>
  `,
  styles: [
    `
      .transactions-list-item {
        display: flex;
        justify-content: space-between;
      }
    `,
  ],
})
export class TransactionsListItemComponent {
  @Input()
  set transaction(value: Transaction | undefined) {
    this.transactionMood = this.generateTransactionMood(value, this.account);
    this._transaction = value;
  }
  get transaction(): Transaction | undefined {
    return this._transaction;
  }

  @Input()
  set account(value: Account | undefined) {
    this.transactionMood = this.generateTransactionMood(
      this.transaction,
      value
    );
    this._account = value;
  }
  get account(): Account | undefined {
    return this._account;
  }

  @Input() userCurrency = 'eur';

  transactionMood: CurrencyMood = 'neutral';

  private _transaction?: Transaction;
  private _account?: Account;

  private generateTransactionMood(
    transaction: Transaction | undefined,
    account: Account | undefined
  ): CurrencyMood {
    if (!transaction || !account) {
      return 'neutral';
    }

    if (
      transaction.amount.startsWith('-') &&
      transaction.origin === account.referenceId
    ) {
      return 'positive';
    }

    if (
      transaction.amount.startsWith('-') &&
      transaction.destination === account.referenceId
    ) {
      return 'negative';
    }

    if (
      !transaction.amount.startsWith('-') &&
      transaction.origin === account.referenceId
    ) {
      return 'negative';
    }

    if (
      !transaction.amount.startsWith('-') &&
      transaction.destination === account.referenceId
    ) {
      return 'positive';
    }

    return transaction.amount.startsWith('-') ? 'negative' : 'positive';
  }
}
