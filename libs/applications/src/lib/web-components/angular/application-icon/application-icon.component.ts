import { Component, Input } from '@angular/core';
import { Application } from '@central-factory/applications/models/application';

@Component({
  selector: 'cf-application-icon',
  template: `
    <div
      cfBlock="application-icon"
      [cfMod]="{
        background: background
      }"
    >
      <cf-svg-icon
        *ngIf="applicationIcon"
        [src]="applicationIcon"
        cfElem="icon"
        [svgClass]="'icon__svg'"
        [svgStyle]="iconStyle"
      ></cf-svg-icon>
    </div>
  `,
})
export class ApplicationIconComponent {
  @Input() outline = false;
  @Input() background = true;
  @Input() iconStyle: Record<string, any> = {};
  @Input() set application(application: Application | undefined) {
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

    this.iconStyle = {
      ...this.iconStyle,
      fill: this.outline ? '#fff' : this.applicationPrimaryColor,
    };
  }

  public applicationIcon? = '';
  public applicationPrimaryColor? = '#fff';
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
