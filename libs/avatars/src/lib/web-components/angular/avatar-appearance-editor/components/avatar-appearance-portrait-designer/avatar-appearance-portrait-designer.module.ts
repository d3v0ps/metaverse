import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { ColorPickerSelectModule } from '@central-factory/web-components/angular/color-picker-select/color-picker-select.module';
import { FileUploadModule } from '@central-factory/web-components/angular/file-upload/file-upload.module';
import { SvgIconModule } from '@central-factory/web-components/angular/svg-icon/svg-icon.module';
import { AvatarAppearancePortraitModule } from '../../../avatar-appearance-portrait/avatar-appearance-portrait.module';
import { AvatarAppearancePortraitAvataaarsModule } from '../../../avatar-appearance-portrait/components/avatar-appearance-portrait-avataaars/avatar-appearance-portrait-avataaars.module';
import { AvatarAppearancePortraitDesignerComponent } from './avatar-appearance-portrait-designer.component';

@NgModule({
  declarations: [AvatarAppearancePortraitDesignerComponent],
  imports: [
    CommonModule,
    BemModule,
    SvgIconModule,
    FormsModule,
    ReactiveFormsModule,
    AvatarAppearancePortraitAvataaarsModule,
    AvatarAppearancePortraitModule,
    ColorPickerSelectModule,
    FileUploadModule,
  ],
  exports: [AvatarAppearancePortraitDesignerComponent],
})
export class AvatarAppearancePortraitDesignerModule { }
