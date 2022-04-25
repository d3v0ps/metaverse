import { NgModule } from '@angular/core';
import { EssentialsModule } from '@central-factory/web-components/angular/essentials.module';
import { TabsetModule } from '@central-factory/web-components/angular/tabset/tabset.module';
import { TransactionsListModule } from '../transactions-list/transactions-list.module';
import { AccountDetailsComponent } from './account-details.component';

@NgModule({
  imports: [EssentialsModule, TabsetModule, TransactionsListModule],
  exports: [AccountDetailsComponent],
  declarations: [AccountDetailsComponent],
  providers: [],
})
export class AccountDetailsModule {}
