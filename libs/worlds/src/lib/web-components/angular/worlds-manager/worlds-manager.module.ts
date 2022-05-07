import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AvatarsListModule } from '@central-factory/avatars/web-components/angular/avatars-list/avatars-list.module';
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
    AvatarsListModule,
  ],
  declarations: [WorldsManagerComponent],
  exports: [WorldsManagerComponent],
})
export class WorldsManagerModule {}
