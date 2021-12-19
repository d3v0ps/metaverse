import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { SvgIconModule } from '@central-factory/web-components/angular/svg-icon/svg-icon.module';
import { AvatarScopesComponent } from './avatar-scopes.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, BemModule, SvgIconModule],
  declarations: [AvatarScopesComponent],
  exports: [AvatarScopesComponent],
})
export class AvatarScopesModule {}
