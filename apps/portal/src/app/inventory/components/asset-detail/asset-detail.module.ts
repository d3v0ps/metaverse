import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BemModule } from 'angular-bem';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AssetDetailComponent } from './asset-detail.component';

@NgModule({
  imports: [CommonModule, BemModule, AngularSvgIconModule],
  declarations: [AssetDetailComponent],
  exports: [AssetDetailComponent],
})
export class AssetDetailModule {}
