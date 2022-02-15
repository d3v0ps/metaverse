import { Component, Input } from '@angular/core';

@Component({
  selector: 'cf-spinner',
  template: `
    <div cfBlock="spinner" [cfMod]="size">
      <div></div>
    </div>
  `,
  styles: [
    `
      :host {
        display: contents;
      }
    `,
  ],
})
export class SpinnerComponent {
  @Input() size = '3x';
}
