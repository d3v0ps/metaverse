import { NgModule } from '@angular/core';
import { EssentialsModule } from '@central-factory/web-components/angular/essentials.module';
import { CurrencyModule } from '../currency/currency.module';
import { TransactionsListItemComponent } from './transactions-list-item.component';
import { TransactionsListComponent } from './transactions-list.component';

@NgModule({
  imports: [EssentialsModule, CurrencyModule],
  exports: [TransactionsListComponent, TransactionsListItemComponent],
  declarations: [TransactionsListComponent, TransactionsListItemComponent],
  providers: [],
})
export class TransactionsListModule {}
