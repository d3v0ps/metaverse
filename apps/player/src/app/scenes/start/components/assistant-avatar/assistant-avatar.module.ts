import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AvatarAppearancePortraitModule } from '@central-factory/avatars/web-components/angular/avatar-appearance-portrait/avatar-appearance-portrait.module';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { SvgIconModule } from '@central-factory/web-components/angular/svg-icon/svg-icon.module';
import { AssistantAvatarComponent } from './assistant-avatar.component';

@NgModule({
  imports: [
    CommonModule,
    BemModule,
    SvgIconModule,
    AvatarAppearancePortraitModule,
  ],
  declarations: [AssistantAvatarComponent],
  exports: [AssistantAvatarComponent],
})
export class AssistantAvatarModule {}
