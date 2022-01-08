import { CdkDragDrop } from '@angular/cdk/drag-drop';
import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import {
  Application,
  ApplicationRenderingType,
  ApplicationShortcut,
} from '@central-factory/applications/models/application';
import { ExternalUserApplicationsState } from '@central-factory/applications/states/external-user-applications.state';
import { InstallApplicationsState } from '@central-factory/applications/states/install-application.state';
import { InternalUserApplicationsState } from '@central-factory/applications/states/internal-user-applications.state';
import {
  ApplicationOrigin,
  AvailableApplicationsState,
} from '@central-factory/applications/states/manage-applications.state';
import { RecentlyOpenedApplicationsState } from '@central-factory/applications/states/recently-opened-applications.state';
import { SelectedApplicationState } from '@central-factory/applications/states/selected-application.state';
import { StarredApplicationsState } from '@central-factory/applications/states/starred-applications.state';
import { SelectedAvatarState } from '@central-factory/avatars/states/selected-avatar.state';
import { SidebarComponent } from '@central-factory/web-components/angular/sidebar/sidebar.component';
import { isElectron } from '@central-factory/web-components/shared/platform/desktop/is-electron';
import { FormControl, FormGroup } from '@ng-stack/forms';
import { BehaviorSubject, of, Subject } from 'rxjs';
import { delay, map, switchMap, take, takeUntil, tap } from 'rxjs/operators';

export interface ApplicationBanners {
  [key: string]: {
    applications: Application[];
    bannerTitle: string;
  };
}

