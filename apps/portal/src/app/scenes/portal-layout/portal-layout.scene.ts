import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SelectedAvatarState } from '@central-factory/agent-avatars/states/selected-avatar/selected-avatar.state';
import type { Avatar } from '@central-factory/avatars/models/avatar';
import { AudioService } from '@central-factory/core/angular/services/audio.service';
import { Howl } from 'howler';
import { Observable } from 'rxjs';
import { filter, take, tap } from 'rxjs/operators';
import { CustomizationSettingsState } from '../../settings/states/customization-settings/customization-settings.state';

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
                    (click)="onMenuItemClick()"
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
export class PortalLayoutScene implements OnInit {
  title = 'Metaverse Portal';
  sidebarIsOpen = false;

  sidebarItems: SidebarItem[] = [
    {
      name: 'Play',
      routerLink: ['/play'],
      icon: 'assets/icons/mdi/play.svg',
      active: false,
    },
    {
      name: 'Avatar',
      routerLink: ['/selected-avatar'],
      icon: 'assets/icons/mdi/account.svg',
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

  selectedAvatar$: Observable<Avatar | undefined> =
    this.selectedAvatarState.avatar$;

  private bgAudio?: Howl;

  constructor(
    private router: Router,
    private selectedAvatarState: SelectedAvatarState,
    private audioService: AudioService,
    private customizationSettingsState: CustomizationSettingsState
  ) {}

  ngOnInit() {
    this.setSidebarItemsActive();

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => this.setSidebarItemsActive());

    // this.customizationSettingsState.customizationSettings$
    //   .pipe(
    //     map(
    //       (customizationSettings) =>
    //         customizationSettings.playAudio && customizationSettings.playMusic
    //     ),
    //     tap((playMusic) => {
    //       if (playMusic) {
    //         this.bgAudio = this.audioService.loop(
    //           'assets/sounds/bg/541979__rob-marion__gasp-ambience-loop-city.wav'
    //         );
    //         return;
    //       }

    //       if (this.bgAudio) {
    //         this.bgAudio.stop();
    //       }
    //     })
    //   )
    //   .subscribe();
  }

  onMenuItemClick() {
    console.log('on click');
    this.customizationSettingsState.customizationSettings$
      .pipe(
        take(1),
        filter(
          (customizationSettings) =>
            customizationSettings.playAudio && customizationSettings.playSFX
        ),
        tap(() =>
          this.audioService.play(
            'assets/sounds/sfx/542023__rob-marion__gasp-ui-clicks-4.wav'
          )
        )
      )
      .subscribe();
  }

  private setSidebarItemsActive() {
    this.sidebarItems.forEach((item) => {
      item.active = this.router.url.startsWith(item.routerLink.join('/'));
    });
  }
}
