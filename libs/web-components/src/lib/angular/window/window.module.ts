import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BemModule } from '../bem/bem.module';
import { ButtonModule } from '../button/button.module';
import { DraggableModule } from '../draggable/draggable.module';
import { ResizableModule } from '../resizable/resizable.module';
import { SvgIconModule } from '../svg-icon/svg-icon.module';
import { WindowComponent } from './window.component';

@NgModule({
  imports: [
    CommonModule,
    BemModule,
    SvgIconModule,
    DraggableModule,
    ResizableModule,
    ButtonModule,
  ],
  declarations: [WindowComponent],
  exports: [WindowComponent],
})
export class WindowModule {}
