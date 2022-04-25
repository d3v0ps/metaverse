import { NgModule } from '@angular/core';
import { EssentialsModule } from '@central-factory/web-components/angular/essentials.module';
import { AccountBalanceCardModule } from '../account-balance-card/account-balance-card.module';
import { AccountDetailsModule } from '../account-details/account-details.module';
import { AccountsCarouselModule } from '../accounts-carousel/accounts-carousel.module';
import { CurrencyModule } from '../currency/currency.module';
import { TransactionsListModule } from '../transactions-list/transactions-list.module';
import { WalletSelectorModule } from '../wallet-selector/wallet-selector.module';
import { WorldBalanceModule } from '../world-balance/world-balance.module';
import { WalletScene } from './wallet.scene';

@NgModule({
  imports: [
    EssentialsModule,
    AccountBalanceCardModule,
    AccountsCarouselModule,
    WalletSelectorModule,
    CurrencyModule,
    TransactionsListModule,
    WorldBalanceModule,
    AccountDetailsModule,
  ],
  exports: [WalletScene],
  declarations: [WalletScene],
  providers: [],
})
export class WalletModule {}
