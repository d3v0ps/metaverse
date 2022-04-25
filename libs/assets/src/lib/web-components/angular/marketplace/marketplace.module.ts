import { NgModule } from '@angular/core';
import { EssentialsModule } from '@central-factory/web-components/angular/essentials.module';
import { TabsetModule } from '@central-factory/web-components/angular/tabset/tabset.module';
import { MarketplaceComponent } from './marketplace.component';

@NgModule({
  imports: [EssentialsModule, TabsetModule],
  exports: [MarketplaceComponent],
  declarations: [MarketplaceComponent],
  providers: [],
})
export class MarketplaceModule {}
