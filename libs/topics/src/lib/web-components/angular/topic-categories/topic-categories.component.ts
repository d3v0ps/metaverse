import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Application } from '@central-factory/applications/__generated__/models';

@Component({
  selector: 'cf-topic-categories',
  template: `
    <div cfBlock="topic-categories">
      <button
        *ngIf="collapsible"
        cfBlock="button"
        (click)="showContent = !showContent"
        [ngStyle]="{
          margin: '0 auto'
        }"
      >
        <cf-svg-icon
          [src]="'assets/icons/mdi/web-box.svg'"
          cfElem="icon"
        ></cf-svg-icon>
        <span cfBlock="label">
          {{ showContent ? 'Hide' : 'Show' }} more Applications
        </span>
      </button>
      <div *ngIf="showContent" cfElem="content">
        <div
          *ngFor="let item of applicationsByCategory | keyvalue"
          cfBlock="topic-category"
        >
          <h3 cfBlock="heading">
            {{ item.key | titlecase }}
          </h3>
          <cf-applications-carousel
            [outline]="true"
            [shadow]="false"
            [showDescription]="false"
            [showPlayButton]="false"
            [showUninstallButton]="false"
            [applications]="item.value"
            [installedApplications]="installedApplications"
            [cardStyle]="{
              width: '100%'
            }"
            (applicationCardClick)="applicationClick.emit($event)"
          ></cf-applications-carousel>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .topic-categories {
        &__content {
          margin-top: 2rem;
          max-height: 300px;
          overflow: auto;
        }
      }
    `,
  ],
})
export class TopicCategoriesComponent {
  @Input() applicationsByCategory: Record<string, Application[]> = {};
  @Input() installedApplications: Application[] = [];
  @Input() collapsible = true;
  @Input() showContent = false;

  @Output() applicationClick = new EventEmitter<Application>();
}
