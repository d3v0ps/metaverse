
import { addParameters } from '@storybook/angular';

require('../../../.storybook/preview');


addParameters({
  options: {
    storySort: {
      order: ['Atoms', ['Color', 'Typography', 'Icon', 'Badge', 'Button', 'Link', 'Media'], 'Molecules', 'Organisms', ['*', '[Obsolete] Navbar'], 'Templates'],
    }
  }
});
