import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { SvgIconModule } from '@central-factory/web-components/angular/svg-icon/svg-icon.module';
import { BemModule } from 'angular-bem';
import { PreviewAvatarAppearanceModule } from '../preview-avatar-appearance/preview-avatar-appearance.module';
import { AvatarAppearancesComponent } from './avatar-appearances.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    BemModule,
    SvgIconModule,
    PreviewAvatarAppearanceModule,
  ],
  declarations: [AvatarAppearancesComponent],
  exports: [AvatarAppearancesComponent],
})
export class AvatarAppearancesModule {}
