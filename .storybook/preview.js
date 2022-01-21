import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { addParameters } from '@storybook/angular';

addParameters({
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
  },
});
