import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { isElectron } from '@central-factory/web-components/shared/platform/desktop/is-electron';
import type { Application } from '../../../../../models/application';

@Component({
  selector: 'cf-application-webview',
  template: `
    <ng-container *ngIf="application">
      <iframe
        *ngIf="!isElectron"
        cfBlock="application-webview"
        [src]="applicationUrl"
      ></iframe>
      <webview
        *ngIf="isElectron"
        cfBlock="application-webview"
        [attr.src]="applicationUrlString"
        disablewebsecurity
        allowpopups
      ></webview>
    </ng-container>
  `,
})
export class ApplicationWebviewComponent {
  @Input() public set application(application: Application | undefined) {
    this._application = application;

    if (application) {
      this.applicationUrl = this.getApplicationUrl(application);
    }
  }
  public get application(): Application | undefined {
    return this._application;
  }

  public applicationUrlString?: string;
  public applicationUrl?: SafeUrl;

  public isElectron = isElectron();

  private _application?: Application;

  constructor(private readonly domSanitizer: DomSanitizer) {}

  private getApplicationUrl(application: Application): SafeUrl | undefined {
    if (!application.shortcuts) {
      throw new Error('Application does not have shortcuts');
    }

    const applicationDefaultShortcut = application.additionalProperties
      ?.defaultShortcut
      ? application.shortcuts.find(
          (shortcut) =>
            shortcut.name === application.additionalProperties?.defaultShortcut
        )
      : application.shortcuts[0];

    if (!applicationDefaultShortcut) {
      throw new Error('Application does not have default shortcut');
    }

    this.applicationUrlString = applicationDefaultShortcut.url;

    return this.domSanitizer.bypassSecurityTrustResourceUrl(
      applicationDefaultShortcut.url
    );
  }
}
