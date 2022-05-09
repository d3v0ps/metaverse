import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'cf-model-imports-list',
  template: `
    <div cfBlock="model-imports-list" *ngIf="imports">
      <cf-typography *ngIf="showHeader" type="h3">Imports</cf-typography>
      <div
        cfBlock="import"
        *ngFor="let import of imports | keyvalue"
        (click)="importClick.emit(import)"
      >
        <cf-typography>
          <cf-svg-icon
            cfElem="icon"
            src="assets/icons/codicons/link.svg"
          ></cf-svg-icon>
          <span cfElem="name">{{ import.key | cfCase }}</span
          >:
          <span cfElem="value">{{ import.value | json }}</span>
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
  @Input() imports: Record<string, string> = {};
  @Output() importClick = new EventEmitter<{ key: string; value: string }>();
  @Input() showHeader = true;
}
