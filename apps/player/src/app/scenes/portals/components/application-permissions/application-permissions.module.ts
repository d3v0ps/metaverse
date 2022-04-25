import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { ApplicationPermissionsComponent } from './application-permissions.component';

@NgModule({
  declarations: [ApplicationPermissionsComponent],
  exports: [ApplicationPermissionsComponent],
  imports: [CommonModule, BemModule],
})
export class ApplicationPermissionsModule {}
