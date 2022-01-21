import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { SvgIconModule } from '../angular/svg-icon/svg-icon.module';

export default {
  title: 'Web Components/Buttons',
  decorators: [
    moduleMetadata({
      imports: [
        HttpClientModule,
        SvgIconModule.forRoot(),
        CommonModule,
        SvgIconModule,
      ],
    }),
  ],
  parameters: {
    badges: [BADGE.STABLE],
  },
} as Meta;

export const Normal: Story = (args: any) => ({
  template: `<button class="button">Normal Button</button>`,
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

export const Themed: Story = (args: any) => ({
  template: `
      <button class="button button--primary">Primary Button</button>
      <button class="button button--secondary">Secondary Button</button>
      <button class="button button--info">Info Button</button>
      <button class="button button--success">Success Button</button>
      <button class="button button--warning">Warning Button</button>
      <button class="button button--danger">Danger Button</button>
      <button class="button button--dark">Dark Button</button>
      <button class="button button--light">Light Button</button>`,
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

export const Disabled: Story = (args: any) => ({
  template: `
    <button class="button" disabled>Unthemed Button</button>
    <button class="button button--primary" disabled>Primary Button</button>
    <button class="button button--secondary" disabled>Secondary Button</button>
    <button class="button button--info" disabled>Info Button</button>
    <button class="button button--success" disabled>Success Button</button>
    <button class="button button--warning" disabled>Warning Button</button>
    <button class="button button--danger" disabled>Danger Button</button>
    <button class="button button--dark" disabled>Dark Button</button>
    <button class="button button--light" disabled>Light Button</button>
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

export const Icon: Story = (args: any) => ({
  template: `
    <button class="button button--primary button--has-icon">
      <cf-svg-icon src="assets/icons/mdi/magnify.svg" class="button__icon"></cf-svg-icon>
      Primary Button
    </button>
    <button class="button button--primary button--has-icon button--only-icon">
      <cf-svg-icon src="assets/icons/mdi/magnify.svg" class="button__icon"></cf-svg-icon>
    </button>
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

export const FAB: Story = (args: any) => ({
  template: `
    <button class="button button--primary button--fab">
      <cf-svg-icon src="assets/icons/mdi/magnify.svg" class="button__icon"></cf-svg-icon>
    </button>
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
