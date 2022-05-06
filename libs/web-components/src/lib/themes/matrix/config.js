
const rootConfig = require('../../../../../../.style-dictionary/config');

module.exports = {
  ...rootConfig,
  source: ['libs/web-components/src/lib/themes/matrix/tokens/**/*.yaml'],
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
      buildPath: 'dist/libs/themes/matrix/',
      files: [
        {
          format: 'css/variables',
          destination: 'variables.css'
        }
      ]
    }
  }
}
