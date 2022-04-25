import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { PhaserRendererModule } from '@central-factory/web-components/angular/phaser/phaser-renderer.module';
import { RoomComponent } from './room.component';

@NgModule({
  imports: [CommonModule, BemModule, PhaserRendererModule],
  declarations: [RoomComponent],
  exports: [RoomComponent],
})
export class RoomModule {}
