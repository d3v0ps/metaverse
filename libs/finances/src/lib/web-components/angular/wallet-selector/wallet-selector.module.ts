import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EssentialsModule } from '@central-factory/web-components/angular/essentials.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { CurrencyModule } from '../currency/currency.module';
import { WalletSelectorComponent } from './wallet-selector.component';

@NgModule({
  imports: [EssentialsModule, FormsModule, NgSelectModule, CurrencyModule],
  declarations: [WalletSelectorComponent],
  exports: [WalletSelectorComponent],
})
export class WalletSelectorModule {}
