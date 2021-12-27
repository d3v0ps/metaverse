import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { CustomizationSettingsState } from './settings/states/customization-settings/customization-settings.state';

/** Metaverse's Portal root component */
@Component({
  selector: 'cf-portal-root',
  template: `
    <ng-container
      *ngIf="{
        customization: customizationSettings$ | async
      } as data"
    >
      <cf-splash-screen
        *ngIf="data.customization.showSplashScreen"
      ></cf-splash-screen>
      <router-outlet></router-outlet>
    </ng-container>
  `,
})
export class PortalRoot {
  environment = environment;

  customizationSettings$ =
    this.customizationSettingsState.customizationSettings$;

  constructor(
    private readonly customizationSettingsState: CustomizationSettingsState
  ) {}
}
