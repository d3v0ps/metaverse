import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Topic } from '../../../models/topic';

@Component({
  selector: 'cf-topic-background',
  template: `
    <div
      cfBlock="topic-background"
      *ngIf="topic"
      [ngStyle]="{
        'background-size': 'cover',
        'background-blend-mode': 'saturation',
        background: topic.background
          ? 'rgba(0, 0, 0, 0.4) url(' + topic.background + ')'
          : ''
      }"
    ></div>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class TopicBackgroundComponent {
  @Input() topic?: Topic;
}
