import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { SvgIconModule } from '@central-factory/web-components/angular/svg-icon/svg-icon.module';
import { WorldCardModule } from '../world-card/world-card.module';
import { WorldsListModule } from '../worlds-list/worlds-list.module';
import { WorldsManagerComponent } from './worlds-manager.component';

@NgModule({
  imports: [
    CommonModule,
    BemModule,
    SvgIconModule,
    WorldsListModule,
    WorldCardModule,
  ],
  declarations: [WorldsManagerComponent],
  exports: [WorldsManagerComponent],
})
export class WorldsManagerModule {}
