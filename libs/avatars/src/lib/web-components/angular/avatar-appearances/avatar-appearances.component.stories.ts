import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { SvgIconModule } from '@central-factory/web-components/angular/svg-icon/svg-icon.module';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { appearancesMocks } from '../../../data/storybook/appearances';
import { PreviewAvatarAppearanceModule } from '../preview-avatar-appearance/preview-avatar-appearance.module';
import { AvatarAppearancesComponent } from './avatar-appearances.component';

export default {
  title: 'Appearances/Overview',
  component: AvatarAppearancesComponent,
  decorators: [
    moduleMetadata({
      imports: [
        HttpClientModule,
        SvgIconModule.forRoot(),

        CommonModule,
        ReactiveFormsModule,
        BemModule,
        PreviewAvatarAppearanceModule,
      ],
    }),
  ],
} as Meta<AvatarAppearancesComponent>;

const Template: Story<AvatarAppearancesComponent> = (
  args: AvatarAppearancesComponent
) => ({
  component: AvatarAppearancesComponent,
  props: args,
});

export const Empty = Template.bind({});
Empty.args = {
  appearances: [],
};

export const Filled = Template.bind({});
Filled.args = {
  appearances: appearancesMocks,
};
