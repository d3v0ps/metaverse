import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { AvatarAppearanceSpritesheetComponent } from './avatar-appearance-spritesheet.component';

@NgModule({
  declarations: [AvatarAppearanceSpritesheetComponent],
  imports: [CommonModule, BemModule],
  exports: [AvatarAppearanceSpritesheetComponent],
})
export class AvatarAppearanceSpritesheetModule { }
