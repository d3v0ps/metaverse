import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { SvgIconModule } from '@central-factory/web-components/angular/svg-icon/svg-icon.module';
import { AssetDetailComponent } from './asset-detail.component';

@NgModule({
  imports: [CommonModule, BemModule, SvgIconModule],
  declarations: [AssetDetailComponent],
  exports: [AssetDetailComponent],
})
export class AssetDetailModule {}
