import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PopoverContentComponent } from './popover-content.component';
import { PopoverDirective } from './popover.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [PopoverDirective, PopoverContentComponent],
  exports: [PopoverDirective, PopoverContentComponent],
})
export class PopoverModule {}
