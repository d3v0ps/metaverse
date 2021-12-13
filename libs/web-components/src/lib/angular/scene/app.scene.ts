import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
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
        <cf-sidebar-container>
          <!-- A sidebar -->
          <cf-sidebar
            [(opened)]="sidebarIsOpen"
            [dock]="true"
            [dockedSize]="'80px'"
            [showBackdrop]="true"
            [closeOnClickBackdrop]="true"
            [closeOnClickOutside]="true"
          >
            <a
              [routerLink]="['/selected-avatar']"
              class="d-block"
              block="sidebarItem"
            >
              <span elem="text">Account</span>
              <img
                src="assets/avatar-144.png"
                style="
                width: 55px;
                height: 55px;
                border-radius: 50%;
                margin-top: 35px;"
              />
            </a>

            <a
              *ngFor="let item of sidebarItems"
              [routerLink]="item.routerLink"
              class="d-block"
              block="sidebarItem"
            >
              <span elem="text">{{ item.name }}</span>
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

            <router-outlet name="sidebar"></router-outlet>
          </cf-sidebar>

          <div cf-sidebar-content>
            <div class="scene__content">
              <router-outlet></router-outlet>
            </div>
          </div>
        </cf-sidebar-container>
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

      .sidebarItem {
        &__text {
          padding-left: 15px;
          color: white;
          width: 200px;
          display: inline-block;
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
