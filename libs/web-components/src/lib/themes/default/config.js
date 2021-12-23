
const rootConfig = require('../../../../../../.style-dictionary/config');

module.exports = {
  ...rootConfig,
  source: ['libs/web-components/src/lib/themes/default/tokens/**/*.yaml'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'dist/libs/themes/default/css/',
      files: [
        {
          format: 'css/variables',
          destination: 'variables.css'
        }
      ]
    },
    scss: {
      transformGroup: 'css',
      buildPath: 'libs/web-components/src/lib/styles/web-components/',
      files: [
        {
          format: 'css/variables',
          destination: '_theme.scss'
        }
      ]
    }
  }
}
