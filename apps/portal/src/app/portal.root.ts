import { Component } from '@angular/core';
import { environment } from '../environments/environment';

/** Metaverse's Portal root component */
@Component({
  selector: 'cf-portal-root',
  template: `
    <cf-splash-screen *ngIf="environment.showSplashScreen"></cf-splash-screen>
    <router-outlet></router-outlet>
  `,
})
export class PortalRoot {
  environment = environment;
}
