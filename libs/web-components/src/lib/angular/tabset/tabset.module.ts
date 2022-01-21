import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BemModule } from '../bem/bem.module';
import { SvgIconModule } from '../svg-icon/svg-icon.module';
import { TabComponent } from './tab.component';
import { TabsetComponent } from './tabset.component';

@NgModule({
  imports: [CommonModule, BemModule, SvgIconModule],
  declarations: [TabsetComponent, TabComponent],
  exports: [TabsetComponent, TabComponent],
})
export class TabsetModule {}
