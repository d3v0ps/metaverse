
import { addParameters } from '@storybook/angular';

require('../../../.storybook/preview');


addParameters({
  options: {
    storySort: {
      order: ['Atoms', 'Molecules', 'Organisms', 'Templates'],
    }
  }
});
