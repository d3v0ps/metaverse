import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { isElectron } from '@central-factory/web-components/shared/platform/desktop/is-electron';
import { Application } from '../../../__generated__/models';

@Component({
  selector: 'cf-application-card',
  template: `
    <div
      cfBlock="application-card"
      *ngIf="application"
      [ngStyle]="cardStyle"
      [cfMod]="{
        'is-internal': application.additionalProperties?.internal,
        'is-not-supported': !applicationIsSupported,
        outline: outline,
        shadow: shadow
      }"
      (click)="applicationClick.emit(application)"
      (mouseover)="hover = true"
      (mouseleave)="hover = false"
    >
      <div class="top-section">
        <h5
          cfBlock="text"
          *ngIf="
            showUninstallButton && !application.additionalProperties?.internal
          "
        >
          <cf-svg-icon
            src="assets/icons/mdi/delete.svg"
            [svgClass]="'top-section__icon'"
            [svgStyle]="{
              fill: 'var(--color-base-danger-medium)'
            }"
            (click)="uninstallClick.emit(application)"
          ></cf-svg-icon>
        </h5>
      </div>

      <cf-application-header
        *ngIf="showHeader"
        [application]="application"
        [iconStyle]="iconStyle"
        [outline]="outline"
        [showInfo]="showInfo"
        [showAuthor]="showAuthor"
      ></cf-application-header>

      <div cfBlock="application-content" *ngIf="showDescription">
        <cf-application-description
          [application]="application"
        ></cf-application-description>
      </div>

      <div cfBlock="application-card-footer">
        <cf-application-footer
          *ngIf="showFooter"
          [application]="application"
          [showInstallButton]="showInstallButton"
          [showPlayButton]="showPlayButton"
          (installClick)="installClick.emit($event)"
          (playClick)="playClick.emit($event)"
        ></cf-application-footer>
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
        flex-direction: row-reverse;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;

        /* &__icon {
          fill: var(--color-base-light-medium);
        } */

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
  @Input() showInfo = true;
  @Input() showFooter = true;
  @Input() showHeader = true;
  @Input() showAuthor = true;
  @Input() showDescription = true;
  @Input() outline = false;
  @Input() shadow = true;
  @Input() cardStyle: Record<string, any> = {};

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

    this.cardStyle = {
      'background-color': this.outline ? '' : this.applicationPrimaryColor,
    };

    // this.cardStyle = {
    //   'background-color': this.outline ? '' : this.applicationPrimaryColor,
    //   'border-color': this.outline ? this.applicationPrimaryColor : '',
    //   border: this.outline ? `2px solid ${this.applicationPrimaryColor}` : '',
    // };

    this.iconStyle = {
      fill: this.outline ? this.applicationPrimaryColor : '',
    };
  }

  public get application(): Application | undefined {
    return this._application;
  }

  @Input() showPlayButton = false;
  @Input() showInstallButton = false;
  @Input() showUninstallButton = false;

  @Output() public applicationClick = new EventEmitter<Application>();
  @Output() public playClick = new EventEmitter<Application>();
  @Output() public starClick = new EventEmitter<Application>();
  @Output() public installClick = new EventEmitter<Application>();
  @Output() public uninstallClick = new EventEmitter<Application>();

  set hover(value: boolean) {
    this._hover = value;

    if (value) {
      this.cardStyle.transform = 'scale(1.05)';
    } else {
      delete this.cardStyle.transform;
    }

    this.iconStyle = {
      fill: this.applicationPrimaryColor,
    };
  }

  applicationIsSupported?: boolean;
  applicationIcon?: string;
  applicationPrimaryColor?: string;

  iconStyle: Record<string, any> = {};

  private _application?: Application;
  private _hover = false;

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
