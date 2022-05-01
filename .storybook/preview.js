import bubbles from '!!style-loader?injectType=lazyStyleTag!css-loader!../dist/libs/themes/bubbles/variables.css';
import matrix from '!!style-loader?injectType=lazyStyleTag!css-loader!../dist/libs/themes/matrix/variables.css';
import metaverse from '!!style-loader?injectType=lazyStyleTag!css-loader!../dist/libs/themes/metaverse/variables.css';
import cssVariablesTheme from '@etchteam/storybook-addon-css-variables-theme';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { addDecorator, addParameters } from '@storybook/angular';

addDecorator(cssVariablesTheme);

addParameters({
  actions: {
    handles: ['click button'],
  },
  cssVariables: {
    files: {
      'Metaverse': metaverse,
      'Matrix': matrix,
      'Bubbles': bubbles,
    },
    defaultTheme: 'Metaverse'
  },
  badgesConfig: {
    [BADGE.STABLE]: {
      styles: {
        backgroundColor: '#4caf50',
        borderColor: '#2e7d32',
        color: '#2e7d32',
      },
      title: 'Stable',
    },
    [BADGE.BETA]: {
      styles: {
        backgroundColor: '#ff9800',
        borderColor: '#ef6c00',
        color: '#ef6c00',
      },
      title: 'Release Candidate',
    },
    [BADGE.DEPRECATED]: {
      styles: {
        backgroundColor: '#f44336',
        borderColor: '#fcebea',
        color: '#fcebea',
      },
      title: 'Deprecated',
    },
    [BADGE.OBSOLETE]: {
      styles: {
        backgroundColor: '#f44336',
        borderColor: '#fcebea',
        color: '#fcebea',
      },
      title: 'Obsolete',
    },
    [BADGE.NEEDS_REVISION]: {
      styles: {
        backgroundColor: '#2196f3',
        borderColor: '#0d47a1',
        color: '#0d47a1',
      },
      title: 'Draft',
    },
    css: {
      styles: {
        backgroundColor: '#29A8E0',
        borderColor: '#0070BA',
        color: '#0070BA',
      },
      title: 'CSS',
    },
    angular: {
      styles: {
        backgroundColor: '#DD0031',
        borderColor: '#DD0031',
        color: '#fff',
      },
      title: 'Angular',
    },
    react: {
      styles: {
        backgroundColor: '#62dafc',
        borderColor: '#62dafc',
        color: '#282c35',
      },
      title: 'React',
    },
    phaser: {
      styles: {
        backgroundColor: '#913c8c',
        borderColor: '#913c8c',
        color: '#fff',
      },
      title: 'Phaser',
    }
  },
});
