/* eslint-disable @typescript-eslint/no-explicit-any */
import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { userApplicationsById } from '@central-factory/applications/data/base/user-applications.data';
import { Application } from '@central-factory/applications/models/application';
import { ApplicationOpenCommand } from '@central-factory/applications/models/application-commands';
import { LocalApplicationComponentsResolver } from '@central-factory/applications/resolvers/components/local-applications/local-application-components.resolver';
import { ApplicationDisplayState } from '@central-factory/applications/states/application-display.state';
import { ManageAvatarAppearancesScene } from '@central-factory/manage-avatars/scenes/create-avatar/scenes/manage-avatar-appearances/manage-avatar-appearances.scene';
import { map } from 'rxjs';

@Component({
  selector: 'cf-application-manager',
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
        (moveOnTopEnd)="group.zIndex = $event"
      >
        <ng-container class="window-header__content">
          <ng-container
            *ngIf="group.applications[0].application?.icons as icons"
          >
            <cf-svg-icon *ngIf="icons[0]" [src]="icons[0].src"></cf-svg-icon>
          </ng-container>
          <ng-container
            *ngIf="group.applications.length === 1 && group.applications[0]"
          >
            {{ group.applications[0].application.name }}
          </ng-container>
          <ng-container *ngIf="group.applications.length > 1">
            <!-- Group #{{ group.groupId }} -->
            {{ group.applications[0].application.name }}
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
export class ApplicationManagerComponent implements OnInit {
  applicationGroups$ = this.applicationDisplayState.groupedApplications$.pipe(
    map((groupedApplications) => {
      return Object.entries(groupedApplications).map(
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
            component: this.resolveComponent(event.application),
          })),
        })
      );
    })
  );

  constructor(
    public localResolver: LocalApplicationComponentsResolver,
    private applicationDisplayState: ApplicationDisplayState,
    @Inject(DOCUMENT) private _document: Document
  ) {}

  ngOnInit() {
    if (
      !this._document.defaultView?.innerHeight ||
      !this._document.defaultView?.innerWidth
    ) {
      setTimeout(() => {
        this.ngOnInit();
      }, 100);
      return;
    }

    const layout = {
      leftPanel: {
        x: this._document.defaultView?.innerWidth * 0.05,
        y: this._document.defaultView?.innerHeight * 0.1,
        width: `calc(100vw - 10%)`,
        height: `calc(100vh - 20%)`,
      },
      rightPanel: {
        x: this._document.defaultView?.innerWidth * 0.67,
        y: this._document.defaultView?.innerHeight * 0.1,
        width: `calc(100vw - 70%)`,
        height: `calc(100vh - 20%)`,
      },
    };

    this.applicationDisplayState.open({
      name: ApplicationOpenCommand.name,
      application: userApplicationsById['com.central-factory.devtools'],
      settings: {
        groupId: 'map',
        show: true,
        // width: '1000px',
        // height: '1200px',
        // x: 140,
        // y: 146
        ...layout.leftPanel,
      },
    });

    this.applicationDisplayState.open({
      name: ApplicationOpenCommand.name,
      application: userApplicationsById['com.central-factory.world'],
      settings: {
        groupId: 'map',
        show: true,
        // width: '1000px',
        // height: '1200px',
        // x: 140,
        // y: 146
        ...layout.leftPanel,
      },
    });

    this.applicationDisplayState.open({
      name: ApplicationOpenCommand.name,
      application: userApplicationsById['com.central-factory.burg'],
      settings: {
        groupId: 'map',
        show: true,
        // width: '1000px',
        // height: '1200px',
        // x: 140,
        // y: 146
        ...layout.leftPanel,
      },
    });

    this.applicationDisplayState.open({
      name: ApplicationOpenCommand.name,
      application: userApplicationsById['com.central-factory.mirror'],
      settings: {
        groupId: 'map',
        show: true,
        ...layout.leftPanel,
      },
    });

    // this.applicationDisplayState.open({
    //   name: ApplicationOpenCommand.name,
    //   application: userApplicationsById['com.central-factory.inventory'],
    //   settings: {
    //     groupId: '1',
    //     show: true,
    //     ...layout.rightPanel,
    //   },
    // });

    // this.applicationDisplayState.open({
    //   name: ApplicationOpenCommand.name,
    //   application: userApplicationsById['com.central-factory.portals'],
    //   settings: {
    //     groupId: '1',
    //     show: true,
    //     ...layout.rightPanel,
    //   },
    // });
  }

  private resolveComponent(application: Application) {
    return ManageAvatarAppearancesScene;
  }
}
