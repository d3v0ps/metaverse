import { CdkDropList } from '@angular/cdk/drag-drop';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { isElectron } from '@central-factory/web-components/shared/platform/desktop/is-electron';
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
            [application]="application"
            (applicationClick)="onApplicationCardClick(application)"
          >
          </cf-application-card>
        </div>
      </div>

      <div cfBlock="application-description">
        <p>
          {{ application?.description }}
        </p>
      </div>

      <ul cfBlock="application-actions">
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
          <div cfBlock="application-shortcuts">
            <button
              *ngFor="let shortcut of application.shortcuts"
              cfBlock="button"
              [cfMod]="['big']"
            >
              <cf-svg-icon
                *ngIf="shortcut && shortcut.icons && shortcut.icons.length > 0"
                [src]="getShortcutIcon(shortcut) || 'assets/icons/mdi/link.svg'"
                cfElem="icon"
                [svgClass]="'icon__svg'"
              ></cf-svg-icon>
              {{ shortcut.name }}
            </button>
          </div>
        </li>
      </ul>
    </div>
  `,
})
export class ApplicationSheetComponent {
  @ViewChild('applicationCardDropList', { static: true })
  applicationCardDropList!: CdkDropList;

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

  @Output() public applicationCardDrop = new EventEmitter<Application>();
  @Output() public applicationCardClick = new EventEmitter<Application>();
  @Output() public openApplicationClick = new EventEmitter<Application>();
  @Output() public closeApplicationClick = new EventEmitter<Application>();

  applicationIsSupported?: boolean;
  applicationUrl?: string;
  applicationIcon?: string;
  applicationPrimaryColor?: string;

  private _application?: Application | null;

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
}
