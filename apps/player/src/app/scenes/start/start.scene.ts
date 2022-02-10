import { Component, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {
  Application,
  ApplicationRenderingType,
  ApplicationShortcut,
} from '@central-factory/applications/models/application';
import { InstallApplicationsState } from '@central-factory/applications/states/install-application.state';
import {
  ApplicationOrigin,
  AvailableApplicationsState,
} from '@central-factory/applications/states/manage-applications.state';
import { RecentlyOpenedApplicationsState } from '@central-factory/applications/states/recently-opened-applications.state';
import { SelectedApplicationState } from '@central-factory/applications/states/selected-application.state';
import { StoreApplicationsState } from '@central-factory/applications/states/store-applications.state';
import { UserTopicsState } from '@central-factory/applications/states/user-topics.state';
import { SelectedAvatarState } from '@central-factory/avatars/states/selected-avatar.state';
import { ClockService } from '@central-factory/physics/services/clock.service';
import { SidebarComponent } from '@central-factory/web-components/angular/sidebar/sidebar.component';
import { isElectron } from '@central-factory/web-components/shared/platform/desktop/is-electron';
import { Subject } from 'rxjs';
import { delay, map, switchMap, take, tap } from 'rxjs/operators';
import { v4 as uuid } from 'uuid';

export interface ApplicationBanners {
  [key: string]: {
    applications: Application[];
    bannerTitle: string;
  };
}

/** Play main scene */
@Component({
  selector: 'cf-start',
  template: `
    <div
      cfBlock="scene-content"
      [cfMod]="{
        'no-padding': true,
        start: true,
        'application-opened': openedApplication ? true : false
      }"
    >
      <cf-sidebar-container>
        <cf-sidebar
          #sidebar
          [opened]="(sidebarIsOpen$ | async) ? true : false"
          [dock]="false"
          [showBackdrop]="false"
          [closeOnClickBackdrop]="true"
          [closeOnClickOutside]="true"
          [mode]="'over'"
          [position]="'bottom'"
        >
          <div
            style="
            width: 90%;
            margin: 0 auto;
          "
            *ngIf="false"
          >
            <cf-application-sheet
              #applicationSheet
              [application]="selectedApplication$ | async"
              [mustBeInstalled]="mustBeInstalled"
              [isApplicationOpened]="
                (selectedApplication$ | async)?.id === openedApplication?.id
                  ? true
                  : false
              "
              (applicationCardClick)="onApplicationSheetCardClick($event)"
              (applicationCardPlayClick)="
                onApplicationSheetCardPlayClick($event)
              "
              (openApplicationClick)="
                onApplicationSheetOpenApplicationClick($event)
              "
              (installApplicationClick)="
                onApplicationSheetInstallApplicationClick($event)
              "
              (applicationShortcutTrigger)="
                onApplicationSheetShortcutTrigger($event)
              "
              (applicationCardDrop)="onApplicationCardDropped($event)"
              (closeApplicationClick)="onApplicationCloseClick()"
            ></cf-application-sheet>
          </div>
        </cf-sidebar>

        <div cf-sidebar-content>
          <ng-container *ngIf="openedApplication">
            <cf-application-toolbar
              [application]="openedApplication"
              (closeButtonClick)="onApplicationCloseClick()"
              (optionsButtonClick)="
                onApplicationOptionsButtonClick(openedApplication)
              "
            ></cf-application-toolbar>
            <cf-application-view
              [application]="openedApplication"
              [applicationShortcut]="openedApplicationShortcut"
            ></cf-application-view>
          </ng-container>

          <ng-container *ngIf="!openedApplication">
            <div style="padding: 2rem">
              <div class="form-buttons" style="margin: -15px; float: right;">
                <button
                  *ngIf="topMenuIsOpen"
                  cfBlock="button"
                  cfMod="has-icon"
                  (click)="onAddPortalsClick()"
                >
                  <cf-svg-icon
                    cfElem="icon"
                    src="assets/icons/mdi/web-plus.svg"
                  ></cf-svg-icon>
                  Add more Portals
                </button>
                <button
                  *ngIf="topMenuIsOpen"
                  cfBlock="button"
                  cfMod="has-icon"
                  (click)="onManageApplicationsClick()"
                >
                  <cf-svg-icon
                    src="assets/icons/mdi/cog.svg"
                    [svgClass]="'top-section__icon'"
                  ></cf-svg-icon>
                  Remove Apps
                </button>
                <button
                  *ngIf="topMenuIsOpen"
                  cfBlock="button"
                  cfMod="has-icon"
                  (click)="editMode = !editMode"
                >
                  <cf-svg-icon
                    [src]="
                      editMode
                        ? 'assets/icons/mdi/check.svg'
                        : 'assets/icons/mdi/application-edit.svg'
                    "
                    [svgClass]="'top-section__icon'"
                  ></cf-svg-icon>
                  {{ editMode ? 'Save' : 'Edit' }} Topics
                </button>
                <button
                  *ngIf="topMenuIsOpen"
                  cfBlock="button"
                  cfMod="has-icon"
                  (click)="onAddTopicClick()"
                >
                  <cf-svg-icon
                    src="assets/icons/mdi/plus.svg"
                    [svgClass]="'top-section__icon'"
                  ></cf-svg-icon>
                  Add Topic
                </button>
                <button
                  cfBlock="button"
                  cfMod="fab"
                  (click)="topMenuIsOpen = !topMenuIsOpen"
                >
                  <cf-svg-icon
                    cfElem="icon"
                    src="assets/icons/mdi/dots-vertical.svg"
                  ></cf-svg-icon>
                </button>
              </div>

              <div *ngIf="currentDate$ | async as currentDate">
                <cf-assistant-avatar
                  *ngIf="selectedAvatar$ | async as selectedAvatar"
                  [currentDate]="currentDate"
                  [selectedAvatar]="selectedAvatar"
                ></cf-assistant-avatar>
              </div>

              <cf-command-bar [fullLength]="true"></cf-command-bar>

              <ng-container *ngIf="currentDate$ | async as currentDate">
                <ng-container *ngFor="let topic of userTopics$ | async">
                  <div *ngIf="!editMode">
                    <cf-start-topic
                      [topic]="topic"
                      [currentDate]="currentDate"
                      [applications]="storeAppplications$ | async"
                    ></cf-start-topic>
                  </div>
                  <div *ngIf="editMode">
                    <cf-topic-form
                      [topic]="topic"
                      [applications]="storeAppplications$ | async"
                    ></cf-topic-form>
                  </div>
                </ng-container>
              </ng-container>
            </div>
          </ng-container>
        </div>
      </cf-sidebar-container>
    </div>
  `,
  styles: [
    `
      .scene-content {
        &__section-title {
          margin-bottom: 1rem;
        }
      }

      .section-title {
        padding: 2rem;
      }

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
export class StartScene implements OnDestroy {
  @ViewChild('sidebar', { static: true }) sidebar!: SidebarComponent;

  morningRoutineDate = new Date('2022-02-09T07:50:41.641Z');
  planningDate = new Date('2022-02-09T08:50:41.641Z');
  workingDate = new Date('2022-02-09T11:50:41.641Z');
  mealDate = new Date('2022-02-09T12:50:41.641Z');
  lateNightDate = new Date('2022-02-09T01:50:41.641Z');
  now = new Date();
  currentDate$ = this.clockService.clock$;

  editMode = false;
  topMenuIsOpen = false;

  storeAppplications$ = this.storeApplicationsState.applications$;
  userTopics$ = this.userTopicsState.topics$;

  selectedAvatar$ = this.selectedAvatarState.avatar$;

  selectedApplication$ = this.selectedApplicationState.application$.pipe(
    switchMap((application) =>
      this.availableApplicationsState.applications$.pipe(
        take(1),
        map((applications) =>
          applications.find((app) => app.application.id === application?.id)
        ),
        tap((application) => {
          this.mustBeInstalled =
            application?.origin !== ApplicationOrigin.User &&
            application?.application.additionalProperties?.renderingType !==
              ApplicationRenderingType.Webview;
        }),
        map((application) => application?.application)
      )
    )
  );
  sidebarIsOpen$ = this.selectedApplicationState.sidebarIsOpen$.pipe(
    delay(500),
    tap((isOpen) => {
      if (!this.sidebar) {
        return;
      }

      isOpen ? this.sidebar.open() : this.sidebar.close();
    })
  );

  openedApplication?: Application;
  openedApplicationShortcut?: ApplicationShortcut;
  mustBeInstalled = false;

  private readonly destroy$ = new Subject<void>();

  constructor(
    private availableApplicationsState: AvailableApplicationsState,
    private storeApplicationsState: StoreApplicationsState,
    private recentlyOpenedApplicationsState: RecentlyOpenedApplicationsState,
    private router: Router,
    private selectedAvatarState: SelectedAvatarState,
    private selectedApplicationState: SelectedApplicationState,
    private installApplicationsState: InstallApplicationsState,
    private userTopicsState: UserTopicsState,
    private clockService: ClockService
  ) {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onAddTopicClick() {
    this.editMode = true;
    this.userTopicsState
      .addTopic({
        id: uuid(),
        priority: 'low',
        title: '',
        icon: '',
        description: '',
        themeColor: '',
        background: '',
        applications: [],
        shortcuts: [],
        categories: [],
        media: [],
        triggers: [],
      })
      .subscribe();
  }

  onAddPortalsClick() {
    this.router.navigate(['/portals']);
  }

  onApplicationCloseClick() {
    this.openedApplication = undefined;
    this.openedApplicationShortcut = undefined;
  }

  onApplicationCardClick(application: Application) {
    this.selectedApplicationState.selectApplication(application);
    this.selectedApplicationState.closeSidebar();
    setTimeout(() => this.selectedApplicationState.openSidebar(), 0);
  }

  onApplicationCardPlayClick(application: Application) {
    this.selectedApplicationState.selectApplication(application);
    this.openApplication(application);
    this.selectedApplicationState.closeSidebar();
  }

  onApplicationSheetShortcutTrigger(applicationShortcut: ApplicationShortcut) {
    const application = this.selectedApplicationState.application$.getValue();
    this.openApplication(application as Application, applicationShortcut);
    this.selectedApplicationState.closeSidebar();
  }

  onApplicationSheetCardClick(application: Application) {
    this.openApplication(application);
    this.selectedApplicationState.closeSidebar();
  }

  onApplicationSheetCardPlayClick(application: Application) {
    this.selectedApplicationState.selectApplication(application);
    this.openApplication(application);
    this.selectedApplicationState.closeSidebar();
  }

  onApplicationCardDropped(application: Application) {
    this.selectedApplicationState.selectApplication(application);
  }

  onApplicationSheetOpenApplicationClick(application: Application) {
    this.openApplication(application);
    this.selectedApplicationState.closeSidebar();
  }

  onApplicationSheetInstallApplicationClick(application: Application) {
    this.installApplicationsState.install(application);
    this.openApplication(application);
    this.selectedApplicationState.closeSidebar();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onApplicationOptionsButtonClick(application: Application) {
    this.selectedApplicationState.openSidebar();
  }

  onManageApplicationsClick() {
    this.router.navigate(['/manage-applications']);
  }

  private openApplication(
    application: Application,
    applicationShortcut?: ApplicationShortcut
  ) {
    const applicationIsSupported = isElectron()
      ? true
      : application?.additionalProperties?.supportsBrowser;

    this.recentlyOpenedApplicationsState.addApplication(
      application as Application
    );

    if (!applicationIsSupported) {
      window.open(
        applicationShortcut?.url || application.startUrl,
        '__blank' + Date.now()
      );
      return;
    }

    this.openedApplication = application;
    this.openedApplicationShortcut = applicationShortcut;
  }
}
