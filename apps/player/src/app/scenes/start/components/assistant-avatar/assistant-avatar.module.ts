import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AvatarAppearancePortraitModule } from '@central-factory/avatars/web-components/angular/avatar-appearance-portrait/avatar-appearance-portrait.module';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { CommandBarModule } from '@central-factory/web-components/angular/command-bar/command-bar.module';
import { SvgIconModule } from '@central-factory/web-components/angular/svg-icon/svg-icon.module';
import { TypographyModule } from '@central-factory/web-components/angular/typography/typography.module';
import { AssistantAvatarComponent } from './assistant-avatar.component';

@NgModule({
  imports: [
    CommonModule,
    BemModule,
    SvgIconModule,
    TypographyModule,
    AvatarAppearancePortraitModule,
    CommandBarModule,
  ],
  declarations: [AssistantAvatarComponent],
  exports: [AssistantAvatarComponent],
})
export class AssistantAvatarModule {}
