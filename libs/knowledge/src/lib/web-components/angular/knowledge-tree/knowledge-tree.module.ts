import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { SvgIconModule } from '@central-factory/web-components/angular/svg-icon/svg-icon.module';
import { KnowledgeBranchComponent } from './knowledge-branch.component';
import { KnowledgeLeafComponent } from './knowledge-leaf.component';
import { KnowledgeTreeComponent } from './knowledge-tree.component';

@NgModule({
  imports: [CommonModule, BemModule, SvgIconModule],
  declarations: [
    KnowledgeTreeComponent,
    KnowledgeLeafComponent,
    KnowledgeBranchComponent,
  ],
  exports: [
    KnowledgeTreeComponent,
    KnowledgeLeafComponent,
    KnowledgeBranchComponent,
  ],
})
export class KnowledgeTreeModule {}
