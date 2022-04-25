
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { AvatarAppearancePortraitModule } from '../avatar-appearance-portrait/avatar-appearance-portrait.module';
import { AvatarDialogComponent } from './avatar-dialog.component';
import { AvatarDialogScene } from './avatar-dialog.scene';

@NgModule({
  imports: [
    CommonModule,
    BemModule,
    AvatarAppearancePortraitModule
  ],
  declarations: [
    AvatarDialogComponent,
    AvatarDialogScene,
  ]
})
export class AvatarDialogModule { }
