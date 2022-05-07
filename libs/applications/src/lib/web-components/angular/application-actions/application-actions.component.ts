import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';
import {
  Application,
  ApplicationShortcut,
} from '@central-factory/applications/__generated__/models';
import hotkeys from 'hotkeys-js';

@Component({
  selector: 'cf-application-actions',
  template: `
    <ng-container *ngIf="application">
      <ul cfBlock="application-actions" *ngIf="mustBeInstalled">
        <li cfElem="item">
          <div cfBlock="application-shortcut">
            <button
              cfBlock="button"
              [cfMod]="['has-icon', 'full-width']"
              (click)="applicationInstallTrigger.emit(application)"
            >
              <cf-svg-icon
                src="assets/icons/mdi/view-grid-plus.svg"
                cfElem="icon"
                [svgClass]="'icon__svg'"
              ></cf-svg-icon>
              Install {{ application.name }}
            </button>
          </div>
        </li>
      </ul>

      <ul cfBlock="application-actions" *ngIf="!mustBeInstalled">
        <li cfElem="item">
          <div
            cfBlock="application-shortcut"
            *ngIf="!isApplicationOpened && applicationIsSupported"
          >
            <button
              cfBlock="button"
              [cfMod]="['has-icon', 'full-width']"
              (click)="applicationOpenTrigger.emit(application)"
            >
              <cf-svg-icon
                src="assets/icons/mdi/link.svg"
                cfElem="icon"
                [svgClass]="'icon__svg'"
              ></cf-svg-icon>
              Open {{ application.name }}
            </button>
          </div>
        </li>
        <li cfElem="item">
          <div cfBlock="application-shortcut">
            <button
              cfBlock="button"
              [cfMod]="['has-icon', 'full-width']"
              (click)="onOpenApplicationInNewTabClick()"
            >
              <cf-svg-icon
                src="assets/icons/mdi/web.svg"
                cfElem="icon"
                [svgClass]="'icon__svg'"
              ></cf-svg-icon>
              Open {{ application.name }} in a new tab
            </button>
          </div>
        </li>
        <li cfElem="item">
          <div cfBlock="application-shortcut" *ngIf="isApplicationOpened">
            <button
              cfBlock="button"
              [cfMod]="['has-icon', 'full-width']"
              (click)="applicationCloseTrigger.emit(application)"
            >
              <cf-svg-icon
                src="assets/icons/mdi/close.svg"
                cfElem="icon"
                [svgClass]="'icon__svg'"
              ></cf-svg-icon>
              Close {{ application.name }}
            </button>
          </div>
        </li>
        <li cfElem="item">
          <h3 cfBlock="text" cfMod="secondary">Shortcuts</h3>
          <form
            (submit)="
              $event.preventDefault();
              applicationShortcutTrigger.emit({
                name: shortcutInput.value,
                url: application.startUrl + shortcutInput.value,
                icons: application.icons
              })
            "
          >
            <div cfBlock="input-group">
              <input
                type="text"
                class="input"
                cfBlock="form-control"
                cfMod="secondary"
                placeholder="Custom URL"
                #shortcutInput
              />
              <button
                cfBlock="button"
                [cfMod]="['has-icon', 'secondary']"
                type="submit"
                class="input-group-append"
              >
                <cf-svg-icon
                  src="assets/icons/mdi/link.svg"
                  cfElem="icon"
                  [svgClass]="'icon__svg'"
                ></cf-svg-icon>
                Open URL
              </button>
            </div>
          </form>
          <div cfBlock="application-shortcuts">
            <cf-application-shortcut
              *ngFor="let shortcut of application.shortcuts; let i = index"
              [shortcutIndex]="i + 1"
              [theme]="'application'"
              [shortcut]="shortcut"
              [application]="application"
              (shortcutClick)="applicationShortcutTrigger.emit(shortcut)"
            ></cf-application-shortcut>
          </div>
        </li>
      </ul>
    </ng-container>
  `,
})
export class ApplicationActionsComponent implements OnDestroy {
  @Input() set application(value: Application | undefined) {
    this._application = value;
    if (this.enabledKeyboardShortcuts) {
      this.enableKeyboardShortcuts();
    } else {
      this.disableKeyboardShortcuts();
    }
  }
  get application(): Application | undefined {
    return this._application;
  }

  @Input() applicationUrl?: string;

  @Input() mustBeInstalled = true;
  @Input() isApplicationOpened = false;
  @Input() applicationIsSupported = true;
  @Input() set enabledKeyboardShortcuts(value: boolean) {
    this._enabledKeyboardShortcuts = value;
    if (value) {
      this.enableKeyboardShortcuts();
    } else {
      this.disableKeyboardShortcuts();
    }
  }
  get enabledKeyboardShortcuts(): boolean {
    return this._enabledKeyboardShortcuts;
  }

  @Output() applicationShortcutTrigger =
    new EventEmitter<ApplicationShortcut>();
  @Output() applicationInstallTrigger = new EventEmitter<Application>();
  @Output() applicationOpenTrigger = new EventEmitter<Application>();
  @Output() applicationCloseTrigger = new EventEmitter<Application>();

  private _application?: Application;
  private _enabledKeyboardShortcuts = false;

  ngOnDestroy() {
    this.disableKeyboardShortcuts();
  }

  enableKeyboardShortcuts() {
    this.disableKeyboardShortcuts();

    if (!this.application || !this.application.shortcuts) {
      return;
    }

    this.application.shortcuts.forEach((shortcut, i) => {
      hotkeys(`ctrl + alt + ${i + 1}`, () =>
        this.applicationShortcutTrigger.emit(shortcut)
      );
    });
  }

  disableKeyboardShortcuts() {
    if (!this.application || !this.application.shortcuts) {
      return;
    }

    this.application.shortcuts.forEach((shortcut, i) => {
      hotkeys.unbind(`ctrl + alt + ${i + 1}`);
    });
  }

  onOpenApplicationInNewTabClick() {
    if (!this.applicationUrl) {
      return;
    }

    window.open(this.applicationUrl, '_blank');
  }
}
