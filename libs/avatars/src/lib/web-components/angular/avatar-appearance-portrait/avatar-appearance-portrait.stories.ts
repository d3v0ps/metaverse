import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { SvgIconModule } from '@central-factory/web-components/angular/svg-icon/svg-icon.module';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { glbAppearanceMock } from '../../../data/storybook/appearances';
import { AvatarAppearancePortraitComponent } from './avatar-appearance-portrait.component';

export default {
  title: 'Appearances/Portrait',
  component: AvatarAppearancePortraitComponent,
  decorators: [
    moduleMetadata({
      imports: [
        HttpClientModule,
        SvgIconModule.forRoot(),

        CommonModule,
        BemModule,
        SvgIconModule,
      ],
    }),
  ],
  argTypes: {
    appearance: {
      control: { type: 'object' },
    },
    showEmptyIcon: {
      control: { type: 'boolean' },
    },
  },
  parameters: {
    badges: [BADGE.STABLE],
  },
} as Meta<AvatarAppearancePortraitComponent>;

const Template: Story<AvatarAppearancePortraitComponent> = (
  args: AvatarAppearancePortraitComponent
) => ({
  props: args,
});

export const Normal = Template.bind({});
Normal.args = {
  appearance: glbAppearanceMock,
};

export const Empty = Template.bind({});
Empty.args = {
  appearance: undefined,
  showEmptyIcon: false,
};
