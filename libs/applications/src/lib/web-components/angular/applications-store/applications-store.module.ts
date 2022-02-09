import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { ApplicationsStoreComponent } from './applications-store.component';

@NgModule({
  declarations: [ApplicationsStoreComponent],
  imports: [CommonModule, BemModule],
  exports: [],
})
export class ApplicationsStoreModule {}
