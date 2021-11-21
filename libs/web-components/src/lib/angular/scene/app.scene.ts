import { Component } from '@angular/core';

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
            <img
              src="assets/avatar-144.png"
              style="
              display: block;
              width: 55px;
              height: 55px;
              border-radius: 50%;
              margin-top: 35px;"
            />

            <button
              class="d-block"
              block="button"
              mod="fab primary"
              style="margin-top: 15px;"
            >
              <svg-icon
                src="assets/icons/mdi/account.svg"
                elem="icon"
                [svgClass]="'icon__svg'"
              ></svg-icon>
            </button>

            <button
              class="d-block"
              block="button"
              mod="fab secondary"
              style="margin-top: 15px;"
            >
              <svg-icon
                src="assets/icons/mdi/play.svg"
                elem="icon"
                [svgClass]="'icon__svg'"
              ></svg-icon>
            </button>

            <button
              class="d-block"
              block="button"
              mod="fab secondary"
              style="margin-top: 15px;"
            >
              <svg-icon
                src="assets/icons/mdi/bag-personal.svg"
                elem="icon"
                [svgClass]="'icon__svg'"
              ></svg-icon>
            </button>

            <button
              class="d-block"
              block="button"
              mod="fab secondary"
              style="margin-top: 15px;"
            >
              <svg-icon
                src="assets/icons/mdi/store.svg"
                elem="icon"
                [svgClass]="'icon__svg'"
              ></svg-icon>
            </button>

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
    `,
  ],
})
export class AppScene {
  title = 'Metaverse Portal';
  sidebarIsOpen = false;
}
