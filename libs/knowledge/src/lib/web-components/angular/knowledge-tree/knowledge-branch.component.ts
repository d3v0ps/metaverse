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
  selector: 'cf-knowledge-branch',
  template: `
    <div cfBlock="knowledge-branch" *ngIf="taxonomy">
      <div
        cfElem="title"
        (click)="isOpened = !isOpened; taxonomyClick.emit(taxonomy)"
      >
        <div cfBlock="text">
          <cf-svg-icon
            cfBlock="icon"
            cfMod="xs"
            src="assets/icons/mdi/chevron-{{ isOpened ? 'down' : 'right' }}.svg"
          >
          </cf-svg-icon>
          <cf-svg-icon cfBlock="icon" cfMod="s" [src]="taxonomy.icon">
          </cf-svg-icon>
          {{ taxonomy.title | titlecase }}
        </div>
      </div>

      <div *ngIf="isOpened" style="padding-left: 1.2rem;">
        <div *ngFor="let child of taxonomy.children">
          <cf-knowledge-branch
            [taxonomy]="child"
            (symbolClick)="symbolClick.emit($event)"
            (taxonomyClick)="taxonomyClick.emit($event)"
          ></cf-knowledge-branch>
        </div>

        <div
          style="padding-left: 1.2rem;"
          *ngFor="let symbol of taxonomy.symbols"
        >
          <cf-knowledge-leaf
            [symbol]="symbol"
            (symbolClick)="symbolClick.emit($event)"
          ></cf-knowledge-leaf>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .knowledge-branch {
        &__title {
          cursor: pointer;
          padding-bottom: 0.5rem;
        }
      }
    `,
  ],
})
export class KnowledgeBranchComponent {
  @Input() taxonomy?: KnowledgeTaxonomy;
  @Input() isOpened = false;

  @Output() taxonomyClick = new EventEmitter<KnowledgeTaxonomy>();
  @Output() symbolClick = new EventEmitter<KnowledgeSymbol>();
}
