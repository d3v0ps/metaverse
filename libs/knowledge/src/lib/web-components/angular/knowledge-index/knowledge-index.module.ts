import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { LinkModule } from '@central-factory/web-components/angular/link/link.module';
import { SidebarModule } from '@central-factory/web-components/angular/sidebar/sidebar.module';
import { SvgIconModule } from '@central-factory/web-components/angular/svg-icon/svg-icon.module';
import { TypographyModule } from '@central-factory/web-components/angular/typography/typography.module';
import { KnowledgeSymbolViewModule } from '../knowledge-symbol-view/knowledge-symbol-view.module';
import { KnowledgeTreeModule } from '../knowledge-tree/knowledge-tree.module';
import { KnowledgeIndexComponent } from './knowledge-index.component';
import { MarkdownComponent } from './markdown.component';

@NgModule({
  imports: [
    CommonModule,
    BemModule,
    SvgIconModule,
    KnowledgeSymbolViewModule,
    KnowledgeTreeModule,
    TypographyModule,
    SidebarModule,
    LinkModule,
  ],
  declarations: [KnowledgeIndexComponent, MarkdownComponent],
  exports: [KnowledgeIndexComponent],
})
export class KnowledgeIndexModule {}
