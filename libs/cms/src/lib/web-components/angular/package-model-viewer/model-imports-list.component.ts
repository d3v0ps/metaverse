import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ImportToken } from '@central-factory/platforms/__generated__/models';

@Component({
  selector: 'cf-model-imports-list',
  template: `
    <div cfBlock="model-imports-list" *ngIf="imports">
      <cf-typography *ngIf="showHeader" type="h3">Imports</cf-typography>
      <div
        cfBlock="import"
        *ngFor="let import of imports"
        (click)="importClick.emit(import)"
      >
        <cf-typography>
          <cf-svg-icon
            cfElem="icon"
            src="assets/icons/codicons/link.svg"
          ></cf-svg-icon>
          <span cfElem="name">{{ import.name | cfCase }}</span
          >:
          <span cfElem="value">{{ import.path | json }}</span>
        </cf-typography>
      </div>
    </div>
  `,
  styles: [
    `
      .import {
        padding-left: 1rem;
        cursor: pointer;
        :hover {
          text-decoration: underline;
        }
        &__icon {
          color: var(--color-syntax-type);
          margin-right: 0.3rem;
        }
        &__name {
          color: var(--color-syntax-type);
        }
        &__value {
          color: var(--color-syntax-string);
        }
      }
    `,
  ],
})
export class ModelImportsListComponent {
  @Input() imports: ImportToken[] = [];
  @Output() importClick = new EventEmitter<ImportToken>();
  @Input() showHeader = true;
}
