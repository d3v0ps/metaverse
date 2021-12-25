
const rootConfig = require('../../../../../../.style-dictionary/config');

module.exports = {
  ...rootConfig,
  source: ['libs/web-components/src/lib/themes/bubbles/tokens/**/*.yaml'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'dist/libs/themes/bubbles/css/',
      files: [
        {
          format: 'css/variables',
          destination: 'variables.css'
        }
      ]
    }
  }
}
