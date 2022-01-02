import { Component } from '@angular/core';
import { environment } from '../environments/environment';

/** Metaverse's Portal root component */
@Component({
  selector: 'cf-portal-root',
  template: `
    <canvas id="bgcanvas"></canvas>
    <cf-splash-screen *ngIf="environment.showSplashScreen"></cf-splash-screen>
    <div class="application">
      <router-outlet></router-outlet>
    </div>
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
    `,
  ],
})
export class PortalRoot {
  environment = environment;
}
