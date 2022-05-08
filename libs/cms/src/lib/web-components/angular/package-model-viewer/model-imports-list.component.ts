import { Component, Input } from '@angular/core';

@Component({
  selector: 'cf-model-imports-list',
  template: `
    <div cfBlock="model-imports-list" *ngIf="imports">
      <cf-typography *ngIf="showHeader" type="h3">Imports</cf-typography>
      <div cfBlock="import" *ngFor="let import of imports | keyvalue">
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
        &__icon {
          color: var(--color-syntax-type);
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
  @Input() showHeader = true;
}
