import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { SvgIconModule } from '../svg-icon/svg-icon.module';
import { CommandBarModule } from './command-bar.module';

export default {
  title: 'Molecules/Command Bar',
  decorators: [
    moduleMetadata({
      imports: [
        HttpClientModule,
        SvgIconModule.forRoot(),
        CommonModule,
        SvgIconModule,
        CommandBarModule,
      ],
    }),
  ],
  parameters: {
    badges: [BADGE.BETA, 'css', 'angular'],
  },
} as Meta;

export const Normal: Story = () => ({
  template: `<cf-command-bar [fullLength]="true"></cf-command-bar>`,
});

export const Small: Story = () => ({
  template: `
  <cf-command-bar [fullLength]="true" size="xs"></cf-command-bar>
  `,
});

export const WithSubmitButton: Story = () => ({
  template: `
  <cf-command-bar [fullLength]="true" [showSubmitButton]="true"></cf-command-bar>
  `,
});
