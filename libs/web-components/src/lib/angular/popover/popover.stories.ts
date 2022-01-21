import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { SvgIconModule } from '../svg-icon/svg-icon.module';
import { PopoverModule } from './popover.module';

export default {
  title: 'Angular/Popovers',
  decorators: [
    moduleMetadata({
      imports: [
        HttpClientModule,
        SvgIconModule.forRoot(),
        CommonModule,
        PopoverModule,
      ],
    }),
  ],
  parameters: {
    badges: [BADGE.NEEDS_REVISION],
  },
} as Meta;

export const OnHover: Story = () => ({
  template: `
    <cf-popover-content #popoverContent [closeOnClickOutside]="true">
      Popover content
    </cf-popover-content>

    <button class="button"
      [cfPopover]="popoverContent">
      Hover to popover
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

export const OnClick: Story = () => ({
  template: `
    <cf-popover-content #popoverContent [closeOnClickOutside]="true">
      Popover content
    </cf-popover-content>

    <button class="button"
      [cfPopover]="popoverContent"
      [popoverOnHover]="false">
      Click to popover
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
