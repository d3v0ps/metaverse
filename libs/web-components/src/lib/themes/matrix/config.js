
const rootConfig = require('../../../../../../.style-dictionary/config');

module.exports = {
  ...rootConfig,
  source: ['libs/web-components/src/lib/themes/matrix/tokens/**/*.yaml'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'dist/libs/themes/matrix/css/',
      files: [
        {
          format: 'css/variables',
          destination: 'variables.css'
        }
      ]
    }
  }
}
