import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AvatarInfoModule } from '@central-factory/avatars/web-components/angular/avatar-info/avatar-info.module';
import { AvatarsListModule } from '@central-factory/avatars/web-components/angular/avatars-list/avatars-list.module';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { BurgMapModule } from '@central-factory/worlds/web-components/angular/burgs/burg-map/burg-map.module';
import { WorldMapModule } from '@central-factory/worlds/web-components/angular/world-map/world-map.module';
import { WorldScene } from './world.scene';

@NgModule({
  imports: [
    CommonModule,
    BemModule,
    FormsModule,
    ReactiveFormsModule,
    WorldMapModule,
    BurgMapModule,
    AvatarsListModule,
    AvatarInfoModule,
  ],
  declarations: [WorldScene],
  exports: [WorldScene],
})
export class WorldSceneModule {}
