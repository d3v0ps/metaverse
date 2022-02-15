import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { SvgIconModule } from '@central-factory/web-components/angular/svg-icon/svg-icon.module';
import { AvatarAppearanceProvidersComponent } from './avatar-appearance-providers.component';

@NgModule({
  declarations: [AvatarAppearanceProvidersComponent],
  imports: [CommonModule, BemModule, SvgIconModule],
  exports: [AvatarAppearanceProvidersComponent],
})
export class AvatarAppearanceProvidersModule {}
