import { HttpClient } from '@angular/common/http';
import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { OnApplicationLoad } from '@central-factory/applications/models/application-interfaces';
import { WorldsState } from '@central-factory/worlds/states/worlds.state';
import { World } from '@central-factory/worlds/__generated__/models';
import {
  catchError,
  filter,
  of,
  Subject,
  switchMap,
  takeUntil,
  tap,
} from 'rxjs';
import { KnowledgeSymbol } from '../../../__generated__/models';
import { KnowledgeTaxonomy } from '../knowledge-tree/knowledge-branch.component';

@Component({
  selector: 'cf-knowledge-index',
  template: `
    <div cfBlock="knowledge-index" *ngIf="!root">
      No knowledge base found. Mount your knowledge base at mnt/world-id in your
      desired host to access your markdown notes.
    </div>
    <div cfBlock="knowledge-index" *ngIf="root">
      <cf-sidebar-container>
        <!-- A sidebar -->
        <cf-sidebar
          [(opened)]="sidebarOpened"
          [showBackdrop]="false"
          [closeOnClickBackdrop]="true"
          [closeOnClickOutside]="true"
        >
          <button cfBlock="button" (click)="sidebarOpened = !sidebarOpened">
            <cf-svg-icon
              cfBlock="icon"
              src="assets/icons/mdi/book-open-blank-variant.svg"
            ></cf-svg-icon>
          </button>
          <div cfElem="tree">
            <cf-knowledge-tree
              [root]="root"
              (symbolClick)="onDocumentClick($event)"
              (taxonomyClick)="onFolderClick($event)"
            ></cf-knowledge-tree>
          </div>
        </cf-sidebar>

        <div cf-sidebar-content>
          <div cfElem="symbol">
            <ng-container *ngIf="!selectedSymbol">
              <cf-knowledge-tree
                [root]="root"
                (symbolClick)="onDocumentClick($event)"
                (taxonomyClick)="onFolderClick($event)"
              ></cf-knowledge-tree>
            </ng-container>
            <ng-container *ngIf="selectedSymbol">
              <button cfBlock="button" (click)="sidebarOpened = !sidebarOpened">
                <cf-svg-icon
                  cfBlock="icon"
                  src="assets/icons/mdi/book-open-blank-variant.svg"
                ></cf-svg-icon>
              </button>
              <ng-container *ngFor="let section of selectedSymbol.sections">
                <cf-typography type="h2">
                  {{ section.title }}
                </cf-typography>
                <ng-container *ngFor="let document of section.documents">
                  <ng-container [ngSwitch]="document.meta.contentType">
                    <ng-container *ngSwitchCase="'page'">
                      <div style="margin: .5rem">
                        <cf-link
                          [link]="{
                            title: document.meta.title,
                            sourceUrl: document.meta.sourceUrl
                          }"
                        ></cf-link>
                      </div>
                    </ng-container>
                    <ng-container *ngSwitchCase="'text'">
                      <cf-markdown
                        *ngIf="document.content"
                        [content]="document.content"
                      ></cf-markdown>
                    </ng-container>
                    <ng-container *ngSwitchDefault>
                      <cf-markdown
                        *ngIf="document.content"
                        [content]="document.content"
                      ></cf-markdown>
                    </ng-container>
                  </ng-container>
                </ng-container>
              </ng-container>
            </ng-container>
          </div>
        </div>
      </cf-sidebar-container>
    </div>
  `,
  styles: [
    `
      .knowledge-index {
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;

        ::ng-deep .cf-sidebar {
          background-color: var(--color-base-dark-medium);
          min-width: 50%;
          padding: 0.5rem;
        }

        &__symbol,
        &__tree {
          padding-top: 1rem;
        }

        > * {
          height: 100%;
        }

        > *:nth-child(1) {
          flex: 1 1 30%;
          min-width: 15ch;
          overflow: auto;
        }

        > *:nth-child(2) {
          flex: 1 1 65%;
          min-width: 30ch;
          overflow: auto;
        }
      }
    `,
  ],
})
export class KnowledgeIndexComponent
  implements OnInit, OnDestroy, OnApplicationLoad
{
  root?: any;
  selectedSymbol?: {
    content: string;
    sections: any[];
  };

  sidebarOpened = false;
  documentIsLoading = true;

  @Output() applicationLoad = new EventEmitter<void>();

  private destroy$ = new Subject<void>();

  constructor(private http: HttpClient, private worldsState: WorldsState) {}

  ngOnInit() {
    this.worldsState.selectedWorld$
      .pipe(
        takeUntil(this.destroy$),
        filter((world) => !!world),
        switchMap((world) =>
          this.http
            .get(`http://localhost:3333/api/documents/${(world as World).id}`)
            .pipe(catchError((error) => of(null)))
        ),
        tap((data: any) => {
          this.root = data;
          this.applicationLoad.emit();
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onDocumentClick({
    symbol,
    taxonomy,
  }: {
    symbol: KnowledgeSymbol;
    taxonomy: KnowledgeTaxonomy;
  }) {
    if (!this.worldsState.selectedWorld$.value?.id) {
      return;
    }

    this.sidebarOpened = false;
    this.selectedSymbol = undefined;
    this.http
      .get(
        `http://localhost:3333/api/documents/${this.worldsState.selectedWorld$.value.id}/${symbol.id}`
      )
      .pipe(
        tap((data: any) => {
          this.documentIsLoading = false;
          this.selectedSymbol = data;
        })
      )
      .subscribe();
  }

  onFolderClick(folder: KnowledgeTaxonomy) {
    console.debug('onFolderClick', folder);
  }
}
