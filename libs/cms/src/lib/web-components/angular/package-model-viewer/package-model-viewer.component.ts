import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  ImportToken,
  TokensSchema,
  TypeToken,
} from '@central-factory/platforms/__generated__/models';
import { Package } from '../../../states/packages.state';

@Component({
  selector: 'cf-package-model-viewer',
  template: `
    <div cfBlock="package-model-viewer" *ngIf="model && package">
      <div cfBlock="header">
        <cf-typography
          type="h2"
          cfElem="name"
          [cfMod]="model.name === 'index' ? 'index' : undefined"
        >
          <cf-svg-icon
            src="assets/icons/codicons/symbol-{{
              model.name === 'index' ? 'ruler' : 'misc'
            }}.svg"
          ></cf-svg-icon>
          {{ model.name | cfCase }}
        </cf-typography>
        <cf-typography>
          <ng-container
            *ngIf="model.description; else autogeneratedDescriptionTemplate"
          >
            {{ model.description }}
          </ng-container>
          <ng-template #autogeneratedDescriptionTemplate>
            <ng-container *ngIf="model.name !== 'index'">
              This is the Domain Model for
              <strong>{{ model.name | cfCase }}</strong>
            </ng-container>
            <ng-container *ngIf="model.name === 'index'">
              These are the Root Types for the
              <strong>{{ package.name | cfCase }}</strong> module
            </ng-container>
          </ng-template>
        </cf-typography>
      </div>
      <div cfBlock="content">
        <div cfElem="item" *ngIf="model.imports.length">
          <cf-model-imports-list
            [imports]="model.imports"
            (importClick)="importClick.emit($event)"
          ></cf-model-imports-list>
        </div>

        <div cfElem="item" *ngIf="model.roots.length">
          <cf-model-roots-list
            [roots]="model.roots"
            (rootClick)="rootClick.emit($event)"
          ></cf-model-roots-list>
        </div>

        <div cfElem="item" *ngIf="model.enums.length">
          <cf-model-enums-list [enums]="model.enums"></cf-model-enums-list>
        </div>

        <div cfElem="item" *ngIf="model.types.length">
          <cf-model-types-list
            [types]="model.types"
            [type]="type"
            (typeClick)="typeClick.emit($event)"
          ></cf-model-types-list>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .header {
        margin-bottom: 1rem;
        .header__name {
          color: var(--color-syntax-file) !important;
          &--index {
            color: var(--color-syntax-ignore) !important;
          }
        }
      }

      .content {
        &__item {
          margin-bottom: 1rem;
        }
      }
    `,
  ],
})
export class PackageModelViewerComponent {
  @Input() package?: Package;
  @Input() model?: TokensSchema;
  @Input() type?: TypeToken;

  @Output() importClick = new EventEmitter<ImportToken>();
  @Output() rootClick = new EventEmitter<string>();
  @Output() typeClick = new EventEmitter<string>();
}
