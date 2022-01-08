import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {
  Application,
  ApplicationShortcut,
} from '@central-factory/applications/models/application';
import { RecentlyOpenedApplicationsState } from '@central-factory/applications/states/recently-opened-applications.state';
import { SelectedApplicationState } from '@central-factory/applications/states/selected-application.state';
import type { Avatar } from '@central-factory/avatars/models/avatar';
import { SelectedAvatarState } from '@central-factory/avatars/states/selected-avatar.state';
import { EntityManager } from '@central-factory/persistence/services/entity-manager';
import { Repository } from '@central-factory/persistence/services/repository';
import { CustomizationSettingsState } from '@central-factory/preferences/states/customization/customization-settings.state';
import { bounceIn, fadeInUp } from 'ng-animate';
import { DeepReadonlyObject } from 'rxdb/dist/types/types';
import { forkJoin, Observable, Subject } from 'rxjs';
import {
  distinctUntilChanged,
  filter,
  map,
  skip,
  switchMap,
  takeUntil,
  tap,
} from 'rxjs/operators';

export interface SidebarItem {
  name: string;
  routerLink: string[];
  icon: string;
  active: boolean;
  color?: string;
  application?: DeepReadonlyObject<Application>;
}

export enum SceneContentAnimationState {
  Idle = 'Idle',
  Opened = 'Opened',
  Animated = 'Animated',
}

@Component({
  selector: 'cf-portal-layout',
  template: `
    <ng-container
      *ngIf="{
        selectedAvatar: selectedAvatar$ | async
      } as data"
    >
      <div cfBlock="scene">
        <div
          cfElem="body"
          [cfMod]="{
            'no-navbar': !showNavbar
          }"
        >
          <cf-sidebar-container
            *ngIf="data.selectedAvatar; else notSelectedAvatarLayout"
          >
            <!-- A sidebar -->
            <cf-sidebar
              [(opened)]="sidebarIsOpen"
              [dock]="true"
              [dockedSize]="'80px'"
              [showBackdrop]="true"
              [closeOnClickBackdrop]="true"
              [closeOnClickOutside]="true"
            >
              <div style="margin-top: 20px">
                <a
                  (click)="
                    onSidebarItemClick({
                      name: 'Select Avatar',
                      routerLink: ['/select-avatar'],
                      icon: data.selectedAvatar.selectedAppearance
                        .smallPreviewUrl,
                      active: false
                    })
                  "
                  [routerLink]="['/select-avatar']"
                  class="d-block"
                  cfBlock="sidebar-item"
                >
                  <div cfElem="text">
                    <span cfElem="text-content">Account</span>
                  </div>
                  <img
                    cfElem="image"
                    [src]="
                      data.selectedAvatar.selectedAppearance.smallPreviewUrl
                    "
                  />
                </a>

                <ng-container *ngFor="let item of sidebarItems">
                  <a
                    (click)="onSidebarItemClick(item)"
                    class="d-block"
                    cfBlock="sidebar-item"
                  >
                    <div cfElem="text">
                      <span cfElem="text-content">{{ item.name }}</span>
                    </div>
                    <button
                      cfBlock="button"
                      cfMod="fab"
                      [ngClass]="{
                        'button--active': item.active
                      }"
                      style="margin-top: 15px;"
                    >
                      <cf-svg-icon
                        [src]="item.icon"
                        cfElem="icon"
                        [svgClass]="'icon__svg'"
                      ></cf-svg-icon>
                    </button>
                  </a>
                </ng-container>

                <div
                  cdkDropList
                  cdkDropListSortingDisabled
                  [cdkDropListData]="recentlyOpenedSidebarItems"
                  [cdkDropListConnectedTo]="['applications-carousel']"
                >
                  <div
                    *ngFor="let item of recentlyOpenedSidebarItems"
                    class="d-block"
                    cfBlock="sidebar-item"
                  >
                    <div class="d-block" cfBlock="sidebar-item">
                      <div cfElem="text">
                        <span cfElem="text-content">{{ item.name }}</span>
                      </div>
                      <button
                        cdkDrag
                        [cdkDragData]="item.application"
                        cfBlock="button"
                        cfMod="fab"
                        [ngClass]="{
                          'button--active': item.active
                        }"
                        [ngStyle]="{
                          'background-color': item.color,
                          'margin-top': '15px'
                        }"
                        (click)="onRecentlyOpenedItemClick(item)"
                      >
                        <cf-svg-icon
                          [src]="item.icon"
                          cfElem="icon"
                          [svgClass]="'icon__svg'"
                        ></cf-svg-icon>
                      </button>
                    </div>
                  </div>
                </div>

                <router-outlet name="sidebar"></router-outlet>
              </div>
            </cf-sidebar>

            <div cf-sidebar-content>
              <div
                class="scene__content"
                [@sceneContentAnimationState]="sceneContentAnimationState"
              >
                <router-outlet></router-outlet>
              </div>
            </div>
          </cf-sidebar-container>

          <ng-template #notSelectedAvatarLayout>
            <div class="scene__container">
              <div class="scene__content">
                <router-outlet></router-outlet>
              </div>
            </div>
          </ng-template>
        </div>
        <cf-navbar
          *ngIf="showNavbar"
          cfElem="navbar"
          [title]="title"
          (titleClick)="sidebarIsOpen = !sidebarIsOpen"
        >
        </cf-navbar>
      </div>
    </ng-container>
  `,
  animations: [
    trigger('sceneContentAnimationState', [
      transition(
        `${SceneContentAnimationState.Idle} => ${SceneContentAnimationState.Animated}`,
        useAnimation(bounceIn)
      ),
      transition(
        `${SceneContentAnimationState.Idle} => ${SceneContentAnimationState.Opened}`,
        useAnimation(fadeInUp, {
          params: { timing: 0.5 },
        })
      ),
    ]),
  ],
})
export class PortalLayoutScene implements OnInit, OnDestroy {
  public title = 'Metaverse Portal';
  public sidebarIsOpen = false;

