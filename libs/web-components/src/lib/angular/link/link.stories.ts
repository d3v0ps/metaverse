import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { SvgIconModule } from '../svg-icon/svg-icon.module';
import { LinkComponent } from './link.component';
import { LinkModule } from './link.module';

export default {
  title: 'Atoms/Link',
  decorators: [
    moduleMetadata({
      imports: [
        HttpClientModule,
        SvgIconModule.forRoot(),
        CommonModule,
        LinkModule,
      ],
    }),
  ],
  component: LinkComponent,
  parameters: {
    badges: [BADGE.BETA, 'css', 'angular'],
  },
} as Meta;

export const Normal: Story = (args) => ({
  props: args,
  template: `<cf-link [link]="{ title: title, url: url }"></cf-link>`,
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
Normal.argTypes = {
  title: {
    control: { type: 'text' },
  },
  url: {
    control: { type: 'text' },
  },
};
Normal.args = {
  title: 'I am a Link',
  url: 'https://www.google.com',
};
