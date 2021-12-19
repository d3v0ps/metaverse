import { Component } from '@angular/core';
import { environment } from '../environments/environment';

/** Metaverse's Portal root component */
@Component({
  selector: 'cf-portal-root',
  template: ` <router-outlet></router-outlet> `,
})
export class PortalRoot {
  environment = environment;
}
