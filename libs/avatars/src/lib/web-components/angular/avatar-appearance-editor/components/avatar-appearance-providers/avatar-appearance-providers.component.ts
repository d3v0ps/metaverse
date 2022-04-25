import { Component, Input } from '@angular/core';

export type AvatarAppearanceProvider = {
  name: string;
  url: string;
  color?: string;
  icon?: string;
};

@Component({
  selector: 'cf-avatar-appearance-providers',
  template: `
    <div cfBlock="avatar-appearance-providers">
      <h3 cfElem="subtitle">Providers</h3>
      <p>
        We plan to provide an avatar editor in a future but in the meantime, you
        can use the following providers. Just customize your avatar, download it
        and then upload it here.
      </p>
      <div cfElem="content">
        <ng-container *ngFor="let provider of providers">
          <button
            cfBlock="button"
            (click)="onProviderClick(provider)"
            [cfMod]="'has-icon'"
            [ngStyle]="{
              'background-color': provider.color || 'transparent'
            }"
          >
            <cf-svg-icon
              [src]="provider.icon || 'assets/icons/mdi/image-edit.svg'"
            >
            </cf-svg-icon>
            {{ provider.name }}
          </button>
        </ng-container>
      </div>
    </div>
  `,
  styles: [
    `
      .avatar-appearance-providers {
        &__content {
          display: flex;
          gap: 0.5rem;
        }
      }
    `,
  ],
})
export class AvatarAppearanceProvidersComponent {
  @Input() providers: AvatarAppearanceProvider[] = [];

  onProviderClick(provider: AvatarAppearanceProvider) {
    window.open(provider.url, '_blank');
  }
}
