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
      <div cfBlock="play-icon" (click)="playClick.emit(application)">
        <cf-svg-icon
          [src]="'assets/icons/mdi/play-circle-outline.svg'"
          cfElem="icon"
          [svgClass]="'icon__svg'"
        ></cf-svg-icon>
      </div>

      <div class="top-section">
        <h5 cfBlock="text" cfMod="secondary">
          <cf-svg-icon
            [src]="
              application.additionalProperties?.starred
                ? 'assets/icons/mdi/star.svg'
                : 'assets/icons/mdi/star-outline.svg'
            "
            cfElem="icon"
            [svgClass]="'icon__svg'"
            (click)="$event.stopPropagation(); starClick.emit(application)"
          ></cf-svg-icon>
        </h5>
        <h5
          cfBlock="text"
          *ngIf="
            showUninstallButton && !application.additionalProperties?.internal
          "
        >
          <cf-svg-icon
            src="assets/icons/mdi/delete.svg"
            [svgClass]="'top-section__icon'"
          ></cf-svg-icon>
        </h5>
        <h5
          cfBlock="text"
          [cfMod]="{
            warning: !applicationIsSupported,
            success: applicationIsSupported
          }"
        >
          <cf-svg-icon
            [src]="'assets/icons/mdi/application-settings.svg'"
            cfElem="icon"
            [svgClass]="'icon__svg'"
          ></cf-svg-icon>
        </h5>
      </div>

      <div cfBlock="application-header">
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
        </div>
      </div>

      <div cfBlock="application-content" *ngIf="showDescription">
        <div cfBlock="application-description">
          <p>
            {{ application?.description }}
          </p>
        </div>
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
        width: 100%;
        padding-left: 15px;
        color: var(--color-base-light-medium);
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;

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
  @Input() showDescription = true;

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
  @Output() public playClick = new EventEmitter<Application>();
  @Output() public starClick = new EventEmitter<Application>();

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
