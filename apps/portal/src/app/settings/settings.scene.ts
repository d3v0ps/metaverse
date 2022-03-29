import { Component } from '@angular/core';

@Component({
  selector: 'cf-settings',
  template: `
    <div cfBlock="scene-content">
      <h2>Settings</h2>

      <div cfBlock="settings">
        <div cfElem="nav">
          <cf-settings-nav></cf-settings-nav>
        </div>
        <div cfElem="content">
          <router-outlet name="settings"></router-outlet>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .settings {
        display: flex;
        flex-direction: row;
        height: 100%;
        gap: 1rem;

        &__content {
          width: 100%;
        }
      }
    `,
  ],
})
export class SettingsScene {}
