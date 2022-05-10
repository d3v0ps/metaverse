import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { LinkModule } from '../link/link.module';
import { SvgIconModule } from './svg-icon.module';

export default {
  title: 'Atoms/Icon',
  decorators: [
    moduleMetadata({
      imports: [
        HttpClientModule,
        SvgIconModule.forRoot(),
        CommonModule,
        SvgIconModule,
        LinkModule,
      ],
    }),
  ],
  parameters: {
    badges: [BADGE.STABLE, 'css', 'angular'],
  },
} as Meta;

export const Normal: Story = () => ({
  template: `
    <h2>SVG Icon</h2>
    <cf-svg-icon [svgStyle]="{ width: '24px', height: '24px', margin: '0 0.5rem' }"
      src="assets/logo.svg">
    </cf-svg-icon>
  `,
  styles: [
    `
      h2 {
        margin-block-start: 0;
      }
    `,
  ],
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
      src="assets/icons/mdi/account.svg">
    </cf-svg-icon>
    <cf-svg-icon [svgStyle]="{ width: '24px', height: '24px', fill: 'var(--color-base-light-medium)', margin: '0 0.5rem' }"
      src="assets/icons/mdi/home.svg">
    </cf-svg-icon>
    <div class="more-info">
      <cf-link [link]="{
        title: 'See all the icons available here',
        sourceUrl: 'https://materialdesignicons.com/'
      }"></cf-link>
    </div>
  `,
  styles: [
    `
      h2 {
        margin-block-start: 0;
      }
      .more-info {
        margin-top: 1rem;
        display: flex;
      }
    `,
  ],
});

export const Codicons: Story = () => ({
  template: `
    <h2>
      <a href="https://microsoft.github.io/vscode-codicons/dist/codicon.html" target="_blank">Codicons</a>
    </h2>
    <cf-svg-icon [svgStyle]="{ width: '24px', height: '24px', fill: 'var(--color-base-light-medium)', margin: '0 0.5rem' }"
      src="assets/icons/codicons/symbol-class.svg">
    </cf-svg-icon>
    <cf-svg-icon [svgStyle]="{ width: '24px', height: '24px', fill: 'var(--color-base-light-medium)', margin: '0 0.5rem' }"
      src="assets/icons/codicons/symbol-ruler.svg">
    </cf-svg-icon>
    <cf-svg-icon [svgStyle]="{ width: '24px', height: '24px', fill: 'var(--color-base-light-medium)', margin: '0 0.5rem' }"
      src="assets/icons/codicons/symbol-misc.svg">
    </cf-svg-icon>
    <div class="more-info">
      <cf-link [link]="{
        title: 'See all the icons available here',
        sourceUrl: 'https://microsoft.github.io/vscode-codicons/dist/codicon.html'
      }"></cf-link>
    </div>
  `,
  styles: [
    `
      h2 {
        margin-block-start: 0;
      }
      .more-info {
        margin-top: 1rem;
        display: flex;
      }
    `,
  ],
});

export const FluentIcons: Story = () => ({
  template: `
    <h2>
      <a href="https://github.com/misolori/vscode-fluent-icons" target="_blank">Fluent Icons</a>
    </h2>
    <cf-svg-icon [svgStyle]="{ width: '24px', height: '24px', fill: 'var(--color-base-light-medium)', margin: '0 0.5rem' }"
      src="assets/icons/fluent-icons/symbol-class.svg">
    </cf-svg-icon>
    <cf-svg-icon [svgStyle]="{ width: '24px', height: '24px', fill: 'var(--color-base-light-medium)', margin: '0 0.5rem' }"
      src="assets/icons/fluent-icons/symbol-ruler.svg">
    </cf-svg-icon>
    <cf-svg-icon [svgStyle]="{ width: '24px', height: '24px', fill: 'var(--color-base-light-medium)', margin: '0 0.5rem' }"
      src="assets/icons/fluent-icons/symbol-misc.svg">
    </cf-svg-icon>
    <div class="more-info">
      <cf-link [link]="{
        title: 'See all the icons available here',
        sourceUrl: 'https://github.com/misolori/vscode-fluent-icons'
      }"></cf-link>
    </div>
  `,
  styles: [
    `
      h2 {
        margin-block-start: 0;
      }
      .more-info {
        margin-top: 1rem;
        display: flex;
      }
    `,
  ],
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
    <div class="more-info">
      <cf-link [link]="{
        title: 'See all the icons available here',
        sourceUrl: 'https://simpleicons.org/'
      }"></cf-link>
    </div>
  `,
  styles: [
    `
      h2 {
        margin-block-start: 0;
      }
      .more-info {
        margin-top: 1rem;
        display: flex;
      }
    `,
  ],
});
