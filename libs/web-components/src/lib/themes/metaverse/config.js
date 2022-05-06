
const rootConfig = require('../../../../../../.style-dictionary/config');

module.exports = {
  ...rootConfig,
  source: ['libs/web-components/src/lib/themes/metaverse/tokens/**/*.yaml'],
  platforms: {
    css: {
      transforms: [
        'attribute/cti',
        'attribute/color',
        'name/cti/kebab',
        'time/seconds',
        'content/icon',
        'size/rem',
        'color/css',
        'color/light'
      ],
      buildPath: 'dist/libs/themes/metaverse/',
      files: [
        {
          format: 'css/variables',
          destination: 'variables.css'
        }
      ]
    },
    scss: {
      transforms: [
        'attribute/cti',
        'attribute/color',
        'name/cti/kebab',
        'time/seconds',
        'content/icon',
        'size/rem',
        'color/css',
        'color/light'
      ],
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
