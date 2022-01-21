import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { BemModule } from '../bem/bem.module';
import { SvgIconModule } from '../svg-icon/svg-icon.module';
import { NavbarComponent } from './navbar.component';

export default {
  title: 'Angular/[Obsolete] Navbars',
  component: NavbarComponent,
  decorators: [
    moduleMetadata({
      imports: [
        HttpClientModule,
        SvgIconModule.forRoot(),

        CommonModule,
        BemModule,
        SvgIconModule,
      ],
    }),
  ],
  argTypes: {
    environment: {
      control: { type: 'object' },
    },
    titleClick: {
      action: 'titleClick',
    },
  },
  parameters: {
    badges: [BADGE.OBSOLETE],
  },
} as Meta;

const Template: Story<NavbarComponent> = (args: NavbarComponent) => ({
  props: args,
});

export const Normal = Template.bind({});
Normal.args = {
  environment: {
    webUrl: '',
    /** Url with the Metaverse's documentation site */
    documentationUrl: '',
    /** Url with the Metaverse's blog site */
    blogUrl: '',
    /** Url with the Metaverse's developers site */
    developersUrl: '',
  },
  title: 'My App',
};
