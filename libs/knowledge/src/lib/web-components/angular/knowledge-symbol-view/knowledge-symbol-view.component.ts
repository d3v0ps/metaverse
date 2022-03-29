import { Component, Input } from '@angular/core';
import { KnowledgeSymbol } from '../../../models/knowledge-symbol';

@Component({
  selector: 'cf-knowledge-symbol-view',
  template: `
    <div cfBlock="knowledge-symbol-view" *ngIf="knowledgeSymbol">
      {{ knowledgeSymbol | json }}
    </div>
  `,
})
export class KnowledgeSymbolViewComponent {
  @Input() knowledgeSymbol?: KnowledgeSymbol;
}
