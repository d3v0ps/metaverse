import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AvatarSkillsComponent } from './avatar-skills.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [AvatarSkillsComponent],
  exports: [AvatarSkillsComponent],
})
export class AvatarSkillsModule {}
