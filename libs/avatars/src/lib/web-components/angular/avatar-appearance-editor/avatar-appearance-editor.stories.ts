import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { ColorPickerSelectModule } from '@central-factory/web-components/angular/color-picker-select/color-picker-select.module';
import { PopoverModule } from '@central-factory/web-components/angular/popover/popover.module';
import { SvgIconModule } from '@central-factory/web-components/angular/svg-icon/svg-icon.module';
import { TabsetModule } from '@central-factory/web-components/angular/tabset/tabset.module';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import {
  glbAppearanceMock,
  imageAppearanceMock,
} from '../../../data/storybook/appearances';
import { AvatarAppearanceCardModule } from '../avatar-appearance-card/avatar-appearance-card.module';
import { AvatarAppearancePortraitModule } from '../avatar-appearance-portrait/avatar-appearance-portrait.module';
import { AvatarAppearanceEditorComponent } from './avatar-appearance-editor.component';
import { AvatarAppearanceInfoFormComponent } from './components/avatar-appearance-info-form/avatar-appearance-info-form.component';
import { AvatarAppearanceModelFormComponent } from './components/avatar-appearance-model-form/avatar-appearance-model-form.component';
import { AvatarAppearancePortraitFormComponent } from './components/avatar-appearance-portrait-form/avatar-appearance-portrait-form.component';

export default {
  title: 'Appearances/Editor',
  component: AvatarAppearanceEditorComponent,
  decorators: [
    moduleMetadata({
      imports: [
        HttpClientModule,
        SvgIconModule.forRoot(),

        CommonModule,
        BemModule,
        SvgIconModule,
        TabsetModule,
        PopoverModule,
        ColorPickerSelectModule,
        FormsModule,
        ReactiveFormsModule,
        AvatarAppearanceCardModule,
        AvatarAppearancePortraitModule,
      ],
      declarations: [
        AvatarAppearanceInfoFormComponent,
        AvatarAppearanceModelFormComponent,
        AvatarAppearancePortraitFormComponent,
      ],
    }),
  ],
  argTypes: {
    appearance: {
      control: { type: 'object' },
    },
  },
  parameters: {
    badges: [BADGE.STABLE],
  },
} as Meta<AvatarAppearanceEditorComponent>;

const Template: Story<AvatarAppearanceEditorComponent> = (
  args: AvatarAppearanceEditorComponent
) => ({
  props: args,
});

export const GLBModel = Template.bind({});
GLBModel.args = {
  appearance: glbAppearanceMock,
};

export const Image = Template.bind({});
Image.args = {
  appearance: imageAppearanceMock,
};
Image.parameters = {
  badges: [BADGE.NEEDS_REVISION],
};

export const Empty = Template.bind({});
