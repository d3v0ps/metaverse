import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { SvgIconModule } from '@central-factory/web-components/angular/svg-icon/svg-icon.module';
import { AvatarAppearanceCardModule } from '../avatar-appearance-card/avatar-appearance-card.module';
import { AvatarAppearancePortraitModule } from '../avatar-appearance-portrait/avatar-appearance-portrait.module';
import { AvatarAppearancePreviewModule } from '../avatar-appearance-preview/avatar-appearance-preview.module';
import { AvatarAppearanceEditorComponent } from './avatar-appearance-editor.component';

@NgModule({
  declarations: [AvatarAppearanceEditorComponent],
  imports: [
    CommonModule,
    BemModule,
    SvgIconModule,
    AvatarAppearancePreviewModule,
    FormsModule,
    ReactiveFormsModule,
    AvatarAppearanceCardModule,
    AvatarAppearancePortraitModule,
  ],
  exports: [AvatarAppearanceEditorComponent],
})
export class AvatarAppearanceEditorModule {}
