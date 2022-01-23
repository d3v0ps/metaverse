import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { SvgIconModule } from '@central-factory/web-components/angular/svg-icon/svg-icon.module';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { appearancesMocks } from '../../../data/storybook/appearances';
import { AvatarAppearancesCarouselModule } from '../avatar-appearances-carousel/avatar-appearances-carousel.module';
import { AvatarAppearancesComponent } from './avatar-appearances.component';

export default {
  title: 'Appearances/[Deprecated] List',
  component: AvatarAppearancesComponent,
  decorators: [
    moduleMetadata({
      imports: [
        HttpClientModule,
        SvgIconModule.forRoot(),

        CommonModule,
        ReactiveFormsModule,
        BemModule,
        AvatarAppearancesCarouselModule,
      ],
    }),
  ],
  parameters: {
    badges: [BADGE.DEPRECATED],
  },
} as Meta<AvatarAppearancesComponent>;

const Template: Story<AvatarAppearancesComponent> = (
  args: AvatarAppearancesComponent
) => ({
  component: AvatarAppearancesComponent,
  props: args,
});

export const Filled = Template.bind({});
Filled.args = {
  appearances: appearancesMocks,
};

export const Empty = Template.bind({});
Empty.args = {
  appearances: [],
};
