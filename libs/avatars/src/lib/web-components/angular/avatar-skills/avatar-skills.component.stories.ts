import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { SvgIconModule } from '@central-factory/web-components/angular/svg-icon/svg-icon.module';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { skillsMocks } from '../../../mocks/skills';
import { AvatarSkillsComponent } from './avatar-skills.component';

export default {
  title: 'Skills/Overview',
  component: AvatarSkillsComponent,
  decorators: [
    moduleMetadata({
      imports: [
        HttpClientModule,
        SvgIconModule.forRoot(),

        CommonModule,
        ReactiveFormsModule,
        BemModule,
        FlexLayoutModule,
        SvgIconModule,
      ],
    }),
  ],
} as Meta<AvatarSkillsComponent>;

const Template: Story<AvatarSkillsComponent> = (
  args: AvatarSkillsComponent
) => ({
  component: AvatarSkillsComponent,
  props: args,
});

export const Empty = Template.bind({});
Empty.args = {
  skills: [],
};

export const Filled = Template.bind({});
Filled.args = {
  skills: skillsMocks,
};
