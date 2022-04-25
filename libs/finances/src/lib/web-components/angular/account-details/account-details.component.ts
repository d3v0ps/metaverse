import { Component, Input } from '@angular/core';
import { Account } from '@central-factory/finances/models/account';
import { Transaction } from '@central-factory/finances/models/transaction';

@Component({
  selector: 'cf-account-details',
  template: `
    <div cfBlock="account-details" *ngIf="account">
      <cf-tabset>
        <cf-tab
          [title]="'Transactions'"
          icon="assets/icons/mdi/account.svg"
          [active]="true"
        >
          <cf-transactions-list
            *ngIf="transactions"
            [transactions]="transactions"
            [account]="account"
          ></cf-transactions-list>
        </cf-tab>

        <cf-tab
          [title]="'Recurring Transactions'"
          icon="assets/icons/mdi/account.svg"
        >
          <cf-transactions-list
            *ngIf="recurringTransactions"
            [transactions]="recurringTransactions"
            [account]="account"
          ></cf-transactions-list>
        </cf-tab>
      </cf-tabset>
    </div>
  `,
  styles: [``],
})
export class AccountDetailsComponent {
  @Input() account?: Account;
  @Input() transactions?: Transaction[];
  @Input() recurringTransactions?: Transaction[];
}
