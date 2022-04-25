import { NgModule } from '@angular/core';
import { EssentialsModule } from '@central-factory/web-components/angular/essentials.module';
import { AccountBalanceCardModule } from '../account-balance-card/account-balance-card.module';
import { AccountsCarouselComponent } from './accounts-carousel.component';

@NgModule({
  imports: [EssentialsModule, AccountBalanceCardModule],
  exports: [AccountsCarouselComponent],
  declarations: [AccountsCarouselComponent],
  providers: [],
})
export class AccountsCarouselModule {}
