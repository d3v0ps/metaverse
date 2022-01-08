import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { MarketplaceRoutingModule } from './marketplace-routing.module';
import { MarketplaceScene } from './marketplace.scene';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BemModule,
    MarketplaceRoutingModule,
  ],
  declarations: [MarketplaceScene],
})
export class MarketplaceModule {}
