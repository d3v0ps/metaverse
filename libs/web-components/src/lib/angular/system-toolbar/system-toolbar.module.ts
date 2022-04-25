import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BurgSelectorModule } from '@central-factory/worlds/web-components/angular/burgs/burg-selector/burg-selector.module';
import { RoomSelectorModule } from '@central-factory/worlds/web-components/angular/rooms/room-selector/room-selector.module';
import { WorldSelectorModule } from '@central-factory/worlds/web-components/angular/world-selector/world-selector.module';
import { BemModule } from '../bem/bem.module';
import { CommandBarModule } from '../command-bar/command-bar.module';
import { SvgIconModule } from '../svg-icon/svg-icon.module';
import { SystemToolbarComponent } from './system-toolbar.component';

@NgModule({
  declarations: [SystemToolbarComponent],
  imports: [
    CommonModule,
    BemModule,
    SvgIconModule,
    CommandBarModule,
    WorldSelectorModule,
    BurgSelectorModule,
    RoomSelectorModule,
  ],
  exports: [SystemToolbarComponent],
})
export class SystemToolbarModule {}
