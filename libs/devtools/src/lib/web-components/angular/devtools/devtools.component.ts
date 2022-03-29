import { Component } from '@angular/core';

@Component({
  selector: 'cf-devtools',
  template: `
    <div cfBlock="devtools">
      <cf-worlds-manager></cf-worlds-manager>
    </div>
  `,
  styles: [
    `
      .devtools {
        height: 100%;
      }
    `,
  ],
})
export class DevtoolsComponent {}
