import { HttpClientModule } from '@angular/common/http';
import { AvatarGender } from '@central-factory/avatars/models/__generated__/types';
import { EssentialsModule } from '@central-factory/web-components/angular/essentials.module';
import { SvgIconModule } from '@central-factory/web-components/angular/svg-icon/svg-icon.module';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { AvatarGenderComponent } from './avatar-gender.component';

export default {
  title: 'Atoms/Avatar Gender',
  component: AvatarGenderComponent,
  decorators: [
    moduleMetadata({
      imports: [HttpClientModule, SvgIconModule.forRoot(), EssentialsModule],
    }),
  ],
  argTypes: {
    gender: {
      control: 'select',
      options: [AvatarGender.Female, AvatarGender.Male],
    },
  },
  parameters: {
    badges: [BADGE.STABLE, 'css', 'angular'],
  },
} as Meta<AvatarGenderComponent>;

const Template: Story<AvatarGenderComponent> = (
  args: AvatarGenderComponent
) => ({
  component: AvatarGenderComponent,
  props: args,
});

export const Icon = Template.bind({});
Icon.args = {
  gender: AvatarGender.Female,
  showIcon: true,
  showLabel: false,
};

export const Label = Template.bind({});
Label.args = {
  gender: AvatarGender.Female,
  showIcon: false,
  showLabel: true,
};

export const Full = Template.bind({});
Full.args = {
  gender: AvatarGender.Female,
  showIcon: true,
  showLabel: true,
};
