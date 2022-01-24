import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { SvgIconModule } from '../svg-icon/svg-icon.module';
import { WindowModule } from './window.module';

export default {
  title: 'Angular/Windows',
  decorators: [
    moduleMetadata({
      imports: [
        HttpClientModule,
        SvgIconModule.forRoot(),
        CommonModule,
        WindowModule,
      ],
    }),
  ],
  parameters: {
    badges: [BADGE.STABLE],
  },
} as Meta;

export const Normal: Story = () => ({
  template: `
    <cf-window #demoWindow>
      <ng-container class="window-header__content"
        >Window Title</ng-container
      >
      <ng-container class="window-body__content">
        Window Content
      </ng-container>
      <ng-container class="window-footer__content">
        <button
          class="button button--primary"
          (click)="demoWindow.hide()"
        >
          Hide Window
        </button>
      </ng-container>
    </cf-window>

    <button class="button" (click)="demoWindow.show()">Open Window</button>
  `,
  styles: [
    `
    :host {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }
  `,
  ],
});

export const WithoutBackdrop: Story = () => ({
  template: `
    <cf-window #demoWindow [backdrop]="false">
      <ng-container class="window-header__content"
        >Window Title</ng-container
      >
      <ng-container class="window-body__content">
        Window Content
      </ng-container>
      <ng-container class="window-footer__content">
        <button
          class="button button--primary"
          (click)="demoWindow.hide()"
        >
          Hide Window
        </button>
      </ng-container>
    </cf-window>

    <button class="button" (click)="demoWindow.show()">Open Window</button>
  `,
  styles: [
    `
    :host {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }
  `,
  ],
});

export const Maximizable: Story = () => ({
  template: `
    <cf-window #demoWindow [maximizable]="true">
      <ng-container class="window-header__content"
        >Window Title</ng-container
      >
      <ng-container class="window-body__content">
        Window Content
      </ng-container>
      <ng-container class="window-footer__content">
        <button
          class="button button--primary"
          (click)="demoWindow.hide()"
        >
          Hide Window
        </button>
      </ng-container>
    </cf-window>

    <button class="button" (click)="demoWindow.show()">Open Window</button>
  `,
  styles: [
    `
    :host {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }
  `,
  ],
});
