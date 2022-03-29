import { Component, EventEmitter, Input, Output } from '@angular/core';
import { KnowledgeSymbol } from '@central-factory/knowledge/models/knowledge-symbol';

@Component({
  selector: 'cf-knowledge-leaf',
  template: `
    <div
      cfBlock="knowledge-leaf"
      *ngIf="symbol"
      (click)="symbolClick.emit(symbol)"
    >
      <div cfBlock="text">
        <cf-svg-icon cfBlock="icon" cfMod="s" [src]="symbol.icon">
        </cf-svg-icon>
        {{ symbol.title | titlecase }}
      </div>
    </div>
  `,
  styles: [
    `
      .knowledge-leaf {
        cursor: pointer;
        padding-bottom: 0.5rem;
      }
    `,
  ],
})
export class KnowledgeLeafComponent {
  @Input() symbol?: KnowledgeSymbol;

  @Output() symbolClick = new EventEmitter<KnowledgeSymbol>();
}
