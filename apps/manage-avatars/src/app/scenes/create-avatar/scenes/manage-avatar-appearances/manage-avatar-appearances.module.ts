import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AvatarAppearanceEditorModule } from '@central-factory/avatars/web-components/angular/avatar-appearance-editor/avatar-appearance-editor.module';
import { AvatarAppearancePortraitDesignerModule } from '@central-factory/avatars/web-components/angular/avatar-appearance-editor/components/avatar-appearance-portrait-designer/avatar-appearance-portrait-designer.module';
import { AvatarAppearancesCarouselModule } from '@central-factory/avatars/web-components/angular/avatar-appearances-carousel/avatar-appearances-carousel.module';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { SvgIconModule } from '@central-factory/web-components/angular/svg-icon/svg-icon.module';
import { ManageAvatarAppearancesScene } from './manage-avatar-appearances.scene';

@NgModule({
  imports: [
    CommonModule,
    BemModule,
    SvgIconModule,
    AvatarAppearancesCarouselModule,
    AvatarAppearanceEditorModule,
    AvatarAppearancePortraitDesignerModule,
  ],
  declarations: [ManageAvatarAppearancesScene],
  exports: [ManageAvatarAppearancesScene],
})
export class ManageAvatarAppearancesModule {

  static Component = ManageAvatarAppearancesScene;
}
