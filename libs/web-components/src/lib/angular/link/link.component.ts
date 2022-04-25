import { Component, Input } from '@angular/core';

@Component({
  selector: 'cf-link',
  template: `
    <div cfBlock="link">
      <a [href]="link.sourceUrl" [target]="target">
        <cf-typography type="p">
          {{ link.title }}
        </cf-typography>
      </a>

      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      .link {
        padding: 1rem;
        background-color: var(--color-base-dark-medium);
        box-shadow: var(--component-scene-content-shadow-outset),
          inset var(--component-scene-content-shadow-inset-primary),
          inset var(--component-scene-content-shadow-inset-secondary);
        border-radius: 20px;
      }
    `,
  ],
})
export class LinkComponent {
  @Input() link: {
    title: string;
    sourceUrl: string;
  } = {
    title: '',
    sourceUrl: '',
  };

  @Input() target = '_blank';
}
