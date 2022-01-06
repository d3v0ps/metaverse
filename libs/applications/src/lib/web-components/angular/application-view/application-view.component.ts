import { Component, Input } from '@angular/core';
import { Application } from '../../../models/application';

@Component({
  selector: 'cf-application-view',
  template: `
    <ng-container *ngIf="application">
      <ng-container *ngIf="!application.additionalProperties?.renderingType">
        <cf-application-webview
          [application]="application"
        ></cf-application-webview>
      </ng-container>

      <ng-container
        [ngSwitch]="application.additionalProperties?.renderingType"
      >
        <ng-container *ngSwitchCase="'webview'">
          <cf-application-webview
            [application]="application"
          ></cf-application-webview>
        </ng-container>
        <ng-container *ngSwitchDefault>
          Unrecognized renderingType
          {{ application.additionalProperties?.renderingType }}
        </ng-container>
      </ng-container>
    </ng-container>
  `,
})
export class ApplicationViewComponent {
  @Input() application?: Application;
}
