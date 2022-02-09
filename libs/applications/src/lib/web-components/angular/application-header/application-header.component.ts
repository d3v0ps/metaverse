import { Component, Input } from '@angular/core';
import { Application } from '@central-factory/applications/models/application';

@Component({
  selector: 'cf-application-header',
  template: `
    <div cfBlock="application-header">
      <cf-application-icon [iconStyle]="iconStyle" [application]="application">
      </cf-application-icon>
      <div cfBlock="application-content">
        <cf-application-info
          *ngIf="showInfo"
          [application]="application"
          [showAuthor]="showAuthor"
        ></cf-application-info>
      </div>
    </div>
  `,
})
export class ApplicationHeaderComponent {
  @Input() application?: Application;
  @Input() showInfo = true;
  @Input() showAuthor = true;
  @Input() outline = false;
  @Input() iconStyle = {};
}
