import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { ColorPickerSelectModule } from '@central-factory/web-components/angular/color-picker-select/color-picker-select.module';
import { FileUploadModule } from '@central-factory/web-components/angular/file-upload/file-upload.module';
import { PopoverModule } from '@central-factory/web-components/angular/popover/popover.module';
import { SvgIconModule } from '@central-factory/web-components/angular/svg-icon/svg-icon.module';
import { TabsetModule } from '@central-factory/web-components/angular/tabset/tabset.module';
import { AvatarAppearanceCardModule } from '../avatar-appearance-card/avatar-appearance-card.module';
import { AvatarAppearancePortraitModule } from '../avatar-appearance-portrait/avatar-appearance-portrait.module';
import { AvatarAppearancePreviewModule } from '../avatar-appearance-preview/avatar-appearance-preview.module';
import { AvatarIdentityModule } from '../avatar-identity/avatar-identity.module';
import { AvatarInfoModule } from '../avatar-info/avatar-info.module';
import { AvatarAppearanceEditorComponent } from './avatar-appearance-editor.component';
import { AvatarAppearanceInfoFormComponent } from './components/avatar-appearance-info-form/avatar-appearance-info-form.component';
import { AvatarAppearanceModelFormComponent } from './components/avatar-appearance-model-form/avatar-appearance-model-form.component';
import { AvatarAppearancePortraitDesignerModule } from './components/avatar-appearance-portrait-designer/avatar-appearance-portrait-designer.module';
import { AvatarAppearancePortraitFormComponent } from './components/avatar-appearance-portrait-form/avatar-appearance-portrait-form.component';
import { AvatarAppearanceProvidersModule } from './components/avatar-appearance-providers/avatar-appearance-providers.module';

@NgModule({
  declarations: [
    AvatarAppearanceEditorComponent,
    AvatarAppearanceInfoFormComponent,
    AvatarAppearancePortraitFormComponent,
    AvatarAppearanceModelFormComponent,
  ],
  imports: [
    CommonModule,
    BemModule,
    SvgIconModule,
    FileUploadModule,
    TabsetModule,
    PopoverModule,
    ColorPickerSelectModule,
    AvatarAppearancePreviewModule,
    FormsModule,
    ReactiveFormsModule,
    AvatarAppearanceCardModule,
    AvatarAppearancePortraitModule,
    AvatarAppearanceProvidersModule,
    AvatarAppearancePortraitDesignerModule,
    AvatarIdentityModule,
    AvatarInfoModule,
  ],
  exports: [AvatarAppearanceEditorComponent],
})
export class AvatarAppearanceEditorModule {}
