import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { SvgIconModule } from '@central-factory/web-components/angular/svg-icon/svg-icon.module';
import { AvatarOverviewComponent } from './avatar-overview.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, BemModule, SvgIconModule],
  declarations: [AvatarOverviewComponent],
  exports: [AvatarOverviewComponent],
})
export class AvatarOverviewModule {}
