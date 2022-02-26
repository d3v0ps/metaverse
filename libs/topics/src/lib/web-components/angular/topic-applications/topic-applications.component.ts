import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Application } from '@central-factory/applications/models/application';

@Component({
  selector: 'cf-topic-applications',
  template: `
    <div cfBlock="topic-applications">
      <cf-applications-carousel
        [showInfo]="false"
        [outline]="true"
        [shadow]="false"
        [showPlayButton]="false"
        [showUninstallButton]="false"
        [showDescription]="false"
        [applications]="applications"
        [installedApplications]="installedApplications"
        [applicationsPerPage]="maxApplications ? maxApplications : applications.length"
        [cardStyle]="{
          width: '100%'
        }"
        (applicationCardClick)="applicationClick.emit($event)"
      ></cf-applications-carousel>
    </div>
  `,
})
export class TopicApplicationsComponent {
  @Input() applications: Application[] = [];
  @Input() installedApplications: Application[] = [];
  @Input() maxApplications = 0;

  @Output() applicationClick = new EventEmitter<Application>();
}
