
import { addParameters } from '@storybook/angular';

require('../../../.storybook/preview');


addParameters({
  options: {
    storySort: {
      order: ['Web Components', ['Typography', 'Buttons'], 'Angular', ['*', '[Obsolete] Navbars']]
    }
  }
});
