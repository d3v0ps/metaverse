import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AgePipe } from './age.pipe';
import { DatePipe } from './date.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [AgePipe, DatePipe],
  exports: [AgePipe, DatePipe],
})
export class AgeModule {}
