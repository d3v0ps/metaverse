import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { SvgIconModule } from '../svg-icon/svg-icon.module';
import { TabsetModule } from './tabset.module';

export default {
  title: 'Organisms/Tabset',
  decorators: [
    moduleMetadata({
      imports: [
        HttpClientModule,
        SvgIconModule.forRoot(),
        CommonModule,
        TabsetModule,
      ],
    }),
  ],
  parameters: {
    badges: [BADGE.STABLE, 'angular'],
  },
} as Meta;

export const Normal: Story = () => ({
  template: `
    <cf-tabset>
      <cf-tab
        title="Tab title"
        icon="assets/icons/mdi/magnify.svg"
      >
        The tab content
      </cf-tab>
      <cf-tab
        title="Tab 2"
        icon="assets/icons/mdi/home.svg"
      >
        The tab 2 content
      </cf-tab>
    </cf-tabset>
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
