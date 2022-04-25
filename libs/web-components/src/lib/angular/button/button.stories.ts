import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { SvgIconModule } from '../svg-icon/svg-icon.module';
import { ButtonComponent } from './button.component';
import { ButtonModule } from './button.module';

export default {
  title: 'Atoms/Button',
  decorators: [
    moduleMetadata({
      imports: [
        HttpClientModule,
        SvgIconModule.forRoot(),
        CommonModule,
        ButtonModule,
      ],
    }),
  ],
  component: ButtonComponent,
  parameters: {
    badges: [BADGE.STABLE, 'css', 'angular'],
  },
} as Meta;

const ButtonStory: Story = (args) => ({
  props: args,
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
ButtonStory.argTypes = {
  text: {
    control: { type: 'text' },
  },
  icon: {
    control: { type: 'text' },
  },
  size: {
    control: { type: 'text' },
  },
  uppercase: {
    control: { type: 'boolean' },
  },
  active: {
    control: { type: 'boolean' },
  },
  disabled: {
    control: { type: 'boolean' },
  },
  fab: {
    control: { type: 'boolean' },
  },
};

export const Normal = ButtonStory.bind({});
Normal.args = {
  text: 'Normal',
  icon: null,
  size: null,
  uppercase: false,
  active: false,
  disabled: false,
  fab: false,
};
Normal.argTypes = {
  ...ButtonStory.argTypes,
};

export const Icons: Story = () => ({
  template: `
    <cf-button icon="assets/icons/mdi/magnify.svg" text="Icon with Text"></cf-button>
    <cf-button icon="assets/icons/mdi/magnify.svg"></cf-button>
    <cf-button icon="assets/icons/mdi/magnify.svg" [fab]="true"></cf-button>
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

export const States: Story = () => ({
  template: `
    <cf-button [active]="true" text="Active"></cf-button>
    <cf-button [disabled]="true" text="Disabled"></cf-button>
    <cf-button [uppercase]="true" text="Uppercase"></cf-button>
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

export const Sizes: Story = () => ({
  template: `
    <cf-button size="small" text="Small"></cf-button>
    <cf-button size="small" text="Small with Icon" icon="assets/icons/mdi/magnify.svg"></cf-button>
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
Sizes.parameters = {
  badges: [BADGE.NEEDS_REVISION],
};

export const Themes: Story = () => ({
  template: `
    <cf-button theme="primary" text="Primary"></cf-button>
    <cf-button theme="secondary" text="Secondary"></cf-button>
    <cf-button theme="success" text="Success"></cf-button>
    <cf-button theme="warning" text="Warning"></cf-button>
    <cf-button theme="danger" text="Danger"></cf-button>
    <cf-button theme="info" text="Info"></cf-button>
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
