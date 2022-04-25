
const rootConfig = require('../../../../../../.style-dictionary/config');

module.exports = {
  ...rootConfig,
  source: ['libs/web-components/src/lib/themes/metaverse/tokens/**/*.yaml'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'dist/libs/themes/metaverse/',
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
          destination: '_theme.scss',
          options: { showFileHeader: false },
        }
      ]
    }
  }
}
