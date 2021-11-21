import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { BemModule } from 'angular-bem';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AvatarSkillsComponent } from './avatar-skills.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BemModule,
    FlexLayoutModule,
    AngularSvgIconModule,
  ],
  declarations: [AvatarSkillsComponent],
  exports: [AvatarSkillsComponent],
})
export class AvatarSkillsModule {}
