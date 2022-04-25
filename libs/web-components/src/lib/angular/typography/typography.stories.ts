import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { Meta, moduleMetadata } from '@storybook/angular';
import { SvgIconModule } from '../svg-icon/svg-icon.module';
import { TypographyModule } from './typography.module';

export default {
  title: 'Atoms/Typography',
  decorators: [
    moduleMetadata({
      imports: [
        HttpClientModule,
        SvgIconModule.forRoot(),
        CommonModule,
        SvgIconModule,
        TypographyModule,
      ],
    }),
  ],
  parameters: {
    badges: [BADGE.NEEDS_REVISION, 'css', 'angular'],
  },
} as Meta;

export const Paragraph = () => ({
  template: `
    <cf-typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum vulputate nisl, non commodo ligula maximus sed. Pellentesque quis ipsum felis</cf-typography>
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

export const Headings = () => ({
  template: `
    <cf-typography type="h1">H1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum vulputate nisl, non commodo ligula maximus sed. Pellentesque quis ipsum felis</cf-typography>
    <cf-typography type="h2">H2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum vulputate nisl, non commodo ligula maximus sed. Pellentesque quis ipsum felis</cf-typography>
    <cf-typography type="h3">H3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum vulputate nisl, non commodo ligula maximus sed. Pellentesque quis ipsum felis</cf-typography>
    <cf-typography type="h4">H4. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum vulputate nisl, non commodo ligula maximus sed. Pellentesque quis ipsum felis</cf-typography>
    <cf-typography type="h5">H5. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum vulputate nisl, non commodo ligula maximus sed. Pellentesque quis ipsum felis</cf-typography>
    <cf-typography type="h6">H6. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum vulputate nisl, non commodo ligula maximus sed. Pellentesque quis ipsum felis</cf-typography>
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

export const Bold = () => ({
  template: `
    <cf-typography [bold]="true">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum vulputate nisl, non commodo ligula maximus sed. Pellentesque quis ipsum felis</cf-typography>
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

export const Themed = () => ({
  template: `
    <cf-typography theme="primary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum vulputate nisl, non commodo ligula maximus sed. Pellentesque quis ipsum felis</cf-typography>
    <cf-typography theme="secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum vulputate nisl, non commodo ligula maximus sed. Pellentesque quis ipsum felis</cf-typography>
    <cf-typography theme="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum vulputate nisl, non commodo ligula maximus sed. Pellentesque quis ipsum felis</cf-typography>
    <cf-typography theme="success">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum vulputate nisl, non commodo ligula maximus sed. Pellentesque quis ipsum felis</cf-typography>
    <cf-typography theme="warning">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum vulputate nisl, non commodo ligula maximus sed. Pellentesque quis ipsum felis</cf-typography>
    <cf-typography theme="danger">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum vulputate nisl, non commodo ligula maximus sed. Pellentesque quis ipsum felis</cf-typography>
    <cf-typography theme="dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum vulputate nisl, non commodo ligula maximus sed. Pellentesque quis ipsum felis</cf-typography>
    <cf-typography theme="light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum vulputate nisl, non commodo ligula maximus sed. Pellentesque quis ipsum felis</cf-typography>
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
