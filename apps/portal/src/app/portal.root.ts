import { Component, OnInit, ViewChild } from '@angular/core';
import { WindowComponent } from '@central-factory/web-components/angular/window/window.component';
import { RoomsState } from '@central-factory/worlds/states/rooms.state';
import { environment } from '../environments/environment';

/** Metaverse's Portal root component */
@Component({
  selector: 'cf-portal-root',
  template: `
    <canvas id="bgcanvas"></canvas>
    <div id="bgiframe"></div>
    <cf-phaser-renderer
      *ngIf="selectedRoom$ | async as room"
    ></cf-phaser-renderer>
    <cf-splash-screen *ngIf="showSplashScreen"></cf-splash-screen>
    <div class="application">
      <router-outlet></router-outlet>
    </div>

    <cf-window #rootWindow [maximizable]="true">
      <ng-container class="window-header__content"
        >A message from the author</ng-container
      >
      <ng-container class="window-body__content">
        <h3>Welcome to The Central Factory Metaverse</h3>
        <p>
          This is a demo release of The Central Factory Metaverse project. Not
          all features are implemented yet, you might find many issues and
          unexpected behaviours. You can give us your feedback on
          <a href="https://github.com/central-factory/metaverse" target="_blank"
            >the project page</a
          >. Thank you for getting interested on this project.
        </p>
      </ng-container>
      <ng-container class="window-footer__content">
        <button cfBlock="button" cfMod="primary" (click)="rootWindow.hide()">
          I'm ready!
        </button>
      </ng-container>
    </cf-window>
  `,
  styles: [
    `
      #bgcanvas {
        display: block;
        margin: 0 auto;
        width: 100vw;
        height: 100vh;
        position: fixed;
        z-index: -1;
      }
      #bgiframe {
        display: block;
        margin: 0 auto;
        width: 100vw;
        height: 100vh;
        position: fixed;
        z-index: -1;
      }
    `,
  ],
})
export class PortalRoot implements OnInit {
  environment = environment;

  showSplashScreen = true || environment.showSplashScreen;

  selectedRoom$ = this.roomsState.selectedRoom$;

  @ViewChild('rootWindow', { static: true }) rootWindow!: WindowComponent;

  constructor(private roomsState: RoomsState) {}

  ngOnInit() {
    if (this.environment.demo && !localStorage.getItem('visited')) {
      this.rootWindow.show();
      localStorage.setItem('visited', true.toString());
    }

    const preload = document.getElementById('preloadSplash');

    if (preload) {
      preload.remove();
    }
  }
}
