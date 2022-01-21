import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { SvgIconModule } from '../angular/svg-icon/svg-icon.module';

export default {
  title: 'Web Components/Badges',
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
    badges: [BADGE.BETA],
  },
} as Meta;

export const Normal: Story = () => ({
  template: `<span class="badge">I'm a Badge</span>`,
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

export const Uppercase: Story = () => ({
  template: `<span class="badge badge--uppercase">I'm a Badge</span>`,
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
