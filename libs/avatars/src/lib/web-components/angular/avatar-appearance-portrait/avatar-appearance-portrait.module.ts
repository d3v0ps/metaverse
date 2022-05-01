import { NgModule } from '@angular/core';
import { EssentialsModule } from '@central-factory/web-components/angular/essentials.module';
import { PhaserRendererModule } from '@central-factory/web-components/angular/phaser/phaser-renderer.module';
import { SpritesheetModule } from '@central-factory/web-components/angular/spritesheet/spritesheet.module';
import { AvatarAppearancePortraitComponent } from './avatar-appearance-portrait.component';
import { AvatarAppearancePortraitAvataaarsModule } from './components/avatar-appearance-portrait-avataaars/avatar-appearance-portrait-avataaars.module';
import { AvatarAppearanceSpritesheetModule } from './components/avatar-appearance-spritesheet/avatar-appearance-spritesheet.module';

@NgModule({
  declarations: [AvatarAppearancePortraitComponent],
  imports: [
    EssentialsModule,
    AvatarAppearancePortraitAvataaarsModule,
    AvatarAppearanceSpritesheetModule,
    SpritesheetModule,
    PhaserRendererModule,
  ],
  exports: [AvatarAppearancePortraitComponent],
})
export class AvatarAppearancePortraitModule {}
