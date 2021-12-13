import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BemModule } from 'angular-bem';
import { AssetsGridComponent } from './assets-grid.component';

@NgModule({
  imports: [CommonModule, BemModule],
  declarations: [AssetsGridComponent],
  exports: [AssetsGridComponent],
})
export class AssetsGridModule {}
