import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { RoomSelectorComponent } from './room-selector.component';

@NgModule({
  imports: [CommonModule, BemModule, FormsModule, NgSelectModule],
  declarations: [RoomSelectorComponent],
  exports: [RoomSelectorComponent],
})
export class RoomSelectorModule {}