/** Play main scene */
@Component({
  selector: 'cf-play',
  template: `
    <div
      cfBlock="scene-content"
      [cfMod]="{
        'no-padding': true,
        play: true,
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
              (applicationCardStarClick)="onApplicationStarClick($event)"
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

          <div class="top-section">
            <cf-svg-icon
              src="assets/icons/mdi/cog.svg"
              [svgClass]="'top-section__icon'"
              (click)="onManageApplicationsClick()"
            ></cf-svg-icon>
          </div>

          <ng-container *ngIf="!openedApplication">
            <div style="padding: 20px">
              <h2 cfElem="section-title">
                Welcome back,
                <strong class="text text--secondary">{{
                  (selectedAvatar$ | async)?.name
                }}</strong
                ><br />
                What would you like to do?
              </h2>

              <form cfBlock="form" [formGroup]="searchBarForm">
                <div class="form-control">
                  <input
                    #queryStringSearchInput
                    cfBlock="form-control"
                    cfMod="primary"
                    type="text"
                    formControlName="queryString"
                    placeholder="..."
                  />
                </div>
              </form>

              <ng-container
                *ngIf="recentlyOpenedApplications$ | async as applications"
              >
                <h2 cfElem="section-title" *ngIf="applications.length > 0">
                  Recently Opened
                </h2>
                <cf-applications-carousel
                  [applications]="applications"
                  [dropListConnectedTo]="[
                    applicationSheet.applicationCardDropList
                  ]"
                  (applicationCardClick)="onApplicationCardClick($event)"
                  (applicationPlayClick)="onApplicationCardPlayClick($event)"
                  (applicationStarClick)="onApplicationStarClick($event)"
                  (applicationCardDrop)="
                    onApplicationCarouselCardDropped($event)
                  "
                >
                </cf-applications-carousel>
              </ng-container>

              <ng-container
                *ngIf="starredApplications$ | async as applications"
              >
                <h2 cfElem="section-title" *ngIf="applications.length > 0">
                  Starred Applications
                </h2>
                <cf-applications-carousel
                  [applications]="applications"
                  [dropListConnectedTo]="[
                    applicationSheet.applicationCardDropList
                  ]"
                  (applicationCardClick)="onApplicationCardClick($event)"
                  (applicationPlayClick)="onApplicationCardPlayClick($event)"
                  (applicationStarClick)="onApplicationStarClick($event)"
                  (applicationCardDrop)="
                    onApplicationCarouselCardDropped($event)
                  "
                >
                </cf-applications-carousel>
              </ng-container>

              <ng-container
                *ngFor="let banner of applicationBanners$ | async | keyvalue"
              >
                <h2
                  cfElem="section-title"
                  *ngIf="banner.value.applications.length > 0"
                >
                  {{ banner.value.bannerTitle }}
                </h2>
                <cf-applications-carousel
                  [applications]="banner.value.applications"
                  [dropListConnectedTo]="[
                    applicationSheet.applicationCardDropList
                  ]"
                  (applicationCardClick)="onApplicationCardClick($event)"
                  (applicationPlayClick)="onApplicationCardPlayClick($event)"
                  (applicationStarClick)="onApplicationStarClick($event)"
                  (applicationCardDrop)="
                    onApplicationCarouselCardDropped($event)
                  "
                >
                </cf-applications-carousel>
              </ng-container>

              <ng-container *ngIf="allApplications$ | async as applications">
                <h2 cfElem="section-title" *ngIf="applications.length > 0">
                  All Applications
                </h2>
                <cf-applications-carousel
                  [applications]="applications"
                  [dropListConnectedTo]="[
                    applicationSheet.applicationCardDropList
                  ]"
                  (applicationCardClick)="onApplicationCardClick($event)"
                  (applicationPlayClick)="onApplicationCardPlayClick($event)"
                  (applicationStarClick)="onApplicationStarClick($event)"
                  (applicationCardDrop)="
                    onApplicationCarouselCardDropped($event)
                  "
                >
                </cf-applications-carousel>
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
export class PlayScene implements OnInit, OnDestroy {
  @ViewChild('sidebar', { static: true }) sidebar!: SidebarComponent;
  @ViewChild('queryStringSearchInput', { static: false })
  queryStringSearchInput!: ElementRef<HTMLInputElement>;

  searchBarForm = new FormGroup({
    queryString: new FormControl<string>(undefined),
  });

  externalUserApplications$ = this.externalUserApplicationsState.applications$;
  internalUserApplications$ = this.internalUserApplicationsState.applications$;
  starredApplications$ = this.starredApplicationsState.applications$;
  recentlyOpenedApplications$ =
    this.recentlyOpenedApplicationsState.applications$;

  applications$ = new BehaviorSubject<Application[]>([]);
  allApplications$ = new BehaviorSubject<Application[]>([]);
  applicationBanners$ = new BehaviorSubject<ApplicationBanners>({});

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

  private readonly banners: {
    [key: string]: string;
  } = {
    travel: 'Travel',
    productivity: 'Productivity',
    shopping: 'Shopping',
    entertainment: 'Entertainment',
    games: 'Video Games',
  };

  private readonly destroy$ = new Subject<void>();

  constructor(
    private availableApplicationsState: AvailableApplicationsState,
    private externalUserApplicationsState: ExternalUserApplicationsState,
    private internalUserApplicationsState: InternalUserApplicationsState,
    private recentlyOpenedApplicationsState: RecentlyOpenedApplicationsState,
    private starredApplicationsState: StarredApplicationsState,
    private router: Router,
    private selectedAvatarState: SelectedAvatarState,
    private selectedApplicationState: SelectedApplicationState,
    private installApplicationsState: InstallApplicationsState
  ) {}

  ngOnInit() {
    this.externalUserApplications$
      .pipe(
        tap((applications) => {
          const filtered = applications.filter((application) =>
            this.applicationMatchesSearch(application)
          );
          this.applications$.next(applications);
          this.allApplications$.next(filtered);
          this.generateBanners(filtered);
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();

    this.searchBarForm.controls.queryString.valueChanges
      .pipe(
        tap((search) => {
          const applications = this.applications$.getValue();

          const filtered = applications.filter((application) =>
            this.applicationMatchesSearch(application)
          );
          this.applications$.next(applications);
          this.allApplications$.next(filtered);
          this.generateBanners(filtered);
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();

    this.searchBarForm.controls.queryString.setValue('');
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
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

  onApplicationStarClick(application: Application) {
    this.availableApplicationsState.applications$
      .pipe(
        take(1),
        map((applications) =>
          applications.find((app) => app.application.id === application.id)
        ),
        switchMap((availableApplication) =>
          availableApplication
            ? this.starredApplicationsState.toggleApplication(
                application,
                availableApplication.origin
              )
            : of(undefined)
        )
      )
      .subscribe();
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

  onApplicationCarouselCardDropped(
    event: CdkDragDrop<Application[], any, any>
  ) {
    const application = event.item.data;
    this.selectedApplicationState.selectApplication(application);
    this.recentlyOpenedApplicationsState.addApplication(application);
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

  private generateBanners(applications: Application[]) {
    const applicationsBanners = this.reduceApplicationsToBanners(applications);

    this.applicationBanners$.next(
      this.reduceApplicationsToBanners(applications)
    );

    const bannersApplications: Application[] = Object.values(
      applicationsBanners
    ).reduce<Application[]>(
      (acc, banner) => acc.concat(banner.applications),
      []
    );

    const singleApplication: Application | undefined =
      bannersApplications.length === 1 ? bannersApplications[0] : undefined;

    if (singleApplication) {
      this.selectedApplicationState.selectApplication(singleApplication);
      this.selectedApplicationState.openSidebar();
      setTimeout(() => this.queryStringSearchInput.nativeElement.focus(), 1000);
    }
  }

  private reduceApplicationsToBanners(
    applications: Application[]
  ): ApplicationBanners {
    const banners = applications.reduce<ApplicationBanners>(
      (acc, application) => {
        application.categories?.forEach((category) => {
          if (!this.banners[category]) {
            return;
          }

          const matchesSearch = this.applicationMatchesSearch(application);

          if (!matchesSearch) {
            return;
          }

          acc[category] = acc[category] || {
            applications: [],
            bannerTitle: this.banners[category],
          };

          acc[category]?.applications.push(application);
        });

        return acc;
      },
      {}
    );

    return banners;
  }

  private applicationMatchesSearch(application: Application): boolean {
    if (
      !this.searchBarForm.value.queryString ||
      this.searchBarForm.value.queryString.length <= 0
    ) {
      return true;
    }

    const nameMatches = application.name
      .toLowerCase()
      .includes(this.searchBarForm.value.queryString.toLowerCase());

    const categoryMatches = application.categories?.reduce<boolean>(
      (acc, category) =>
        acc ||
        category
          .toLowerCase()
          .startsWith(this.searchBarForm.value.queryString.toLowerCase()),
      false
    );
    const shortcutMatches =
      application.shortcuts &&
      application.shortcuts.some((shortcut) =>
        shortcut.name
          .toLowerCase()
          .includes(this.searchBarForm.value.queryString.toLowerCase())
      )
        ? true
        : false;

    return nameMatches || categoryMatches || shortcutMatches;
  }
}