  public sidebarItems: SidebarItem[] = [];
  public recentlyOpenedSidebarItems: SidebarItem[] = [];

  public showNavbar = false;
  public sceneContentAnimationState = SceneContentAnimationState.Idle;

  public readonly selectedAvatar$: Observable<Avatar | null | undefined> =
    this.selectedAvatarState.avatar$;

  public readonly recentlyOpenedApplications$ =
    this.recentlyOpenedApplicationsState.applications$.pipe(
      map((applications) => applications.reverse()),
      map((applications) => this.generateSidebarItems(applications))
    );

  private readonly destroy$ = new Subject<void>();

  constructor(
    private readonly router: Router,
    private readonly entityManager: EntityManager,
    private readonly selectedAvatarState: SelectedAvatarState,
    private readonly selectedApplicationState: SelectedApplicationState,
    private readonly recentlyOpenedApplicationsState: RecentlyOpenedApplicationsState,
    private readonly customizationSettingsState: CustomizationSettingsState
  ) {}

  public ngOnInit(): void {
    this.customizationSettingsState.customizationSettings$
      .pipe(
        map((customizationSettings) => customizationSettings?.theme),
        filter((theme) => theme !== undefined),
        distinctUntilChanged((a, b) => a?.path === b?.path),
        skip(1),
        tap((theme) => {
          this.sceneContentAnimationState = SceneContentAnimationState.Idle;
          setTimeout(
            () =>
              (this.sceneContentAnimationState =
                SceneContentAnimationState.Animated),
            100
          );
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();

    this.recentlyOpenedApplications$
      .pipe(
        takeUntil(this.destroy$),
        tap((sidebarItems) => (this.recentlyOpenedSidebarItems = sidebarItems))
      )
      .subscribe();

    // this.router.events
    //   .pipe(
    //     filter((event) => event instanceof NavigationStart),
    //     takeUntil(this.destroy$)
    //   )
    //   .subscribe(() => {
    //     this.sceneContentAnimationState = SceneContentAnimationState.Idle;
    //     setTimeout(
    //       () =>
    //         (this.sceneContentAnimationState =
    //           SceneContentAnimationState.Opened),
    //       100
    //     );
    //   });

    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        this.setSidebarItemsActive(this.sidebarItems);
      });

    this.entityManager.initialize$
      .pipe(
        switchMap(() =>
          forkJoin([
            this.entityManager.getRepository<Application>(
              'userapplications',
              'com.central-factory.portal'
            ),
          ])
        ),
        tap(([userApplicationsRepository]) =>
          this.subscribeToDataChanges(userApplicationsRepository)
        )
      )
      .subscribe();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public onRecentlyOpenedItemClick(sidebarItem: SidebarItem) {
    this.sceneContentAnimationState = SceneContentAnimationState.Idle;
    setTimeout(() => {
      this.sceneContentAnimationState = SceneContentAnimationState.Opened;

      if (sidebarItem.application) {
        this.selectedApplicationState.selectApplication(
          sidebarItem.application as Application
        );
        this.selectedApplicationState.openSidebar();
      }
    }, 100);
  }

  public onSidebarItemClick(sidebarItem: SidebarItem) {
    this.sceneContentAnimationState = SceneContentAnimationState.Idle;
    setTimeout(() => {
      this.sceneContentAnimationState = SceneContentAnimationState.Opened;

      if (sidebarItem.routerLink) {
        this.router.navigate(sidebarItem.routerLink);
      }
    }, 100);
  }

  private subscribeToDataChanges(
    userApplicationsRepository: Repository<Application>
  ) {
    userApplicationsRepository
      .find({
        selector: {
          'additionalProperties.sidebarShortcuts': {
            $exists: true,
          },
        },
      })
      .pipe(
        tap((applications) => {
          this.sidebarItems = this.generateSidebarItems(applications);
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  private generateSidebarItems(
    applications: DeepReadonlyObject<Application>[]
  ) {
    const sidebarItems = applications
      .sort((a, b) => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return a.createdAt!.localeCompare(b.createdAt!);
      })
      .reduce<SidebarItem[]>((result, current) => {
        const additionalProperties = current.additionalProperties;
        const sidebarShortcutNames =
          additionalProperties?.sidebarShortcuts || [];
        const shortcuts = current.shortcuts || [];

        const sidebarShortcuts = sidebarShortcutNames
          .map((shortcutName) =>
            shortcuts.find((shortcut) => shortcut.name === shortcutName)
          )
          .filter((shortcut) =>
            shortcut ? true : false
          ) as ApplicationShortcut[];

        const sidebarItems = sidebarShortcuts.map(
          (shortcut: ApplicationShortcut) => ({
            name: shortcut.name,
            routerLink: [shortcut.url],
            icon:
              shortcut.icons && shortcut.icons.length > 0
                ? shortcut.icons[0].src
                : '',
            color:
              current.additionalProperties?.colors?.find(
                (color) => color.variation === 'primary'
              )?.color ||
              (current.additionalProperties?.internal === true
                ? 'var(--color-base-primary-medium)'
                : undefined),
            active: false,
            application: current,
          })
        );

        return result.concat(sidebarItems);
      }, []);

    this.setSidebarItemsActive(sidebarItems);

    return sidebarItems;
  }

  private setSidebarItemsActive(sidebarItems: SidebarItem[]) {
    sidebarItems.forEach((item) => {
      item.active = this.router.url.startsWith(item.routerLink.join('/'));
    });
  }
}
