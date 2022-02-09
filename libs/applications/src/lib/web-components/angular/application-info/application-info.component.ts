import { Component, Input } from '@angular/core';
import { Application } from '@central-factory/applications/models/application';

@Component({
  selector: 'cf-application-info',
  template: `
    <div cfBlock="application-info">
      <div cfBlock="application-title">
        <h2 cfElem="name">
          {{ application?.name }}
        </h2>
        <h4 cfElem="author">
          {{ application?.additionalProperties?.author?.name }}
        </h4>
      </div>
    </div>
  `,
})
export class ApplicationInfoComponent {
  @Input() application?: Application;
}
