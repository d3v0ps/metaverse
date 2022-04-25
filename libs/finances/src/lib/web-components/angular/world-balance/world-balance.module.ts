import { NgModule } from '@angular/core';
import { EssentialsModule } from '@central-factory/web-components/angular/essentials.module';
import { CurrencyModule } from '../currency/currency.module';
import { WorldBalanceComponent } from './world-balance.component';

@NgModule({
  imports: [EssentialsModule, CurrencyModule],
  exports: [WorldBalanceComponent],
  declarations: [WorldBalanceComponent],
  providers: [],
})
export class WorldBalanceModule {}
