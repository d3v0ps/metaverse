import { Component, Input } from '@angular/core';
import { Application } from '@central-factory/applications/__generated__/models';

@Component({
  selector: 'cf-application-info',
  template: `
    <div cfBlock="application-info">
      <div cfBlock="application-title">
        <h2 cfElem="name">
          {{ application?.name }}
        </h2>
        <h4 cfElem="author" *ngIf="showAuthor">
          {{ application?.additionalProperties?.author?.name }}
        </h4>
      </div>
    </div>
  `,
})
export class ApplicationInfoComponent {
  @Input() application?: Application;
  @Input() showAuthor = true;
}
