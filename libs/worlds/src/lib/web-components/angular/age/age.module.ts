import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AgePipe } from './age.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [AgePipe],
  exports: [AgePipe],
})
export class AgeModule {}
