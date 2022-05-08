import { Component, Input } from '@angular/core';
import { Topic } from '../../../__generated__/models';

@Component({
  selector: 'cf-topic-header',
  template: `
    <div cfBlock="topic-heading" *ngIf="topic">
      <h2 cfBlock="heading">
        <div cfElem="heading-content">
          <cf-svg-icon
            *ngIf="topic.icon"
            [src]="topic.icon"
            cfElem="icon"
            [cfMod]="[topic.background ? topic.themeColor || 'light' : 'dark']"
          ></cf-svg-icon>
          <span
            cfBlock="text"
            [cfMod]="[topic.background ? topic.themeColor || 'light' : 'dark']"
            >{{ topic.title }}</span
          >
        </div>

        <div cfElem="heading-content">
          <cf-svg-icon
            *ngIf="topic.priority === 'high'"
            cfBlock="icon"
            cfMod="danger"
            src="assets/icons/mdi/clock-alert.svg"
          ></cf-svg-icon>
        </div>
      </h2>
    </div>
  `,
})
export class TopicHeaderComponent {
  @Input() topic?: Topic;
}
