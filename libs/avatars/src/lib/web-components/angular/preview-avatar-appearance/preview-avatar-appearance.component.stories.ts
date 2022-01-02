import { CommonModule } from '@angular/common';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { gltfAppearanceMock } from '../../../data/storybook/appearances';
import { PreviewAvatarAppearanceComponent } from './preview-avatar-appearance.component';

export default {
  title: 'Appearances/Preview',
  component: PreviewAvatarAppearanceComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, BemModule],
    }),
  ],
} as Meta<PreviewAvatarAppearanceComponent>;

const Template: Story<PreviewAvatarAppearanceComponent> = (
  args: PreviewAvatarAppearanceComponent
) => ({
  component: PreviewAvatarAppearanceComponent,
  props: args,
});

export const Empty = Template.bind({});
Empty.args = {
  appearance: undefined,
};

export const Filled = Template.bind({});
Filled.args = {
  appearance: gltfAppearanceMock,
};
