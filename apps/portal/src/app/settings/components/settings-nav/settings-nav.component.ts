import { Component } from '@angular/core';

@Component({
  selector: 'cf-settings-nav',
  template: `
    <ul>
      <li>
        <a
          class="button"
          routerLink="/settings/customization"
          routerLinkActive="button--primary"
          >Customization</a
        >
      </li>
      <li>
        <a
          class="button"
          routerLink="/settings/credits"
          routerLinkActive="button--primary"
          >Credits</a
        >
      </li>
      <!-- li>
        <a class="button" routerLink="/settings/account">Account</a>
      </li -->
    </ul>
  `,
  styles: [
    `
      .button {
        display: block;
      }
    `,
  ],
})
export class SettingsNavComponent {}
