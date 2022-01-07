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
  ApplicationShortcut,
} from '@central-factory/applications/models/application';
import { ExternalUserApplicationsState } from '@central-factory/applications/states/external-user-applications.state';
import { InternalUserApplicationsState } from '@central-factory/applications/states/internal-user-applications.state';
import { RecentlyOpenedApplicationsState } from '@central-factory/applications/states/recently-opened-applications.state';
import { SelectedApplicationState } from '@central-factory/applications/states/selected-application.state';
import { SelectedAvatarState } from '@central-factory/avatars/states/selected-avatar.state';
import { SidebarComponent } from '@central-factory/web-components/angular/sidebar/sidebar.component';
import { FormControl, FormGroup } from '@ng-stack/forms';
import { BehaviorSubject, Subject } from 'rxjs';
import { delay, takeUntil, tap } from 'rxjs/operators';

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
              (applicationShortcutTrigger)="
                onApplicationSheetShortcutTrigger($event)
              "
              (applicationCardDrop)="onApplicationCardDropped($event)"
              (closeApplicationClick)="openedApplication = undefined"
            ></cf-application-sheet>
          </div>
        </cf-sidebar>

        <div cf-sidebar-content>
          <ng-container *ngIf="openedApplication">
            <cf-application-toolbar
              [application]="openedApplication"
              (closeButtonClick)="openedApplication = undefined"
              (optionsButtonClick)="
                onApplicationOptionsButtonClick(openedApplication)
              "
            ></cf-application-toolbar>
            <cf-application-view
              [application]="openedApplication"
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
                  />
                </div>
              </form>

              <ng-container
                *ngFor="let banner of applicationBanners$ | async | keyvalue"
              >
                <h2 cfElem="section-title">
                  {{ banner.value.bannerTitle }}
                </h2>

                <div
                  id="applications-carousel"
                  cfBlock="applications-carousel"
                  cdkDropList
                  cdkDropListSortingDisabled
                  [cdkDropListData]="banner.value.applications"
                  [cdkDropListConnectedTo]="[
                    applicationSheet.applicationCardDropList
                  ]"
                  (cdkDropListDropped)="
                    onApplicationCarouselCardDropped($event)
                  "
                >
                  <div
                    cdkDrag
                    [cdkDragData]="application"
                    cfBlock="applications-carousel-item"
                    *ngFor="let application of banner.value.applications"
                  >
                    <div cfBlock="drag-placeholder" *cdkDragPlaceholder></div>
                    <cf-application-card
                      [application]="application"
                      (applicationClick)="onApplicationCardClick(application)"
                      (playClick)="onApplicationCardPlayClick(application)"
                    ></cf-application-card>
                  </div>
                </div>
              </ng-container>

              <h2 cfElem="section-title">All Applications</h2>

              <ng-container
                *ngIf="externalUserApplications$ | async as applications"
              >
                <div
                  cfBlock="applications-carousel"
                  cdkDropList
                  cdkDropListSortingDisabled
                  [cdkDropListData]="applications"
                  [cdkDropListConnectedTo]="[
                    applicationSheet.applicationCardDropList
                  ]"
                  (cdkDropListDropped)="
                    onApplicationCarouselCardDropped($event)
                  "
                >
                  <div
                    cdkDrag
                    [cdkDragData]="application"
                    *ngFor="let application of applications"
                    cfBlock="applications-carousel-item"
                  >
                    <div cfBlock="drag-placeholder" *cdkDragPlaceholder></div>
                    <cf-application-card
                      [application]="application"
                      (applicationClick)="onApplicationCardClick(application)"
                    ></cf-application-card>
                  </div>
                </div>
              </ng-container>

              <!-- h2 cfElem="section-title">Internal Applications</h2>

              <ng-container
                *ngIf="internalUserApplications$ | async as applications"
              >
                <div cfBlock="application-list">
                  <ng-container *ngFor="let application of applications">
                    <cf-application-card
                      [application]="application"
                      (applicationClick)="onApplicationCardClick(application)"
                    ></cf-application-card>
                  </ng-container>
                </div>
              </ng-container -->
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

      .top-section {
        position: absolute;
        top: 10px;
        right: 10px;
        color: var(--color-base-light-medium);
        &__icon {
          fill: var(--color-base-light-medium);
        }
      }

      .application-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        gap: 1rem;
        margin-bottom: 3rem;
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

  applications$ = new BehaviorSubject<Application[]>([]);
  applicationBanners$ = new BehaviorSubject<ApplicationBanners>({});

  selectedAvatar$ = this.selectedAvatarState.avatar$;

  selectedApplication$ = this.selectedApplicationState.application$;
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
    private externalUserApplicationsState: ExternalUserApplicationsState,
    private internalUserApplicationsState: InternalUserApplicationsState,
    private recentlyOpenedApplicationsState: RecentlyOpenedApplicationsState,
    private router: Router,
    private selectedAvatarState: SelectedAvatarState,
    private selectedApplicationState: SelectedApplicationState
  ) {}

  ngOnInit() {
    this.externalUserApplications$
      .pipe(
        tap((applications) => {
          this.applications$.next(applications);
          this.generateBanners(applications);
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();

    this.searchBarForm.controls.queryString.valueChanges
      .pipe(
        tap((search) => {
          this.generateBanners(this.applications$.getValue());
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

  onApplicationCardClick(application: Application) {
    this.selectedApplicationState.selectApplication(application);
    this.recentlyOpenedApplicationsState.addApplication(application);
    this.selectedApplicationState.closeSidebar();
    setTimeout(() => this.selectedApplicationState.openSidebar(), 0);
  }

  onApplicationCardPlayClick(application: Application) {
    this.selectedApplicationState.selectApplication(application);
    this.recentlyOpenedApplicationsState.addApplication(application);
    this.selectedApplicationState.closeSidebar();

    const applicationIsSupported =
      application.additionalProperties?.supportsBrowser;

    if (!applicationIsSupported) {
      window.open(application.startUrl, '__blank' + Date.now());
      return;
    }

    this.openedApplication = application;
  }

  onApplicationSheetShortcutTrigger(applicationShortcut: ApplicationShortcut) {
    const application = this.selectedApplication$.getValue();

    const applicationIsSupported =
      application?.additionalProperties?.supportsBrowser;

    if (!applicationIsSupported) {
      window.open(applicationShortcut.url, '__blank' + Date.now());
      return;
    }

    this.openedApplication = application;
  }

  onApplicationSheetCardClick(application: Application) {
    this.selectedApplicationState.closeSidebar();
  }

  onApplicationSheetCardPlayClick(application: Application) {
    console.log(application);
    this.selectedApplicationState.selectApplication(application);
    this.recentlyOpenedApplicationsState.addApplication(application);
    this.selectedApplicationState.closeSidebar();

    const applicationIsSupported =
      application.additionalProperties?.supportsBrowser;

    if (!applicationIsSupported) {
      window.open(application.startUrl, '__blank' + Date.now());
      return;
    }

    this.openedApplication = application;
  }

  onApplicationCardDropped(application: Application) {
    this.selectedApplicationState.selectApplication(application);
    this.recentlyOpenedApplicationsState.addApplication(application);
  }

  onApplicationCarouselCardDropped(
    event: CdkDragDrop<Application[], any, any>
  ) {
    const application = event.item.data;
    this.selectedApplicationState.selectApplication(application);
    this.recentlyOpenedApplicationsState.addApplication(application);
  }

  onApplicationSheetOpenApplicationClick(application: Application) {
    this.openedApplication = application;
    this.selectedApplicationState.closeSidebar();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onApplicationOptionsButtonClick(application: Application) {
    this.selectedApplicationState.openSidebar();
  }

  onManageApplicationsClick() {
    this.router.navigate(['/manage-applications']);
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

          let mustInclude = true;

          if (
            this.searchBarForm.value.queryString &&
            this.searchBarForm.value.queryString.length > 0
          ) {
            const nameMatches = application.name
              .toLowerCase()
              .includes(this.searchBarForm.value.queryString.toLowerCase());
            const shortcutMatches =
              application.shortcuts &&
              application.shortcuts.some((shortcut) =>
                shortcut.name
                  .toLowerCase()
                  .includes(this.searchBarForm.value.queryString.toLowerCase())
              )
                ? true
                : false;

            mustInclude = nameMatches || shortcutMatches;
          }

          if (!mustInclude) {
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
}
