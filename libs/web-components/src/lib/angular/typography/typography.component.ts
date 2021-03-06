import { Component, Input } from '@angular/core';

export type TypographyType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

@Component({
  selector: 'cf-typography',
  template: `
    <div
      cfBlock="typography"
      [cfMod]="[
        type,
        theme,
        bold ? 'bold' : undefined,
        clickable ? 'clickable' : undefined
      ]"
    >
      <ng-content></ng-content>
    </div>
  `,
})
export class TypographyComponent {
  @Input() type = 'p';
  @Input() theme?: string;

  @Input() bold = false;

  @Input() clickable = false;
}
