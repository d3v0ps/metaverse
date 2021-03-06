import { Component, Input } from '@angular/core';
import { Application } from '@central-factory/applications/__generated__/models';

@Component({
  selector: 'cf-application-header',
  template: `
    <div cfBlock="application-header">
      <cf-application-icon [iconStyle]="iconStyle" [application]="application">
      </cf-application-icon>
      <div cfBlock="application-content" *ngIf="showInfo">
        <cf-application-info
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
