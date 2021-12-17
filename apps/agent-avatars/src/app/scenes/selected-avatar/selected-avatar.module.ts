import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AvatarAppearancesModule } from '@central-factory/avatars/infrastructure/web-components/angular/avatar-appearances/avatar-appearances.module';
import { AvatarOverviewModule } from '@central-factory/avatars/infrastructure/web-components/angular/avatar-overview/avatar-overview.module';
import { AvatarScopesModule } from '@central-factory/avatars/infrastructure/web-components/angular/avatar-scopes/avatar-scopes.module';
import { AvatarSkillsModule } from '@central-factory/avatars/infrastructure/web-components/angular/avatar-skills/avatar-skills.module';
import { BemModule } from 'angular-bem';
import { SelectedAvatarRoutingModule } from './selected-avatar-routing.module';
import { SelectedAvatarScene } from './selected-avatar.scene';

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
