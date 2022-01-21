import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { BemModule } from '../bem/bem.module';
import { SpinnerModule } from '../spinner/spinner.module';
import { SvgIconModule } from '../svg-icon/svg-icon.module';
import { SplashScreenComponent } from './splash-screen.component';

export default {
  title: 'Angular/Splash Screens',
  component: SplashScreenComponent,
  decorators: [
    moduleMetadata({
      imports: [
        HttpClientModule,
        SvgIconModule.forRoot(),

        CommonModule,
        BemModule,
        SpinnerModule,
        SvgIconModule,
      ],
    }),
  ],
  argTypes: {
    loadingTexts: {
      control: { type: 'object' },
    },
    splashScreenHide: {
      action: 'splashScreenHide',
    },
  },
  parameters: {
    badges: [BADGE.STABLE],
  },
} as Meta;

const Template: Story<SplashScreenComponent> = (
  args: SplashScreenComponent
) => ({
  props: args,
});

export const Normal = Template.bind({});
Normal.args = {
  backgroundColor: 'var(--color-base-primary-medium)',
  title: 'Splash Screen Title',
  welcomeMessage: 'Welcome to the app',
  logo: 'assets/icons/mdi/home.svg',
  loadingTexts: [
    'Example Loading Text 1',
    'Example Loading Text 2',
    'Example Loading Text 3',
  ],
  displayLoadingTime: 10000,
  displayWelcomeTime: 999999,
};
