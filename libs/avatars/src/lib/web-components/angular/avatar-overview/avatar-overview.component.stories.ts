import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { SvgIconModule } from '@central-factory/web-components/angular/svg-icon/svg-icon.module';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { avatarMock1 } from '../../../data/storybook/avatars';
import { AvatarOverviewComponent } from './avatar-overview.component';

export default {
  title: 'Avatars/Overview',
  component: AvatarOverviewComponent,
  decorators: [
    moduleMetadata({
      imports: [
        HttpClientModule,
        SvgIconModule.forRoot(),

        CommonModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        BemModule,
        SvgIconModule,
      ],
    }),
  ],
} as Meta<AvatarOverviewComponent>;

const Template: Story<AvatarOverviewComponent> = (
  args: AvatarOverviewComponent
) => ({
  component: AvatarOverviewComponent,
  props: args,
});

export const Empty = Template.bind({});
Empty.args = {
  avatar: undefined,
};

export const Filled = Template.bind({});
Filled.args = {
  avatar: avatarMock1,
};
