import { Component, Input } from '@angular/core';

export type Media = {
  type: 'image' | 'video' | 'audio' | 'text' | 'game';
  url: string;
  src?: string;
  title?: string;
  content?: string;
  cover?: string;
};

@Component({
  selector: 'cf-media',
  template: `
    <div
      cfBlock="media"
      [cfMod]="media.type"
      *ngIf="media"
      (click)="onMediaClick()"
    >
      <ng-container [ngSwitch]="media.type">
        <ng-container *ngSwitchCase="'image'">
          <div
            cfBlock="background"
            [ngStyle]="{
              background: 'url(' + media.src + ')'
            }"
          ></div>
          <div cfBlock="foreground">
            <div cfBlock="media-title" *ngIf="media.title">
              <h2 cfBlock="heading" [cfMod]="{ light: true }">
                {{ media.title }}
              </h2>
            </div>
          </div>
        </ng-container>
      </ng-container>
    </div>
  `,
  styles: [
    `
      @use 'web-components/abstracts/mixins/materials' as materials;

      .media {
        position: relative;
        min-height: 400px;
        min-width: 400px;
        cursor: pointer;
        &:hover {
          filter: brightness(1.1);
        }
      }
      .media .background {
        @include materials.clay;
        background-size: cover !important;
        position: absolute;
        width: 100%;
        height: 100%;
      }
      .media .foreground {
        position: absolute;
        background: rgba(0, 0, 0, 0.5);
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        .media-title {
          padding: 3rem 1rem 0.25rem 0.25rem;
        }
      }

      .media {
        &--image {
          .foreground {
            bottom: 0;
            width: 100%;
          }
        }
      }
    `,
  ],
})
export class MediaComponent {
  @Input() media?: Media;

  onMediaClick() {
    if (!this.media) {
      return;
    }

    window.open(this.media.url, '__blank');
  }
}
