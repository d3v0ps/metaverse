import { CdkDragDrop } from '@angular/cdk/drag-drop/drag-events';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Application } from '@central-factory/applications/models/application';
import { ExternalUserApplicationsState } from '@central-factory/applications/states/external-user-applications.state';
import { InternalUserApplicationsState } from '@central-factory/applications/states/internal-user-applications.state';
import { SelectedAvatarState } from '@central-factory/avatars/states/selected-avatar.state';
import { map } from 'rxjs/operators';

/** Play main scene */
@Component({
  selector: 'cf-play',
  template: `
    <div cfBlock="scene-content" [cfMod]="['no-padding', 'play']">
      <cf-sidebar-container>
        <cf-sidebar
          [(opened)]="sidebarIsOpen"
          [dock]="false"
          [showBackdrop]="false"
          [closeOnClickBackdrop]="true"
          [closeOnClickOutside]="true"
          [mode]="'over'"
          [position]="'bottom'"
        >
          <div
            style="
            width: 80%;
            margin: 0 auto;
          "
          >
            <cf-application-sheet
              #applicationSheet
              [application]="selectedApplication"
              [isApplicationOpened]="openedApplication ? true : false"
              (applicationCardClick)="sidebarIsOpen = !sidebarIsOpen"
              (openApplicationClick)="
                onApplicationSheetOpenApplicationClick($event)
              "
              (applicationCardDrop)="selectedApplication = $event"
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
                <strong class="text text--primary">{{
                  (selectedAvatar$ | async)?.name
                }}</strong
                ><br />
                What would you like to do?
              </h2>

              <ng-container
                *ngFor="let banner of applicationBanners$ | async | keyvalue"
              >
                <h2 cfElem="section-title">
                  {{ banner.value.bannerTitle }}
                </h2>

                <div
                  cfBlock="applications-carousel"
                  cdkDropList
                  cdkDropListSortingDisabled
                  [cdkDropListData]="banner.value.applications"
                  [cdkDropListConnectedTo]="[
                    applicationSheet.applicationCardDropList
                  ]"
                  (cdkDropListDropped)="onApplicationCardDropped($event)"
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
                    ></cf-application-card>
                  </div>
                </div>
              </ng-container>

              <h2 cfElem="section-title">All Applications</h2>

              <ng-container
                *ngIf="externalUserApplications$ | async as applications"
              >
                <div cfBlock="applications-carousel">
                  <div
                    cdkDrag
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
export class PlayScene {
  externalUserApplications$ = this.externalUserApplicationsState.applications$;
  internalUserApplications$ = this.internalUserApplicationsState.applications$;

  applicationBanners$ = this.externalUserApplicationsState.applications$.pipe(
    map((applications) =>
      applications.reduce<{
        [key: string]: {
          applications: Application[];
          bannerTitle: string;
        };
      }>((acc, application) => {
        application.categories?.forEach((category) => {
          if (!this.banners[category]) {
            return;
          }

          acc[category] = acc[category] || {
            applications: [],
            bannerTitle: this.banners[category],
          };

          acc[category]?.applications.push(application);
        });

        return acc;
      }, {})
    )
  );

  selectedAvatar$ = this.selectedAvatarState.avatar$;

  selectedApplication?: Application;
  openedApplication?: Application;

  sidebarIsOpen = false;

  private readonly banners: {
    [key: string]: string;
  } = {
    travel: 'Travel',
    productivity: 'Productivity',
    shopping: 'Shopping',
    entertainment: 'Entertainment',
    games: 'Video Games',
  };

  constructor(
    private externalUserApplicationsState: ExternalUserApplicationsState,
    private internalUserApplicationsState: InternalUserApplicationsState,
    private router: Router,
    private selectedAvatarState: SelectedAvatarState
  ) {}

  onApplicationCardClick(application: Application) {
    this.selectedApplication = application;
    this.sidebarIsOpen = false;
    setTimeout(() => (this.sidebarIsOpen = true), 0);
  }

  onApplicationCardDropped(event: CdkDragDrop<Application[]>) {
    this.selectedApplication = event.item.data;
  }

  onApplicationSheetOpenApplicationClick(application: Application) {
    this.openedApplication = application;
    this.sidebarIsOpen = false;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onApplicationOptionsButtonClick(application: Application) {
    this.sidebarIsOpen = true;
  }

  onManageApplicationsClick() {
    this.router.navigate(['/manage-applications']);
  }
}
