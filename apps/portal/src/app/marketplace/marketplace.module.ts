import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BemModule } from 'angular-bem';
import { MarketplaceRoutingModule } from './marketplace-routing.module';
import { MarketplaceScene } from './scenes/marketplace.scene';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    BemModule,
    MarketplaceRoutingModule,
  ],
  declarations: [MarketplaceScene],
})
export class MarketplaceModule {}
