import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Application } from '@central-factory/applications/models/application';
import { UserApplicationsState } from '@central-factory/applications/states/user-applications.state';
import { map } from 'rxjs/operators';

/** Manage scene */
@Component({
  selector: 'cf-manage-applications',
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
              [isApplicationOpened]="false"
              (openApplicationClick)="
                onApplicationSheetOpenApplicationClick($event)
              "
            ></cf-application-sheet>
          </div>
        </cf-sidebar>

        <div cf-sidebar-content>
          <div style="padding: 20px">
            <div class="top-section">
              <cf-svg-icon
                src="assets/icons/mdi/arrow-left.svg"
                [svgClass]="'top-section__icon'"
                (click)="onGoBackIconClick()"
              ></cf-svg-icon>
            </div>

            <h2 cfElem="section-title">Select an application</h2>

            <ng-container *ngIf="applications$ | async as applications">
              <div cfBlock="application-list">
                <ng-container *ngFor="let application of applications">
                  <cf-application-card
                    [application]="application"
                    [showUninstallButton]="
                      !application.additionalProperties?.internal
                    "
                    (applicationClick)="onApplicationCardClick(application)"
                  >
                  </cf-application-card>
                </ng-container>
              </div>
            </ng-container>
          </div>
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
export class ManageApplicationsScene {
  applications$ = this.userApplicationsState.applications$.pipe(
    map((applications) =>
      applications
        .sort((a, b) => a.name.localeCompare(b.name))
        .sort((a, b) => {
          if (
            a.additionalProperties?.internal ===
            b.additionalProperties?.internal
          )
            return 0;
          if (!a.additionalProperties?.internal) return -1;
          return 1;
        })
    )
  );

  selectedApplication?: Application;

  sidebarIsOpen = false;

  constructor(
    private userApplicationsState: UserApplicationsState,
    private router: Router
  ) {}

  onApplicationCardClick(application: Application) {
    this.selectedApplication = application;
    this.sidebarIsOpen = true;
  }

  onApplicationSheetOpenApplicationClick(application: Application) {
    console.log('open application');
  }

  onGoBackIconClick() {
    this.router.navigate(['/play']);
  }
}
