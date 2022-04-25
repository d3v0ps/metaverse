import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { WorldSelectorComponent } from './world-selector.component';

@NgModule({
  imports: [CommonModule, BemModule, FormsModule, NgSelectModule],
  declarations: [WorldSelectorComponent],
  exports: [WorldSelectorComponent],
})
export class WorldSelectorModule {}
