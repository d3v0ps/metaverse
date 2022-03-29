import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { KnowledgeSymbolViewModule } from '../knowledge-symbol-view/knowledge-symbol-view.module';
import { KnowledgeTreeModule } from '../knowledge-tree/knowledge-tree.module';
import { KnowledgeIndexComponent } from './knowledge-index.component';
import { MarkdownComponent } from './markdown.component';

@NgModule({
  imports: [
    CommonModule,
    BemModule,
    KnowledgeSymbolViewModule,
    KnowledgeTreeModule,
  ],
  declarations: [KnowledgeIndexComponent, MarkdownComponent],
  exports: [KnowledgeIndexComponent],
})
export class KnowledgeIndexModule {}
