import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SvgIconModule } from '@central-factory/web-components/angular/svg-icon/svg-icon.module';
import { BemModule } from 'angular-bem';
import { AssetDetailComponent } from './asset-detail.component';

@NgModule({
  imports: [CommonModule, BemModule, SvgIconModule],
  declarations: [AssetDetailComponent],
  exports: [AssetDetailComponent],
})
export class AssetDetailModule {}
