import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import {
  Application,
  ApplicationRenderingType,
} from '../../../models/application';

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
        <ng-container *ngSwitchCase="'webpack-module-federation'">
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
  @Input() set application(application: Application | undefined) {
    this._application = application;
    if (
      this.application?.additionalProperties?.renderingType ===
      ApplicationRenderingType.WebpackModuleFederation
    ) {
      this.router.navigate([application?.startUrl]);
    }
  }
  get application(): Application | undefined {
    return this._application;
  }

  private _application: Application | undefined;

  constructor(private router: Router) {}
}
