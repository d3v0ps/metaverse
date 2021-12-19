import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { SvgIconModule } from '@central-factory/web-components/angular/svg-icon/svg-icon.module';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { scopesMocks } from '../../../mocks/scopes';
import { AvatarScopesComponent } from './avatar-scopes.component';

export default {
  title: 'Scopes/Overview',
  component: AvatarScopesComponent,
  decorators: [
    moduleMetadata({
      imports: [
        HttpClientModule,
        SvgIconModule.forRoot(),

        CommonModule,
        ReactiveFormsModule,
        BemModule,
        SvgIconModule,
      ],
    }),
  ],
} as Meta<AvatarScopesComponent>;

const Template: Story<AvatarScopesComponent> = (
  args: AvatarScopesComponent
) => ({
  component: AvatarScopesComponent,
  props: args,
});

export const Empty = Template.bind({});
Empty.args = {
  scopes: [],
};

export const Filled = Template.bind({});
Filled.args = {
  scopes: scopesMocks,
};
