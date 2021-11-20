import { Component } from '@angular/core';

@Component({
  selector: 'cf-scene',
  template: `
    <div block="scene">
      <cf-header
        elem="header"
        [title]="title"
        (titleClick)="sidebarIsOpen = !sidebarIsOpen"
      >
      </cf-header>
      <div class="scene__body">
        <cf-sidebar-container>
          <!-- A sidebar -->
          <cf-sidebar
            [(opened)]="sidebarIsOpen"
            [dock]="true"
            [dockedSize]="'40px'"
            [showBackdrop]="true"
            [closeOnClickBackdrop]="true"
            [closeOnClickOutside]="true"
          >
            <router-outlet name="sidebar"></router-outlet>
            <p>Sidebar contents</p>
          </cf-sidebar>

          <div cf-sidebar-content>
            <div class="scene__content">
              <router-outlet></router-outlet>
            </div>
          </div>
        </cf-sidebar-container>
      </div>
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
