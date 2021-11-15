import { NgModule } from '@angular/core';
import { MarketplaceRoutingModule } from './marketplace-routing.module';
import { MarketplaceView } from './views/marketplace.view';

@NgModule({
  imports: [MarketplaceRoutingModule],
  declarations: [MarketplaceView],
})
export class MarketplaceModule {}
