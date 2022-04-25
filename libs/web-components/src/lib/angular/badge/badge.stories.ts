import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { SvgIconModule } from '../svg-icon/svg-icon.module';
import { BadgeComponent } from './badge.component';
import { BadgeModule } from './badge.module';

export default {
  title: 'Atoms/Badge',
  decorators: [
    moduleMetadata({
      imports: [
        HttpClientModule,
        SvgIconModule.forRoot(),
        CommonModule,
        SvgIconModule,
        BadgeModule,
      ],
    }),
  ],
  component: BadgeComponent,
  parameters: {
    badges: [BADGE.BETA, 'css', 'angular'],
  },
} as Meta;

const BadgeStory: Story = (args) => ({
  props: args,
  template: `<cf-badge [uppercase]="uppercase">{{text}}</cf-badge>`,
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
BadgeStory.argTypes = {
  text: {
    control: { type: 'text' },
  },
  uppercase: {
    control: { type: 'boolean' },
  },
};

export const Normal = BadgeStory.bind({});
Normal.args = {
  text: 'I am a Badge',
  uppercase: false,
};

export const Uppercase = BadgeStory.bind({});
Uppercase.args = {
  text: 'I am a Badge',
  uppercase: true,
};
