
const rootConfig = require('../../../../../../.style-dictionary/config');

module.exports = {
  ...rootConfig,
  source: ['libs/web-components/src/lib/themes/central-factory/tokens/**/*.yaml'],
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
      buildPath: 'dist/libs/themes/central-factory/',
      files: [
        {
          format: 'css/variables',
          destination: 'variables.css'
        }
      ]
    }
  }
}
