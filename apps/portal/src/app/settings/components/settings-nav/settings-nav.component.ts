import { Component } from '@angular/core';

@Component({
  selector: 'cf-settings-nav',
  template: `
    <ul>
      <li>
        <a
          class="button"
          [routerLink]="['', { outlets: { settings: ['customization'] } }]"
          routerLinkActive="button--primary"
        >
          Customization
        </a>
      </li>
      <li>
        <a
          class="button"
          [routerLink]="['', { outlets: { settings: ['credits'] } }]"
          routerLinkActive="button--primary"
        >
          Credits
        </a>
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

      li {
        margin-bottom: 0.5rem;
      }
    `,
  ],
})
export class SettingsNavComponent {}
