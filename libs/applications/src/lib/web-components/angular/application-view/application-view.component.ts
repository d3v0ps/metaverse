import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import {
  Application,
  ApplicationIcon,
  ApplicationRenderingType,
  ApplicationShortcut,
  ColorVariation,
} from '../../../models/application';

@Component({
  selector: 'cf-application-view',
  template: `
    <div
      cfBlock="application-view"
      *ngIf="application"
      [cfMod]="{
        hidden: showSplashScreen
      }"
    >
      <cf-splash-screen
        *ngIf="showSplashScreen"
        [mods]="'in-application'"
        [displayLoadingTime]="2000"
        [displayWelcomeTime]="1000"
        [title]="application.name || ''"
        [logo]="applicationIcon?.src || ''"
        [backgroundColor]="applicationColor"
        welcomeMessage="Welcome to {{ application.name }}"
        [loadingTexts]="application.description?.split('.') || []"
        (splashScreenHide)="showSplashScreen = false"
      ></cf-splash-screen>

      <ng-container *ngIf="!application.additionalProperties?.renderingType">
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
    </div>
  `,
})
export class ApplicationViewComponent {
  @ViewChild('lazyloadedApplication', { read: ViewContainerRef })
  lazyloadedApplication!: ViewContainerRef;

  @Input() set application(value: Application | undefined) {
    this._application = value;

    if (!value) {
      return;
    }

    this.applicationIcon =
      this.applicationShortcut?.icons &&
      this.applicationShortcut.icons.length > 0
        ? this.applicationShortcut.icons[0]
        : this.application?.icons && this.application.icons.length > 0
        ? this.application.icons[0]
        : undefined;
    this.applicationColor =
      this.application?.additionalProperties?.colors &&
      this.application?.additionalProperties?.colors.length > 0
        ? this.application?.additionalProperties?.colors.find(
            (c) => c.variation === ColorVariation.Primary
          )?.color
        : this.application?.themeColor;

    this.showSplashScreen = true;

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

    if (!value) {
      return;
    }

    this.applicationIcon =
      value?.icons && value.icons.length > 0
        ? value.icons[0]
        : this.application?.icons && this.application.icons.length > 0
        ? this.application.icons[0]
        : undefined;

    this.showSplashScreen = true;
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

  public showSplashScreen = false;
  public applicationColor: string | undefined;
  public applicationIcon: ApplicationIcon | undefined;
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
