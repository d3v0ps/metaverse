import { Component, EventEmitter, Input, Output } from '@angular/core';
import { KnowledgeSymbol } from '@central-factory/knowledge/__generated__/models';

@Component({
  selector: 'cf-knowledge-leaf',
  template: `
    <div
      cfBlock="knowledge-leaf"
      *ngIf="symbol"
      (click)="symbolClick.emit(symbol)"
    >
      <div cfBlock="text">
        <cf-svg-icon
          *ngIf="symbol.icon"
          cfBlock="icon"
          cfMod="s"
          [src]="symbol.icon"
        >
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
        .text {
          word-break: break-all;
          white-space: nowrap;
        }
      }
    `,
  ],
})
export class KnowledgeLeafComponent {
  @Input() symbol?: KnowledgeSymbol;

  @Output() symbolClick = new EventEmitter<KnowledgeSymbol>();
}
