
const rootConfig = require('../../../../../../.style-dictionary/config');

module.exports = {
  ...rootConfig,
  source: ['libs/web-components/src/lib/themes/central-factory/tokens/**/*.yaml'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'dist/libs/central-factory/default/',
      files: [
        {
          format: 'css/variables',
          destination: 'variables.css'
        }
      ]
    }
  }
}
