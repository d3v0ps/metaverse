import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { SvgIconModule } from '@central-factory/web-components/angular/svg-icon/svg-icon.module';
import { EraTitleModule } from '../eras/era-title/era-title.module';
import { WorldsListItemComponent } from './worlds-list-item.component';
import { WorldsListComponent } from './worlds-list.component';

@NgModule({
  imports: [CommonModule, BemModule, SvgIconModule, EraTitleModule],
  declarations: [WorldsListComponent, WorldsListItemComponent],
  exports: [WorldsListComponent, WorldsListItemComponent],
})
export class WorldsListModule {}
