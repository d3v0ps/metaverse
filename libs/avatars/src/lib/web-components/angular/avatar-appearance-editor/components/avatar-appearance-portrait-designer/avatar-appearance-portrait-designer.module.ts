import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { AvatarAppearancePortraitModule } from '../../../avatar-appearance-portrait/avatar-appearance-portrait.module';
import { AvatarAppearancePortraitAvataaarsModule } from '../../../avatar-appearance-portrait/components/avatar-appearance-portrait-avataaars/avatar-appearance-portrait-avataaars.module';
import { AvatarAppearancePortraitDesignerComponent } from './avatar-appearance-portrait-designer.component';

@NgModule({
  declarations: [AvatarAppearancePortraitDesignerComponent],
  imports: [
    CommonModule,
    BemModule,
    FormsModule,
    ReactiveFormsModule,
    AvatarAppearancePortraitAvataaarsModule,
    AvatarAppearancePortraitModule,
  ],
  exports: [AvatarAppearancePortraitDesignerComponent],
})
export class AvatarAppearancePortraitDesignerModule {}
