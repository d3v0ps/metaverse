import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BemModule } from 'angular-bem';
import { AvatarAppearancesModule } from './components/avatar-appearances/avatar-appearances.module';
import { AvatarOverviewModule } from './components/avatar-overview/avatar-overview.module';
import { AvatarScopesModule } from './components/avatar-scopes/avatar-scopes.module';
import { AvatarSkillsModule } from './components/avatar-skills/avatar-skills.module';
import { SelectedAvatarScene } from './scenes/selected-avatar/selected-avatar.scene';
import { SelectedAvatarRoutingModule } from './selected-avatar-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    BemModule,
    SelectedAvatarRoutingModule,
    AvatarOverviewModule,
    AvatarAppearancesModule,
    AvatarScopesModule,
    AvatarSkillsModule,
  ],
  declarations: [SelectedAvatarScene],
})
export class SelectedAvatarModule {}
