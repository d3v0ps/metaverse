import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Application } from '@central-factory/applications/models/application';

@Component({
  selector: 'cf-application-sheet',
  template: `
    <div cfBlock="application-sheet" *ngIf="application">
      <cf-application-card [application]="application"></cf-application-card>

      <ul cfBlock="application-actions">
        <li cfElem="item">
          <button
            *ngIf="!isApplicationOpened"
            cfBlock="button"
            cfMod="big"
            (click)="onApplicationOpenClick(application)"
          >
            Open {{ application.name }}
            <cf-svg-icon
              src="assets/icons/mdi/link.svg"
              cfElem="icon"
              [svgClass]="'icon__svg'"
            ></cf-svg-icon>
          </button>
        </li>
        <li cfElem="item">
          <button
            *ngIf="isApplicationOpened"
            cfBlock="button"
            [cfMod]="['big', 'danger']"
            (click)="onApplicationCloseClick(application)"
          >
            Close {{ application.name }}
            <cf-svg-icon
              src="assets/icons/mdi/close.svg"
              cfElem="icon"
              [svgClass]="'icon__svg'"
            ></cf-svg-icon>
          </button>
        </li>
      </ul>
    </div>
  `,
})
export class ApplicationSheetComponent {
  @Input() public set application(application: Application | undefined) {
    this._application = application;

    if (!application) {
      return;
    }

    this.applicationIcon = this.extractApplicationIcon(application);

    this.applicationPrimaryColor =
      application.additionalProperties?.colors?.find(
        (color) => color.variation === 'primary'
      )?.color ||
      (application.additionalProperties?.internal === true
        ? 'var(--color-base-primary-medium)'
        : undefined);
  }

  public get application(): Application | undefined {
    return this._application;
  }

  @Input() public isApplicationOpened = false;

  @Output() public openApplicationClick = new EventEmitter<Application>();
  @Output() public closeApplicationClick = new EventEmitter<Application>();

  applicationIcon?: string;
  applicationPrimaryColor?: string;

  private _application?: Application;

  private extractApplicationIcon(application: Application): string | undefined {
    if (application.icons && application.icons.length > 0) {
      return application.icons[0].src;
    }

    if (application.shortcuts && application.shortcuts.length > 0) {
      const shortcut = application.shortcuts.find(
        (shortcut) => shortcut.icons && shortcut.icons.length > 0
      );

      if (!shortcut) {
        return;
      }

      const icon = shortcut.icons
        ? shortcut.icons[0]
        : {
            src: 'assets/icons/mdi/close.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          };

      return icon.src;
    }

    return undefined;
  }

  show(application?: Application) {
    this.application = application || this.application;
  }

  onApplicationOpenClick(application: Application) {
    this.openApplicationClick.emit(application);
  }

  onApplicationCloseClick(application: Application) {
    this.closeApplicationClick.emit(application);
  }
}
