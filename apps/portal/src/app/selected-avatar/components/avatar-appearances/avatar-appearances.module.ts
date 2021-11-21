import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { BemModule } from 'angular-bem';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AvatarAppearancesComponent } from './avatar-appearances.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    BemModule,
    AngularSvgIconModule,
  ],
  declarations: [AvatarAppearancesComponent],
  exports: [AvatarAppearancesComponent],
})
export class AvatarAppearancesModule {}
