import { loadRemoteModule } from '@angular-architects/module-federation';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Router } from '@angular/router';
import { OnApplicationLoad } from '@central-factory/applications/models/application-interfaces';
import { FantasyMapGeneratorMap } from '@central-factory/worlds/models/fmg-map';
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
        [displayWelcomeTime]="999000"
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
        <ng-container *ngSwitchCase="'local'">
          <div cfBlock="application-local-module" *ngIf="localResolver">
            <ng-template
              *ngxComponentOutlet="
                localResolver | resolve: application.startUrl
              "
            >
            </ng-template>
          </div>
        </ng-container>
        <!-- ng-container *ngSwitchCase="'angular-element'">
          <div cfBlock="application-remote-module">
            <div
              *axLazyElement="application.startUrl"
            >
            </div>
          </div>
        </ng-container -->
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApplicationViewComponent implements OnApplicationLoad {
  @ViewChild('lazyloadedApplication', { read: ViewContainerRef })
  lazyloadedApplication!: ViewContainerRef;

  @Input() localResolver?: any;
  @Input() world?: FantasyMapGeneratorMap;

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
      ApplicationRenderingType.Local
    ) {
      this.loadDynamicLocal();
    }

    if (
      this.application?.additionalProperties?.renderingType ===
      ApplicationRenderingType.WebpackModuleFederation
    ) {
      this.loadDynamicRemote();
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

  @Output() applicationLoad = new EventEmitter<void>();

  public showSplashScreen = false;
  public applicationColor: string | undefined;
  public applicationIcon: ApplicationIcon | undefined;
  private _application: Application | undefined;
  private _applicationShortcut: ApplicationShortcut | undefined;

  constructor(private router: Router) {
    this.applicationLoad.subscribe(() => (this.showSplashScreen = false));
  }

  async loadDynamicLocal() {
    const federatedUrl = this.application?.startUrl;

    if (!federatedUrl) {
      return;
    }

    // console.debug(federatedUrl, federatedUrl === '@central-factory/manage-avatars/scenes/create-avatar/create-avatar.module');
    // const m = await import(federatedUrl);

    // console.debug('m', m);
    // this.lazyloadedApplication.clear();
    // this.lazyloadedApplication.createComponent(module.Component);
  }

  async loadDynamicRemote() {
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
