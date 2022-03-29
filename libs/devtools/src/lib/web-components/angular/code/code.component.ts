import { Component, Input } from '@angular/core';

@Component({
  selector: 'cf-code',
  template: `
    <pre>
      <code>
        {{ content }}
      </code>
    </pre>
  `,
  styles: [
    `
      pre {
        overflow: auto;
        height: 100%;
      }
    `,
  ],
})
export class CodeComponent {
  @Input() content?: string;
}
