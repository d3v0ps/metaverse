import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { BemModule } from 'angular-bem';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AvatarOverviewComponent } from './avatar-overview.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    BemModule,
    AngularSvgIconModule,
  ],
  declarations: [AvatarOverviewComponent],
  exports: [AvatarOverviewComponent],
})
export class AvatarOverviewModule {}
