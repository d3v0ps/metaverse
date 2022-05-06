
const rootConfig = require('../../../../../../.style-dictionary/config');

module.exports = {
  ...rootConfig,
  source: ['libs/web-components/src/lib/themes/bubbles/tokens/**/*.yaml'],
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
      buildPath: 'dist/libs/themes/bubbles/',
      files: [
        {
          format: 'css/variables',
          destination: 'variables.css'
        }
      ]
    }
  }
}
