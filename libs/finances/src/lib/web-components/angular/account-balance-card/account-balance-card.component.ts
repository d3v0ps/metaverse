import { Component, Input } from '@angular/core';
import { Account, AccountType } from '../../../__generated__/models';

@Component({
  selector: 'cf-account-balance-card',
  template: `
    <div
      cfBlock="account-balance-card"
      *ngIf="account"
      [cfMod]="[active ? 'active' : null]"
    >
      <cf-typography type="h3" [bold]="true">
        <cf-svg-icon [src]="accountTypeIcons[account.type]"></cf-svg-icon>
        {{ account.name }}
      </cf-typography>
      <cf-currency
        [currencyType]="account.currency || userCurrency"
        displayCurrency="eur"
        [value]="account.balance"
        typographyType="h3"
      ></cf-currency>
      <ng-container
        *ngIf="account.currency && account.currency !== userCurrency"
      >
        <cf-currency
          [value]="account.balance"
          [currencyType]="account.currency"
          typographyType="h4"
        ></cf-currency>
      </ng-container>
    </div>
  `,
})
export class AccountBalanceCardComponent {
  @Input() account?: Account;
  @Input() active = false;

  @Input() userCurrency = 'eur';

  accountTypeIcons: Record<AccountType, string> = {
    [AccountType.Bank]: 'assets/icons/mdi/bank.svg',
    [AccountType.Cash]: 'assets/icons/mdi/cash.svg',
    [AccountType.RechargeCard]: 'assets/icons/mdi/credit-card.svg',
    [AccountType.CreditCard]: 'assets/icons/mdi/credit-card.svg',
    [AccountType.DebitCard]: 'assets/icons/mdi/credit-card.svg',
    [AccountType.Stock]: 'assets/icons/mdi/chart-line.svg',
    [AccountType.Crypto]: 'assets/icons/mdi/chart-line.svg',
    [AccountType.Loan]: 'assets/icons/mdi/bank-minus.svg',
    [AccountType.Other]: 'assets/icons/mdi/cash.svg',
  };
}
