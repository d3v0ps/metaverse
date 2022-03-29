import { Component, EventEmitter, Input, Output } from '@angular/core';
import { KnowledgeSymbol } from '@central-factory/knowledge/models/knowledge-symbol';

export type KnowledgeTaxonomy = {
  id: string;
  title: string;
  icon: string;
  children: KnowledgeTaxonomy[];
  symbols: KnowledgeSymbol[];
};

@Component({
  selector: 'cf-knowledge-tree',
  template: `
    <div cfBlock="knowledge-tree">
      <ng-container *ngFor="let taxonomy of root">
        <cf-knowledge-branch
          [taxonomy]="taxonomy"
          (symbolClick)="symbolClick.emit($event)"
          (taxonomyClick)="taxonomyClick.emit($event)"
        ></cf-knowledge-branch>
      </ng-container>
    </div>
  `,
})
export class KnowledgeTreeComponent {
  @Input() root: KnowledgeTaxonomy[] = [];

  @Output() symbolClick = new EventEmitter<KnowledgeSymbol>();
  @Output() taxonomyClick = new EventEmitter<KnowledgeTaxonomy>();
}
