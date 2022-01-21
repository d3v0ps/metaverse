import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { Meta, moduleMetadata } from '@storybook/angular';
import { SvgIconModule } from '../angular/svg-icon/svg-icon.module';

export default {
  title: 'Web Components/Typography',
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
    badges: [BADGE.NEEDS_REVISION],
  },
} as Meta;

export const Headings = () => ({
  template: `
    <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum vulputate nisl, non commodo ligula maximus sed. Pellentesque quis ipsum felis</h1>
    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum vulputate nisl, non commodo ligula maximus sed. Pellentesque quis ipsum felis</h2>
    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum vulputate nisl, non commodo ligula maximus sed. Pellentesque quis ipsum felis</h3>
    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum vulputate nisl, non commodo ligula maximus sed. Pellentesque quis ipsum felis</h4>
    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum vulputate nisl, non commodo ligula maximus sed. Pellentesque quis ipsum felis</h5>
    <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum vulputate nisl, non commodo ligula maximus sed. Pellentesque quis ipsum felis</h6>
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
    <p class="text text--primary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum vulputate nisl, non commodo ligula maximus sed. Pellentesque quis ipsum felis</p>
    <p class="text text--secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum vulputate nisl, non commodo ligula maximus sed. Pellentesque quis ipsum felis</p>
    <p class="text text--info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum vulputate nisl, non commodo ligula maximus sed. Pellentesque quis ipsum felis</p>
    <p class="text text--success">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum vulputate nisl, non commodo ligula maximus sed. Pellentesque quis ipsum felis</p>
    <p class="text text--warning">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum vulputate nisl, non commodo ligula maximus sed. Pellentesque quis ipsum felis</p>
    <p class="text text--danger">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum vulputate nisl, non commodo ligula maximus sed. Pellentesque quis ipsum felis</p>
    <p class="text text--dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum vulputate nisl, non commodo ligula maximus sed. Pellentesque quis ipsum felis</p>
    <p class="text text--light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum vulputate nisl, non commodo ligula maximus sed. Pellentesque quis ipsum felis</p>
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
