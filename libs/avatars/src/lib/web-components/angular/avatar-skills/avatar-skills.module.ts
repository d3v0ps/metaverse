import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { SvgIconModule } from '@central-factory/web-components/angular/svg-icon/svg-icon.module';
import { AvatarSkillsComponent } from './avatar-skills.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, BemModule, SvgIconModule],
  declarations: [AvatarSkillsComponent],
  exports: [AvatarSkillsComponent],
})
export class AvatarSkillsModule {}
