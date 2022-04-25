import { Component, Input } from '@angular/core';

@Component({
  selector: 'cf-badge',
  template: `
    <span
      cfBlock="badge"
      [cfMod]="[theme, uppercase ? 'uppercase' : undefined]"
    >
      <ng-content></ng-content>
    </span>
  `,
})
export class BadgeComponent {
  @Input() theme?: string;
  @Input() uppercase = false;
}
