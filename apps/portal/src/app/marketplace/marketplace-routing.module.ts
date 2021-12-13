import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketplaceScene } from './scenes/marketplace.scene';

export const routes: Routes = [
  {
    path: '',
    component: MarketplaceScene,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarketplaceRoutingModule {}
