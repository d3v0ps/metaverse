import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Application } from '@central-factory/applications/models/application';

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
        'is-internal': application.additionalProperties?.internal
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
  }

  public get application(): Application | undefined {
    return this._application;
  }

  @Input() showUninstallButton?: boolean;

  @Output() public applicationClick = new EventEmitter<Application>();

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
