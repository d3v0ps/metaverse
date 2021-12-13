import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BemModule } from 'angular-bem';
import { AssetDetailComponent } from './asset-detail.component';

@NgModule({
  imports: [CommonModule, BemModule],
  declarations: [AssetDetailComponent],
  exports: [AssetDetailComponent],
})
export class AssetDetailModule {}
