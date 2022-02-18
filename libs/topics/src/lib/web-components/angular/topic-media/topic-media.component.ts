import { Component, Input } from '@angular/core';
import { Topic } from '../../../models/topic';

@Component({
  selector: 'cf-topic-media',
  template: `
    <div cfBlock="topic-media" *ngIf="topic">
      <ng-container *ngFor="let media of topic.media">
        <cf-media [media]="media"></cf-media>
      </ng-container>
    </div>
  `,
  styles: [
    `
      .topic-media {
        margin: 1rem auto;
        display: flex;
        flex-direction: row;
        gap: 1rem;
        overflow-x: auto;
      }
    `,
  ],
})
export class TopicMediaComponent {
  @Input() topic?: Topic;
}
