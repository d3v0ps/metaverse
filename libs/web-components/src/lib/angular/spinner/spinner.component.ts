import { Component } from '@angular/core';

@Component({
  selector: 'cf-spinner',
  template: `
    <div cfBlock="spinner" cfMod="3x">
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
export class SpinnerComponent {}
