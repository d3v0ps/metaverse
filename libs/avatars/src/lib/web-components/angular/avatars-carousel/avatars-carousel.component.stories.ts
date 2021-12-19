import { CommonModule } from '@angular/common';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { avatarsMocks } from '../../../mocks/avatars';
import { AvatarsCarouselComponent } from './avatars-carousel.component';

export default {
  title: 'Avatars/Carousel',
  component: AvatarsCarouselComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, BemModule],
    }),
  ],
} as Meta<AvatarsCarouselComponent>;

const Template: Story<AvatarsCarouselComponent> = (
  args: AvatarsCarouselComponent
) => ({
  component: AvatarsCarouselComponent,
  props: args,
});

export const Empty = Template.bind({});
Empty.args = {
  avatars: [],
};

export const Filled = Template.bind({});
Filled.args = {
  avatars: avatarsMocks,
};
