import { Component, EventEmitter, Input, Output } from '@angular/core';
import { isElectron } from '@central-factory/web-components/shared/platform/desktop/is-electron';
import {
  Application,
  ApplicationRenderingType,
  ApplicationShortcut,
  ColorVariation,
} from '../../../models/application';

export type ApplicationShortcutView = {
  label: string;
  url: string;
  icon: string;
  color?: string;
  isRoute?: boolean;
  isExternal?: boolean;
};

@Component({
  selector: 'cf-application-shortcut',
  template: `
    <div cfBlock="application-shortcut" *ngIf="view">
      <button
        cfBlock="button"
        [cfMod]="[theme, showShortcutIcon ? 'has-icon' : '']"
        (click)="shortcutClick.emit(view)"
        [ngStyle]="{
          'background-color': theme === 'application' ? view.color : ''
        }"
      >
        <ng-container [ngTemplateOutlet]="keyboardShortcut"></ng-container>
        <cf-svg-icon
          *ngIf="view.icon && showShortcutIcon"
          [src]="view.icon"
          cfElem="icon"
          [svgClass]="'icon__svg'"
        ></cf-svg-icon>
        <p cfElem="label" *ngIf="view.label && showShortcutLabel">
          {{ view.label }}
        </p>
      </button>

      <ng-template #keyboardShortcut>
        <div cfBlock="keyboard-shortcut">
          <span>ctrl</span>
          <span>+</span>
          <span>alt</span>
          <span>+</span>
          <span>{{ shortcutIndex }}</span>
        </div>
      </ng-template>
    </div>
  `,
})
export class ApplicationShortcutComponent {
  @Input() theme = '';
  @Input() showShortcutIcon = true;
  @Input() showShortcutLabel = true;
  @Input() shortcutIndex = 0;

  @Output() shortcutClick = new EventEmitter<ApplicationShortcutView>();

  @Input() set application(value: Application | undefined) {
    this._application = value;
    if (this.shortcut && value) {
      this.generateView(this.shortcut, value);
    }
  }
  get application(): Application | undefined {
    return this._application;
  }

  @Input() set shortcut(value: Application | ApplicationShortcut | undefined) {
    this._shortcut = value;
    if (this.application && value) {
      this.generateView(value, this.application);
    }
  }
  get shortcut(): Application | ApplicationShortcut | undefined {
    return this._shortcut;
  }

  public view?: ApplicationShortcutView;

  private _application?: Application;
  private _shortcut?: Application | ApplicationShortcut;

  private generateView(
    shorcut: Application | ApplicationShortcut,
    application: Application
  ) {
    const isWeb =
      application.additionalProperties?.renderingType ===
      ApplicationRenderingType.Webview;
    const supportsBrowser =
      application.additionalProperties?.supportsBrowser === true;

    const url = 'url' in shorcut ? shorcut.url : application.startUrl;

    const color =
      application.additionalProperties?.colors &&
      application.additionalProperties.colors.find(
        (c) => c.variation === ColorVariation.Primary
      );

    this.view = {
      url,
      color: color?.color || application.themeColor,
      isRoute: isWeb || (!supportsBrowser && !isElectron()),
      label: shorcut.name,
      isExternal: application.additionalProperties?.internal !== true,
      icon: shorcut.icons?.[0]?.src || 'assets/icons/mdi/link.svg',
    };
  }
}
