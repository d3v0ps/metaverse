import { CdkDragDrop, CdkDropList } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Application } from '@central-factory/applications/models/application';

@Component({
  selector: 'cf-applications-carousel',
  template: `
    <div
      cfBlock="applications-carousel"
      cdkDropList
      cdkDropListSortingDisabled
      [cdkDropListData]="applications"
      [cdkDropListConnectedTo]="dropListConnectedTo ? dropListConnectedTo : []"
      (cdkDropListDropped)="applicationCardDrop.emit($event)"
    >
      <div
        cdkDrag
        [cdkDragData]="application"
        *ngFor="let application of applications"
        cfBlock="applications-carousel-item"
      >
        <div cfBlock="drag-placeholder" *cdkDragPlaceholder></div>
        <cf-application-card
          [application]="application"
          (applicationClick)="applicationCardClick.emit(application)"
          (starClick)="applicationStarClick.emit(application)"
        ></cf-application-card>
      </div>
    </div>
  `,
})
export class ApplicationsCarouselComponent {
  @Input() applications: Application[] = [];
  @Input() dropListConnectedTo?: CdkDropList<any>[];

  @Output() applicationCardClick = new EventEmitter<Application>();
  @Output() applicationStarClick = new EventEmitter<Application>();
  @Output() applicationCardDrop = new EventEmitter<
    CdkDragDrop<Application[]>
  >();
}
