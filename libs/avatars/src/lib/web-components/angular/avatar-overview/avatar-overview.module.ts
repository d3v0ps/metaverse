import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { SvgIconModule } from '@central-factory/web-components/angular/svg-icon/svg-icon.module';
import { BemModule } from 'angular-bem';
import { AvatarOverviewComponent } from './avatar-overview.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    BemModule,
    SvgIconModule,
  ],
  declarations: [AvatarOverviewComponent],
  exports: [AvatarOverviewComponent],
})
export class AvatarOverviewModule {}
