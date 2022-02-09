import { Component, Input } from '@angular/core';
import { Application } from '@central-factory/applications/models/application';

@Component({
  selector: 'cf-application-description',
  template: `
    <div cfBlock="application-description">
      <p>
        {{ application?.description }}
      </p>
    </div>
  `,
})
export class ApplicationDescriptionComponent {
  @Input() application?: Application;
}
