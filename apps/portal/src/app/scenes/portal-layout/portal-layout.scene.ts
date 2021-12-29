import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {
  Application,
  ApplicationShortcut,
} from '@central-factory/applications/models/application';
import type { Avatar } from '@central-factory/avatars/models/avatar';
import { SelectedAvatarState } from '@central-factory/avatars/states/selected-avatar.state';
import { EntityManager } from '@central-factory/persistence/services/entity-manager';
import { Repository } from '@central-factory/persistence/services/repository';
import { DeepReadonlyObject } from 'rxdb/dist/types/types';
import { forkJoin, Observable, Subject } from 'rxjs';
import { filter, switchMap, takeUntil, tap } from 'rxjs/operators';

export interface SidebarItem {
  name: string;
  routerLink: string[];
  icon: string;
  active: boolean;
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
        <div class="scene__body">
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
                    [routerLink]="item.routerLink"
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

                <router-outlet name="sidebar"></router-outlet>
              </div>
            </cf-sidebar>

            <div cf-sidebar-content>
              <div class="scene__content">
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
          cfElem="navbar"
          [title]="title"
          (titleClick)="sidebarIsOpen = !sidebarIsOpen"
        >
        </cf-navbar>
      </div>
    </ng-container>
  `,
})
export class PortalLayoutScene implements OnInit, OnDestroy {
  public title = 'Metaverse Portal';
  public sidebarIsOpen = false;

  public sidebarItems: SidebarItem[] = [];

  public readonly selectedAvatar$: Observable<Avatar | null | undefined> =
    this.selectedAvatarState.avatar$;

  private readonly destroy$ = new Subject<void>();

  constructor(
    private readonly router: Router,
    private readonly entityManager: EntityManager,
    private readonly selectedAvatarState: SelectedAvatarState
  ) {}

  public ngOnInit(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntil(this.destroy$)
      )
      .subscribe(() => this.setSidebarItemsActive());

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
        tap((applications) => this.generateSidebarItems(applications)),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  private generateSidebarItems(
    applications: DeepReadonlyObject<Application>[]
  ) {
    this.sidebarItems = applications
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
            active: false,
          })
        );

        return result.concat(sidebarItems);
      }, []);

    this.setSidebarItemsActive();
  }

  private setSidebarItemsActive() {
    this.sidebarItems.forEach((item) => {
      item.active = this.router.url.startsWith(item.routerLink.join('/'));
    });
  }
}
