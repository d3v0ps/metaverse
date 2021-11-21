import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BemModule } from 'angular-bem';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AvatarScopesComponent } from './avatar-scopes.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, BemModule, AngularSvgIconModule],
  declarations: [AvatarScopesComponent],
  exports: [AvatarScopesComponent],
})
export class AvatarScopesModule {}
