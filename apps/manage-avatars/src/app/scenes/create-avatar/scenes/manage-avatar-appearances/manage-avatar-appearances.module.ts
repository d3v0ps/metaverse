import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AvatarAppearanceEditorModule } from '@central-factory/avatars/web-components/angular/avatar-appearance-editor/avatar-appearance-editor.module';
import { AvatarAppearancesCarouselModule } from '@central-factory/avatars/web-components/angular/avatar-appearances-carousel/avatar-appearances-carousel.module';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { ManageAvatarAppearancesScene } from './manage-avatar-appearances.scene';

@NgModule({
  imports: [
    CommonModule,
    BemModule,
    AvatarAppearancesCarouselModule,
    AvatarAppearanceEditorModule,
  ],
  declarations: [ManageAvatarAppearancesScene],
  exports: [ManageAvatarAppearancesScene],
})
export class ManageAvatarAppearancesModule {}