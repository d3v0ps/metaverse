import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { SvgIconModule } from './svg-icon.module';

export default {
  title: 'Angular/Icons',
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

export const Normal: Story = () => ({
  template: `
    <h2>SVG Icon</h2>
    <cf-svg-icon [svgStyle]="{ width: '24px', height: '24px', margin: '0 0.5rem' }"
      src="assets/logo.svg">
    </cf-svg-icon>
  `,
});

export const MaterialDesignIcons: Story = () => ({
  template: `
    <h2>
      <a href="https://materialdesignicons.com/" target="_blank">Material Design Icons</a>
    </h2>
    <cf-svg-icon [svgStyle]="{ width: '24px', height: '24px', fill: 'var(--color-base-light-medium)', margin: '0 0.5rem' }"
      src="assets/icons/mdi/magnify.svg">
    </cf-svg-icon>
    <cf-svg-icon [svgStyle]="{ width: '24px', height: '24px', fill: 'var(--color-base-light-medium)', margin: '0 0.5rem' }"
      src="assets/icons/mdi/acocount.svg">
    </cf-svg-icon>
    <cf-svg-icon [svgStyle]="{ width: '24px', height: '24px', fill: 'var(--color-base-light-medium)', margin: '0 0.5rem' }"
      src="assets/icons/mdi/home.svg">
    </cf-svg-icon>
  `,
});

export const SimpleIcons: Story = () => ({
  template: `
    <h2>
      <a href="https://simpleicons.org/" target="_blank">Simple Icons</a>
    </h2>
    <cf-svg-icon [svgStyle]="{ width: '24px', height: '24px', fill: 'var(--color-base-light-medium)', margin: '0 0.5rem' }"
      src="assets/icons/simple-icons/typescript.svg">
    </cf-svg-icon>
    <cf-svg-icon [svgStyle]="{ width: '24px', height: '24px', fill: 'var(--color-base-light-medium)', margin: '0 0.5rem' }"
      src="assets/icons/simple-icons/angular.svg">
    </cf-svg-icon>
    <cf-svg-icon [svgStyle]="{ width: '24px', height: '24px', fill: 'var(--color-base-light-medium)', margin: '0 0.5rem' }"
      src="assets/icons/simple-icons/sass.svg">
    </cf-svg-icon>
    <cf-svg-icon [svgStyle]="{ width: '24px', height: '24px', fill: 'var(--color-base-light-medium)', margin: '0 0.5rem' }"
      src="assets/icons/simple-icons/angular.svg">
    </cf-svg-icon>
    <cf-svg-icon [svgStyle]="{ width: '24px', height: '24px', fill: 'var(--color-base-light-medium)', margin: '0 0.5rem' }"
      src="assets/icons/simple-icons/electron.svg">
    </cf-svg-icon>
    <cf-svg-icon [svgStyle]="{ width: '24px', height: '24px', fill: 'var(--color-base-light-medium)', margin: '0 0.5rem' }"
      src="assets/icons/simple-icons/reactivex.svg">
    </cf-svg-icon>
    <cf-svg-icon [svgStyle]="{ width: '24px', height: '24px', fill: 'var(--color-base-light-medium)' }"
      src="assets/icons/simple-icons/rxdb.svg">
    </cf-svg-icon>
  `,
});
