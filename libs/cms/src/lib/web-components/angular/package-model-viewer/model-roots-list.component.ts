import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'cf-model-roots-list',
  template: `
    <div cfBlock="model-roots-list" *ngIf="roots">
      <cf-typography *ngIf="showHeader" type="h3">Roots</cf-typography>
      <div
        cfBlock="root"
        *ngFor="let root of roots"
        (click)="rootClick.emit(root)"
      >
        <cf-typography>
          <cf-svg-icon
            src="assets/icons/fluent-icons/symbol-class.svg"
          ></cf-svg-icon>
          {{ root | cfCase }}
        </cf-typography>
      </div>
    </div>
  `,

  styles: [
    `
      .root {
        padding-left: 1rem;
        color: var(--color-syntax-type);
        cursor: pointer;
        :hover {
          text-decoration: underline;
        }
      }
    `,
  ],
})
export class ModelRootsListComponent {
  @Input() roots: string[] = [];
  @Output() rootClick = new EventEmitter<string>();
  @Input() showHeader = true;
  @Input() headerTheme = 'info';
}
