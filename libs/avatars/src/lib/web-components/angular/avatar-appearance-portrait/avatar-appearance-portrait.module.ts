import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { PhaserRendererModule } from '@central-factory/web-components/angular/phaser/phaser-renderer.module';
import { SpritesheetModule } from '@central-factory/web-components/angular/spritesheet/spritesheet.module';
import { SvgIconModule } from '@central-factory/web-components/angular/svg-icon/svg-icon.module';
import { AvatarAppearancePortraitComponent } from './avatar-appearance-portrait.component';
import { AvatarAppearancePortraitAvataaarsModule } from './components/avatar-appearance-portrait-avataaars/avatar-appearance-portrait-avataaars.module';
import { AvatarAppearanceSpritesheetModule } from './components/avatar-appearance-spritesheet/avatar-appearance-spritesheet.module';

@NgModule({
  declarations: [AvatarAppearancePortraitComponent],
  imports: [
    CommonModule,
    BemModule,
    SvgIconModule,
    AvatarAppearancePortraitAvataaarsModule,
    AvatarAppearanceSpritesheetModule,
    SpritesheetModule,
    PhaserRendererModule,
  ],
  exports: [AvatarAppearancePortraitComponent],
})
export class AvatarAppearancePortraitModule { }
