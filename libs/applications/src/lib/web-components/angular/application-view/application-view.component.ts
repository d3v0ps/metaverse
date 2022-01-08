import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import {
  Application,
  ApplicationRenderingType,
  ApplicationShortcut,
} from '../../../models/application';

@Component({
  selector: 'cf-application-view',
  template: `
    <ng-container *ngIf="application">
      <ng-container *ngIf="!application.additionalProperties?.renderingType">
        <cf-application-webview
          [application]="application"
          [applicationShortcut]="applicationShortcut"
        ></cf-application-webview>
      </ng-container>

      <ng-container
        [ngSwitch]="application.additionalProperties?.renderingType"
      >
        <ng-container *ngSwitchCase="'webview'">
          <cf-application-webview
            [application]="application"
            [applicationShortcut]="applicationShortcut"
          ></cf-application-webview>
        </ng-container>
        <ng-container *ngSwitchCase="'webpack-module-federation'">
          <div cfBlock="application-remote-module">
            <ng-template #lazyloadedApplication></ng-template>
          </div>
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
  @ViewChild('lazyloadedApplication', { read: ViewContainerRef })
  lazyloadedApplication!: ViewContainerRef;

  @Input() set application(application: Application | undefined) {
    this._application = application;
    if (
      this.application?.additionalProperties?.renderingType ===
      ApplicationRenderingType.WebpackModuleFederation
    ) {
      this.loadDynamic();
    }
  }
  get application(): Application | undefined {
    return this._application;
  }

  @Input() set applicationShortcut(value: ApplicationShortcut | undefined) {
    this._applicationShortcut = value;
    // if (
    //   this.application?.additionalProperties?.renderingType ===
    //   ApplicationRenderingType.WebpackModuleFederation
    // ) {
    //   this.loadDynamic();
    // }
  }
  get applicationShortcut(): ApplicationShortcut | undefined {
    return this._applicationShortcut;
  }

  private _application: Application | undefined;
  private _applicationShortcut: ApplicationShortcut | undefined;

  constructor(private router: Router) {}

  async loadDynamic() {
    const federatedUrl = this.application?.startUrl;

    if (!federatedUrl) {
      return;
    }
    const module = await loadRemoteModule({
      type: 'module',
      remoteEntry: federatedUrl,
      exposedModule: './Module',
    }).then((m) => m.MetadronesModule);

    this.lazyloadedApplication.clear();
    this.lazyloadedApplication.createComponent(module.Component);
  }
}
