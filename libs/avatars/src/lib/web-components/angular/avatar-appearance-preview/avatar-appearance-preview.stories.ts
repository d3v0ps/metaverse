import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { gltfAppearanceMock } from '../../../data/storybook/appearances';
import { AvatarAppearancePreviewComponent } from './avatar-appearance-preview.component';
import { AvatarAppearancePreviewImageModule } from './components/avatar-appearance-preview-image/avatar-appearance-preview-image.module';
import { AvatarAppearancePreviewModelViewerModule } from './components/avatar-appearance-preview-model-viewer/avatar-appearance-preview-model-viewer.module';

export default {
  title: 'Appearances/Preview',
  component: AvatarAppearancePreviewComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        AvatarAppearancePreviewModelViewerModule,
        AvatarAppearancePreviewImageModule,
      ],
    }),
  ],
} as Meta<AvatarAppearancePreviewComponent>;

const Template: Story<AvatarAppearancePreviewComponent> = (
  args: AvatarAppearancePreviewComponent
) => ({
  component: AvatarAppearancePreviewComponent,
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
