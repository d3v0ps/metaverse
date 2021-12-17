import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Avatar } from '@central-factory/core';
import { filter } from 'rxjs/operators';

export interface SidebarItem {
  name: string;
  routerLink: string[];
  icon: string;
  active: boolean;
}

@Component({
  selector: 'cf-scene',
  template: `
    <div block="scene">
      <div class="scene__body">
        <cf-sidebar-container
          *ngIf="selectedAvatar; else notSelectedAvatarLayout"
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
                [routerLink]="['/selected-avatar']"
                class="d-block"
                block="sidebarItem"
              >
                <div elem="text">
                  <span elem="text-content">Account</span>
                </div>
                <img
                  [src]="selectedAvatar.selectedAppearance.smallPreviewUrl"
                  style="
                  width: 55px;
                  height: 55px;
                  border-radius: 50%;
                  margin-top: 15px;"
                />
              </a>

              <ng-container *ngFor="let item of sidebarItems">
                <a
                  *ngIf="selectedAvatar"
                  [routerLink]="item.routerLink"
                  class="d-block"
                  block="sidebarItem"
                >
                  <div elem="text">
                    <span elem="text-content">{{ item.name }}</span>
                  </div>
                  <button
                    block="button"
                    mod="fab"
                    [ngClass]="{
                      'button--primary': item.active,
                      'button--secondary': !item.active
                    }"
                    style="margin-top: 15px;"
                  >
                    <svg-icon
                      [src]="item.icon"
                      elem="icon"
                      [svgClass]="'icon__svg'"
                    ></svg-icon>
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
        elem="navbar"
        [title]="title"
        (titleClick)="sidebarIsOpen = !sidebarIsOpen"
      >
      </cf-navbar>
    </div>
  `,
  styles: [
    `
      .scene__body {
        height: calc(100vh - 44px);
      }

      .scene__container {
        height: 100%;
        width: 100%;
        /* margin: 0; */
        padding: 0;
        overflow: auto;
      }

      .sidebarItem {
        &__text {
          display: inline-block;
          height: 55px;
          margin-top: 15px;
          vertical-align: top;
        }

        &__text-content {
          padding-left: 15px;
          color: white;
          width: 200px;
          display: inline-block;
          vertical-align: middle;
          line-height: 55px;
        }
      }
    `,
  ],
})
export class AppScene implements OnInit {
  title = 'Metaverse Portal';
  sidebarIsOpen = false;

  sidebarItems: SidebarItem[] = [
    {
      name: 'Avatar',
      routerLink: ['/selected-avatar'],
      icon: 'assets/icons/mdi/account.svg',
      active: false,
    },
    {
      name: 'Play',
      routerLink: ['/play'],
      icon: 'assets/icons/mdi/play.svg',
      active: false,
    },
    {
      name: 'Inventory',
      routerLink: ['/inventory'],
      icon: 'assets/icons/mdi/bag-personal.svg',
      active: false,
    },
    {
      name: 'Marketplace',
      routerLink: ['/marketplace'],
      icon: 'assets/icons/mdi/store.svg',
      active: false,
    },
    {
      name: 'Settings',
      routerLink: ['/settings'],
      icon: 'assets/icons/mdi/cog.svg',
      active: false,
    },
  ];

  selectedAvatar?: Avatar;
  // selectedAvatar = {
  //   welcomeMessage: "Hi! I'm a developing avatar!",
  //   name: 'John',
  //   title: 'Software Engineer',
  //   selectedAppearance: {
  //     format: 'readyplayer.me',
  //     src: 'assets/avatar-large.png',
  //     smallPreviewUrl: 'assets/avatar-144.png',
  //   },
  // };

  constructor(private router: Router) {}

  ngOnInit() {
    this.setSidebarItemsActive();

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => this.setSidebarItemsActive());
  }

  private setSidebarItemsActive() {
    this.sidebarItems.forEach((item) => {
      item.active = this.router.url.endsWith(item.routerLink.join('/'));
    });
  }
}
