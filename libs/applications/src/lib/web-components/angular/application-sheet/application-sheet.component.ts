import { CdkDropList } from '@angular/cdk/drag-drop';
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { isElectron } from '@central-factory/web-components/shared/platform/desktop/is-electron';
import hotkeys from 'hotkeys-js';
import { Application, ApplicationShortcut } from '../../../models/application';

@Component({
  selector: 'cf-application-sheet',
  template: `
    <div cfBlock="application-sheet" *ngIf="application">
      <div
        id="application-sheet-card"
        cfBlock="drop-shadow"
        cdkDropList
        [cdkDropListData]="[application]"
        #applicationCardDropList="cdkDropList"
        (cdkDropListDropped)="onApplicationCardDrop(application)"
      >
        <div cdkDrag [cdkDragData]="application">
          <div cfBlock="drag-placeholder" *cdkDragPlaceholder></div>
          <cf-application-card
            [showDescription]="false"
            [application]="application"
            (applicationClick)="onApplicationCardClick(application)"
            (starClick)="applicationCardStarClick.emit(application)"
            (playClick)="onApplicationCardPlayClick(application)"
          >
          </cf-application-card>
        </div>
      </div>

      <div cfBlock="application-description">
        <p [innerHtml]="application?.description"></p>
      </div>

      <ul cfBlock="application-actions" *ngIf="mustBeInstalled">
        <li cfElem="item">
          <button
            cfBlock="button"
            cfMod="big"
            (click)="onApplicationInstallClick(application)"
          >
            Install {{ application.name }}
            <cf-svg-icon
              src="assets/icons/mdi/view-grid-plus.svg"
              cfElem="icon"
              [svgClass]="'icon__svg'"
            ></cf-svg-icon>
          </button>
        </li>
      </ul>

      <ul cfBlock="application-actions" *ngIf="!mustBeInstalled">
        <li cfElem="item">
          <button
            *ngIf="!isApplicationOpened && applicationIsSupported"
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
          <a
            [href]="applicationUrl"
            target="__blank"
            cfBlock="button"
            cfMod="big"
          >
            Open {{ application.name }} in a new tab
            <cf-svg-icon
              src="assets/icons/mdi/web.svg"
              cfElem="icon"
              [svgClass]="'icon__svg'"
            ></cf-svg-icon>
          </a>
        </li>
        <li cfElem="item">
          <button
            *ngIf="isApplicationOpened"
            cfBlock="button"
            [cfMod]="['big', 'danger']"
            (click)="onApplicationCloseClick(application)"
          >
            <cf-svg-icon
              src="assets/icons/mdi/close.svg"
              cfElem="icon"
              [svgClass]="'icon__svg'"
            ></cf-svg-icon>
            Close {{ application.name }}
          </button>
        </li>
        <li cfElem="item">
          <h3 cfBlock="text" cfMod="secondary">Shortcuts</h3>
          <form
            (submit)="
              onShortcutFormSubmit({
                event: $event,
                shortcut: {
                  name: shortcutInput.value,
                  url: application.startUrl + shortcutInput.value,
                  icons: application.icons
                }
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
                cfBlock="input-group-append"
                type="submit"
                class="button button--secondary"
              >
                Open URL
                <cf-svg-icon
                  src="assets/icons/mdi/link.svg"
                  cfElem="icon"
                  [svgClass]="'icon__svg'"
                ></cf-svg-icon>
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
    </div>
  `,
})
export class ApplicationSheetComponent implements OnInit, OnDestroy {
  @ViewChild('applicationCardDropList', { static: true })
  applicationCardDropList!: CdkDropList;

  @Input() mustBeInstalled = true;

  @Input() public set application(application: Application | undefined | null) {
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

    this.applicationUrl = this.extractApplicationUrl(application);
  }

  public get application(): Application | undefined | null {
    return this._application;
  }

  @Input() public isApplicationOpened = false;

  @Output() public applicationShortcutTrigger =
    new EventEmitter<ApplicationShortcut>();
  @Output() public applicationCardDrop = new EventEmitter<Application>();
  @Output() public applicationCardClick = new EventEmitter<Application>();
  @Output() public applicationCardStarClick = new EventEmitter<Application>();
  @Output() public applicationCardPlayClick = new EventEmitter<Application>();
  @Output() public openApplicationClick = new EventEmitter<Application>();
  @Output() public closeApplicationClick = new EventEmitter<Application>();
  @Output() public installApplicationClick = new EventEmitter<Application>();

  applicationIsSupported?: boolean;
  applicationUrl?: string;
  applicationIcon?: string;
  applicationPrimaryColor?: string;

  private _application?: Application | null;

  ngOnInit() {
    hotkeys('ctrl + alt + 1', () => {
      if (this.application?.shortcuts && this.application.shortcuts[0]) {
        this.onApplicationShortcutTrigger(this.application.shortcuts[0]);
      }
    });
    hotkeys('ctrl + alt + 2', () => {
      if (this.application?.shortcuts && this.application.shortcuts[1]) {
        this.onApplicationShortcutTrigger(this.application.shortcuts[1]);
      }
    });
    hotkeys('ctrl1 + alt + 3', () => {
      if (this.application?.shortcuts && this.application.shortcuts[2]) {
        this.onApplicationShortcutTrigger(this.application.shortcuts[2]);
      }
    });
    hotkeys('⌘ + alt + 4', () => {
      if (this.application?.shortcuts && this.application.shortcuts[3]) {
        this.onApplicationShortcutTrigger(this.application.shortcuts[3]);
      }
    });
    hotkeys('⌘ + alt + 5', () => {
      if (this.application?.shortcuts && this.application.shortcuts[4]) {
        this.onApplicationShortcutTrigger(this.application.shortcuts[4]);
      }
    });
  }

  ngOnDestroy() {
    hotkeys.unbind('⌘ + alt + 1');
    hotkeys.unbind('⌘ + alt + 2');
    hotkeys.unbind('⌘ + alt + 3');
    hotkeys.unbind('⌘ + alt + 4');
    hotkeys.unbind('⌘ + alt + 5');
  }

  onApplicationInstallClick(application: Application) {
    this.installApplicationClick.emit(application);
  }

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

  getShortcutIcon(shortcut: ApplicationShortcut): string | undefined {
    if (!shortcut.icons || shortcut.icons.length === 0) {
      return;
    }

    return shortcut.icons[0].src;
  }

  show(application?: Application) {
    this.application = application || this.application;
  }

  onApplicationCardDrop(application: Application) {
    this.applicationCardDrop.emit(application);
  }

  onApplicationCardClick(application: Application) {
    this.applicationCardClick.emit(application);
  }

  onApplicationCardPlayClick(application: Application) {
    this.applicationCardPlayClick.emit(application);
  }

  onApplicationOpenClick(application: Application) {
    this.openApplicationClick.emit(application);
  }

  onApplicationCloseClick(application: Application) {
    this.closeApplicationClick.emit(application);
  }

  extractApplicationUrl(application: Application): string | undefined {
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

    return applicationDefaultShortcut.url;
  }

  onApplicationShortcutTrigger(shortcut: ApplicationShortcut) {
    if (!shortcut) {
      return;
    }

    this.applicationShortcutTrigger.emit(shortcut);
  }

  onShortcutFormSubmit({
    event,
    shortcut,
  }: {
    event: any;
    shortcut: ApplicationShortcut;
  }) {
    event.preventDefault();

    if (!shortcut) {
      return;
    }

    this.applicationShortcutTrigger.emit(shortcut);
  }
}
