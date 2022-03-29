import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { KnowledgeSymbolViewComponent } from './knowledge-symbol-view.component';

@NgModule({
  imports: [CommonModule, BemModule],
  declarations: [KnowledgeSymbolViewComponent],
  exports: [KnowledgeSymbolViewComponent],
})
export class KnowledgeSymbolViewModule {}
