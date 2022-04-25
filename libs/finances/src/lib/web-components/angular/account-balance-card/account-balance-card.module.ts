import { NgModule } from '@angular/core';
import { EssentialsModule } from '@central-factory/web-components/angular/essentials.module';
import { CurrencyModule } from '../currency/currency.module';
import { AccountBalanceCardComponent } from './account-balance-card.component';

@NgModule({
  imports: [EssentialsModule, CurrencyModule],
  exports: [AccountBalanceCardComponent],
  declarations: [AccountBalanceCardComponent],
  providers: [],
})
export class AccountBalanceCardModule {}
