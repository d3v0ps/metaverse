import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { SvgIconModule } from '@central-factory/web-components/angular/svg-icon/svg-icon.module';
import { BemModule } from 'angular-bem';
import { AvatarSkillsComponent } from './avatar-skills.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BemModule,
    FlexLayoutModule,
    SvgIconModule,
  ],
  declarations: [AvatarSkillsComponent],
  exports: [AvatarSkillsComponent],
})
export class AvatarSkillsModule {}
