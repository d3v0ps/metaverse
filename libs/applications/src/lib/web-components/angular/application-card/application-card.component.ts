import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { isElectron } from '@central-factory/web-components/shared/platform/desktop/is-electron';
import { Application } from '../../../models/application';

@Component({
  selector: 'cf-application-card',
  template: `
    <div
      cfBlock="application-card"
      *ngIf="application"
      [ngStyle]="{
        'background-color': this.applicationPrimaryColor
      }"
      [cfMod]="{
        'is-internal': application.additionalProperties?.internal,
        'is-not-supported': !applicationIsSupported
      }"
      (click)="applicationClick.emit(application)"
    >
      <div class="top-section">
        <cf-svg-icon
          *ngIf="
            showUninstallButton && !application.additionalProperties?.internal
          "
          src="assets/icons/mdi/delete.svg"
          [svgClass]="'top-section__icon'"
        ></cf-svg-icon>
      </div>

      <div cfBlock="application-icon">
        <cf-svg-icon
          *ngIf="applicationIcon"
          [src]="applicationIcon"
          cfElem="icon"
          [svgClass]="'icon__svg'"
        ></cf-svg-icon>
      </div>

      <div cfBlock="application-content">
        <div cfBlock="application-title">
          <h2 cfElem="name">
            {{ application?.name }}
          </h2>
          <h4 cfElem="author">
            {{ application?.additionalProperties?.author?.name }}
          </h4>
        </div>
        <div cfBlock="application-description">
          <p>
            {{ application?.description }}
          </p>
        </div>
      </div>

      <div class="bottom-section">
        <ng-container *ngIf="!applicationIsSupported">
          <h5 class="text text--warning">
            Application is not supported oh this platform
          </h5>
        </ng-container>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      .top-section {
        position: absolute;
        top: 10px;
        right: 10px;
        color: var(--color-base-light-medium);
        &__icon {
          fill: var(--color-base-light-medium);
        }

        .text {
          margin: 0;
        }
      }

      .bottom-section {
        position: absolute;
        bottom: 10px;
        left: 10px;
        color: var(--color-base-light-medium);
        &__icon {
          fill: var(--color-base-light-medium);
        }

        .text {
          margin: 0;
        }
      }
    `,
  ],
})
export class ApplicationCardComponent {
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

    this.applicationIsSupported = isElectron()
      ? true
      : application.additionalProperties?.supportsBrowser === true;
  }

  public get application(): Application | undefined {
    return this._application;
  }

  @Input() showUninstallButton?: boolean;

  @Output() public applicationClick = new EventEmitter<Application>();

  applicationIsSupported?: boolean;
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
}
