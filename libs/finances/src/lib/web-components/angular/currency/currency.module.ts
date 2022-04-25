import { NgModule } from '@angular/core';
import { EssentialsModule } from '@central-factory/web-components/angular/essentials.module';
import { CurrencyComponent } from './currency.component';

@NgModule({
  imports: [EssentialsModule],
  exports: [CurrencyComponent],
  declarations: [CurrencyComponent],
  providers: [],
})
export class CurrencyModule {}
