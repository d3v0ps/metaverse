/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from '@angular/core';
import {
  Application,
  ColorVariation,
} from '@central-factory/applications/models/application';
import { ApplicationCloseCommand } from '@central-factory/applications/models/application-commands';
import { map } from 'rxjs';
import { LocalApplicationComponentsResolver } from '../../../resolvers/components/local-applications/local-application-components.resolver';
import { ApplicationDisplayState } from '../../../states/application-display.state';

export type ApplicationDisplayGroup = {
  title: string;
  groupId: string;
  width: string;
  height: string;
  x: number;
  y: number;
  zIndex: number;
  applications: {
    application: Application;
  }[];
  color?: string;
};

@Component({
  selector: 'cf-applications-windows-manager',
  template: `
    <ng-container
      *ngFor="let group of applicationGroups$ | async; let i = index"
    >
      <cf-window
        [width]="group.width"
        [height]="group.height"
        [x]="group.x"
        [y]="group.y"
        [zIndex]="group.zIndex"
        [visible]="true"
        [executePostDisplayActions]="true"
        [backdrop]="false"
        [maximizable]="true"
        [ngStyle]="{
          'z-index': group.zIndex
        }"
        [headerBackgroundColor]="
          group.color || 'var(--component-window-header-background-color)'
        "
        (moveOnTopEnd)="group.zIndex = $event"
        (closeModal)="onWindowClose(group)"
        (resizeWindow)="onWindowResize($event, group)"
      >
        <ng-container class="window-header__content">
          <ng-container
            *ngIf="group.applications.length === 1 && group.applications[0]"
          >
            <ng-container
              *ngIf="group.applications[0].application?.icons as icons"
            >
              <cf-svg-icon *ngIf="icons[0]" [src]="icons[0].src"></cf-svg-icon>
            </ng-container>
            {{ group.applications[0].application.name }}
          </ng-container>
          <ng-container *ngIf="group.applications.length > 1">
            <!-- {{ group.applications[0].application.name }} -->
          </ng-container>
        </ng-container>

        <ng-container class="window-body__content">
          <ng-container *ngIf="group.applications.length === 1">
            <cf-application-view
              [application]="group.applications[0].application"
              [localResolver]="localResolver"
            ></cf-application-view>
          </ng-container>
          <ng-container *ngIf="group.applications.length > 1">
            <cf-tabset>
              <cf-tab
                *ngFor="let event of group.applications"
                [title]="event.application.name"
                [icon]="
                  (event.application.icons &&
                    event.application.icons[0]?.src) ||
                  ''
                "
                [renderWhenHidden]="false"
              >
                <cf-application-view
                  [application]="event.application"
                  [localResolver]="localResolver"
                ></cf-application-view>
              </cf-tab>
            </cf-tabset>
          </ng-container>
        </ng-container>
      </cf-window>
    </ng-container>
  `,
  providers: [LocalApplicationComponentsResolver],
  styles: [
    `
      .window-body__content {
        width: 60%;
      }
    `,
  ],
})
export class ApplicationsWindowsManagerComponent {
  applicationGroups$ = this.applicationDisplayState.groupedApplications$.pipe(
    map((groupedApplications) => {
      return Object.entries(groupedApplications).map<ApplicationDisplayGroup>(
        ([groupId, applications], index) => ({
          title: groupId ? `Group #${index}` : applications[0].application.name,
          groupId,
          width: applications[0].settings.width || '1000px',
          height: applications[0].settings.height || '1200px',
          x: applications[0].settings.x || 0,
          y: applications[0].settings.y || 0,
          zIndex: applications[0].settings.zIndex || 90 + index,
          applications: applications.map((event) => ({
            application: event.application,
            settings: event.settings,
          })),
          color: applications[0]
            ? applications[0]?.application.additionalProperties?.colors &&
              applications[0]?.application?.additionalProperties?.colors
                .length > 0
              ? applications[0]?.application?.additionalProperties?.colors.find(
                  (c) => c.variation === ColorVariation.Primary
                )?.color
              : applications[0]?.application?.themeColor
            : undefined,
        })
      );
    })
  );

  constructor(
    public localResolver: LocalApplicationComponentsResolver,
    private applicationDisplayState: ApplicationDisplayState
  ) {}

  onWindowClose(group: ApplicationDisplayGroup) {
    group.applications.forEach((application) =>
      this.applicationDisplayState.close({
        application: application.application,
      } as ApplicationCloseCommand)
    );
  }

  onWindowResize(
    event: { width: number; height: number },
    group: ApplicationDisplayGroup
  ) {
    group.applications.forEach(({ application }) =>
      this.applicationDisplayState.resize({
        name: '[Application] Resize',
        application,
        dimensions: { width: event.width, height: event.height },
      })
    );
  }
}
