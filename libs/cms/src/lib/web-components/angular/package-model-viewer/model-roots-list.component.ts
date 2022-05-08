import { Component, Input } from '@angular/core';

@Component({
  selector: 'cf-model-roots-list',
  template: `
    <div cfBlock="model-roots-list" *ngIf="roots">
      <cf-typography *ngIf="showHeader" type="h3">Roots</cf-typography>
      <div cfBlock="root" *ngFor="let root of roots">
        <cf-svg-icon src="assets/icons/codicons/symbol-class.svg"></cf-svg-icon>
        {{ root | cfCase }}
      </div>
    </div>
  `,

  styles: [
    `
      .root {
        padding-left: 1rem;
        color: var(--color-syntax-type);
      }
    `,
  ],
})
export class ModelRootsListComponent {
  @Input() roots: string[] = [];
  @Input() showHeader = true;
  @Input() headerTheme = 'info';
}
