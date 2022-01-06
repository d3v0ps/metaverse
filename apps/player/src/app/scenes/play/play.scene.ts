import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Application } from '@central-factory/applications/models/application';
import { ExternalUserApplicationsState } from '@central-factory/applications/states/external-user-applications.state';
import { InternalUserApplicationsState } from '@central-factory/applications/states/internal-user-applications.state';
import { AvailableApplicationsState } from '@central-factory/applications/states/manage-applications.state';
import { map } from 'rxjs';

/** Play main scene */
@Component({
  selector: 'cf-play',
  template: `
    <div cfBlock="scene-content" cfMod="no-padding">
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
            width: 40%;
            margin: 0 auto;
          "
          >
            <cf-application-sheet
              #applicationSheet
              [application]="selectedApplication"
              [isApplicationOpened]="openedApplication ? true : false"
              (openApplicationClick)="
                onApplicationSheetOpenApplicationClick($event)
              "
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
              <h2 cfElem="section-title">Select an application</h2>

              <ng-container
                *ngIf="externalUserApplications$ | async as applications"
              >
                <div cfBlock="application-list">
                  <ng-container *ngFor="let application of applications">
                    <cf-application-card
                      [application]="application"
                      (applicationClick)="onApplicationCardClick(application)"
                    ></cf-application-card>
                  </ng-container>
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
        gap: 2rem;
      }

      cf-application-card {
        max-width: 400px;
        width: 100%;
      }
    `,
  ],
})
export class PlayScene {
  externalUserApplications$ = this.externalUserApplicationsState.applications$;
  internalUserApplications$ = this.internalUserApplicationsState.applications$;

  availableApplications$ = this.availableApplicationsState.applications$.pipe(
    map((applications) =>
      applications
        .filter(
          (application) =>
            !application.application.additionalProperties?.internal
        )
        .sort((a, b) => a.application.name.localeCompare(b.application.name))
        .sort((a, b) => {
          if (
            a.application.additionalProperties?.internal ===
            b.application.additionalProperties?.internal
          )
            return 0;
          if (!a.application.additionalProperties?.internal) return -1;
          return 1;
        })
        .sort((a, b) => b.origin - a.origin)
    )
  );

  selectedApplication?: Application;
  openedApplication?: Application;

  sidebarIsOpen = false;

  constructor(
    private externalUserApplicationsState: ExternalUserApplicationsState,
    private internalUserApplicationsState: InternalUserApplicationsState,
    private availableApplicationsState: AvailableApplicationsState,
    private router: Router
  ) {}

  onApplicationCardClick(application: Application) {
    this.selectedApplication = application;
    this.sidebarIsOpen = false;
    setTimeout(() => (this.sidebarIsOpen = true), 0);
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
