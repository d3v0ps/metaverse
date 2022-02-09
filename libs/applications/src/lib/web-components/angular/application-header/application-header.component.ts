import { Component, Input } from '@angular/core';
import { Application } from '@central-factory/applications/models/application';

@Component({
  selector: 'cf-application-header',
  template: `
    <div cfBlock="application-header">
      <cf-application-icon [iconStyle]="iconStyle" [application]="application">
      </cf-application-icon>
      <div cfBlock="application-content">
        <cf-application-info [application]="application"></cf-application-info>
      </div>
    </div>
  `,
})
export class ApplicationHeaderComponent {
  @Input() application?: Application;
  @Input() outline = false;
  @Input() iconStyle = {};
}
