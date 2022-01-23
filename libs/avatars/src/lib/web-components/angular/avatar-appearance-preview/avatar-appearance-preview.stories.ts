import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SvgIconModule } from '@central-factory/web-components/angular/svg-icon/svg-icon.module';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import {
  glbAppearanceMock,
  imageAppearanceMock,
} from '../../../data/storybook/appearances';
import { AvatarAppearancePreviewComponent } from './avatar-appearance-preview.component';
import { AvatarAppearancePreviewImageModule } from './components/avatar-appearance-preview-image/avatar-appearance-preview-image.module';
import { AvatarAppearancePreviewModelViewerModule } from './components/avatar-appearance-preview-model-viewer/avatar-appearance-preview-model-viewer.module';

export default {
  title: 'Appearances/Preview',
  component: AvatarAppearancePreviewComponent,
  decorators: [
    moduleMetadata({
      imports: [
        HttpClientModule,
        SvgIconModule.forRoot(),

        CommonModule,

        AvatarAppearancePreviewModelViewerModule,
        AvatarAppearancePreviewImageModule,
      ],
    }),
  ],
  argTypes: {
    appearance: {
      control: { type: 'object' },
      height: { type: 'string' },
      width: { type: 'string' },
    },
  },
  parameters: {
    badges: [BADGE.STABLE],
  },
} as Meta<AvatarAppearancePreviewComponent>;

const Template: Story<AvatarAppearancePreviewComponent> = (
  args: AvatarAppearancePreviewComponent
) => ({
  props: args,
});

export const GLBModel = Template.bind({});
GLBModel.args = {
  appearance: glbAppearanceMock,
  width: '200px',
};

export const Image = Template.bind({});
Image.args = {
  appearance: imageAppearanceMock,
  width: '200px',
};
Image.parameters = {
  badges: [BADGE.NEEDS_REVISION],
};
