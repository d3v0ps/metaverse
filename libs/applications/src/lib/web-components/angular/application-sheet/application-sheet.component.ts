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
        (cdkDropListDropped)="applicationCardDrop.emit(application)"
      >
        <div cdkDrag [cdkDragData]="application">
          <div cfBlock="drag-placeholder" *cdkDragPlaceholder></div>
          <cf-application-card
            [showDescription]="false"
            [application]="application"
            (applicationClick)="applicationCardClick.emit(application)"
            (starClick)="applicationCardStarClick.emit(application)"
            (playClick)="applicationCardPlayClick.emit(application)"
          >
          </cf-application-card>
        </div>
      </div>

      <div cfBlock="application-description">
        <p [innerHtml]="application?.description"></p>
      </div>

      <cf-application-actions
        [application]="application"
        [applicationUrl]="applicationUrl"
        [mustBeInstalled]="mustBeInstalled"
        [isApplicationOpened]="isApplicationOpened"
        [applicationIsSupported]="applicationIsSupported"
        [enabledKeyboardShortcuts]="true"
        (applicationShortcutTrigger)="applicationShortcutTrigger.emit($event)"
        (applicationInstallTrigger)="installApplicationClick.emit($event)"
        (applicationOpenTrigger)="openApplicationClick.emit($event)"
        (applicationCloseTrigger)="closeApplicationClick.emit($event)"
      >
      </cf-application-actions>
    </div>
  `,
})
export class ApplicationSheetComponent {
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

  applicationIsSupported = false;
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
