/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, HostListener } from '@angular/core';
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
      *ngFor="
        let group of applicationGroups$ | async;
        let i = index;
        trackBy: trackGroupBy
      "
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
        [closeable]="false"
        [maximizable]="true"
        [overrideMaximize]="true"
        [maximized]="group.groupId === maximizedApplicationDisplayGroup"
        [ngStyle]="{
          'z-index': group.zIndex
        }"
        [headerBackgroundColor]="
          'var(--component-window-header-background-color)'
        "
        (moveOnTopEnd)="group.zIndex = $event"
        (closeModal)="onApplicationWindowClose(group)"
        (resizeWindow)="onApplicationWindowResize($event, group)"
        (maximizeWindow)="onApplicationWindowMaximize(group)"
        (normalizeWindow)="onApplicationWindowNormalize(group)"
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
            <ng-container
              *ngIf="
                group.applications[selectedApplications[group.groupId] || 0]
                  .application?.icons as icons
              "
            >
              <cf-svg-icon *ngIf="icons[0]" [src]="icons[0].src"></cf-svg-icon>
            </ng-container>
            {{
              group.applications[selectedApplications[group.groupId] || 0]
                .application.name
            }}
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
            <cf-tabset
              (selectedTabChange)="onSelectTab(group.groupId, $event)"
              theme="primary"
              cfBlock="applications-tabset"
            >
              <cf-tab
                *ngFor="
                  let event of group.applications;
                  trackBy: trackApplicationBy
                "
                [title]="event.application.name"
                [icon]="
                  (event.application.icons &&
                    event.application.icons[0]?.src) ||
                  ''
                "
                [renderWhenHidden]="false"
              >
                <div cfBlock="application-tab">
                  <cf-application-view
                    [application]="event.application"
                    [localResolver]="localResolver"
                  ></cf-application-view>
                </div>
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

      .application-tab {
        height: calc(100% - 64px);
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

  selectedApplications: Record<string, number> = {};
  maximizedApplicationDisplayGroup?: string;

  constructor(
    public localResolver: LocalApplicationComponentsResolver,
    private applicationDisplayState: ApplicationDisplayState
  ) {}

  @HostListener('window:resize')
  onWindowResize(): void {
    this.applicationDisplayState.align();
  }

  onApplicationWindowClose(group: ApplicationDisplayGroup) {
    group.applications.forEach((application) =>
      this.applicationDisplayState.close({
        application: application.application,
      } as ApplicationCloseCommand)
    );
  }

  onApplicationWindowResize(
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

  onApplicationWindowMaximize(group: ApplicationDisplayGroup) {
    this.applicationDisplayState.maximizeGroup(group.groupId);
    this.maximizedApplicationDisplayGroup = group.groupId;
  }

  onApplicationWindowNormalize(group: ApplicationDisplayGroup) {
    this.applicationDisplayState.normalizeGroup(group.groupId);
    this.maximizedApplicationDisplayGroup = undefined;
  }

  onSelectTab(groupId: string, index: number) {
    this.selectedApplications[groupId] = index;
  }

  trackGroupBy(_index: number, item: any) {
    return `${item.x} ${item.y} ${item.width} ${item.height}`;
  }

  trackApplicationBy(_index: number, item: any) {
    return item.id;
  }
}
