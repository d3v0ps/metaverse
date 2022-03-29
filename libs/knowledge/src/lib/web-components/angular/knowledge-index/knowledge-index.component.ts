import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { tap } from 'rxjs';
import { KnowledgeSymbol } from '../../../models/knowledge-symbol';
import { KnowledgeTaxonomy } from '../knowledge-tree/knowledge-branch.component';

@Component({
  selector: 'cf-knowledge-index',
  template: `
    <div cfBlock="knowledge-index" *ngIf="!root">
      No knowledge base found. Mount your knowledge base at mnt/world-id in your
      desired host to access your markdown notes.
    </div>
    <div cfBlock="knowledge-index" *ngIf="root">
      <div cfElem="tree">
        <cf-knowledge-tree
          [root]="root"
          (symbolClick)="onSymbolClick($event)"
          (taxonomyClick)="onTaxonomyClick($event)"
        ></cf-knowledge-tree>
      </div>
      <div cfElem="symbol">
        <cf-markdown
          *ngIf="selectedSymbol"
          [content]="selectedSymbol.content"
        ></cf-markdown>
        <div #editorRef></div>
      </div>
    </div>
  `,
  styles: [
    `
      .knowledge-index {
        height: 100%;
        padding: 1rem;
        display: flex;
        flex-wrap: wrap;

        > * {
          height: 100%;
        }

        > *:nth-child(1) {
          flex: 1 1 25%;
          min-width: 15ch;
          overflow: auto;
        }

        > *:nth-child(2) {
          flex: 1 1 70%;
          min-width: 30ch;
          overflow: auto;
        }
      }
    `,
  ],
})
export class KnowledgeIndexComponent {
  @ViewChild('editorRef') editorRef?: ElementRef;

  root?: any;
  selectedSymbol?: {
    content: string;
  };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get('http://localhost:3333/api/001')
      .subscribe((data) => (this.root = data));
  }

  onSymbolClick(symbol: KnowledgeSymbol) {
    this.http
      .get(`http://localhost:3333/api/001/symbols/${symbol.id}`)
      .pipe(
        tap((data: any) => {
          console.debug('symbol', data);
          this.selectedSymbol = data;
        })
      )
      .subscribe();
  }

  onTaxonomyClick(taxonomy: KnowledgeTaxonomy) {
    console.debug('taxonomy', taxonomy);
  }
}
