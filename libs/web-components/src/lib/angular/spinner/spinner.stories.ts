import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { SvgIconModule } from '../svg-icon/svg-icon.module';
import { SpinnerModule } from './spinner.module';

export default {
  title: 'Atoms/Spinner',
  decorators: [
    moduleMetadata({
      imports: [
        HttpClientModule,
        SvgIconModule.forRoot(),
        CommonModule,
        SpinnerModule,
      ],
    }),
  ],
  parameters: {
    badges: [BADGE.STABLE, 'css', 'angular'],
  },
} as Meta;

export const Normal: Story = () => ({
  template: `
    <cf-spinner></cf-spinner>
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
