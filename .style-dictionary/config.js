const { readFileSync } = require('fs-extra');
const StyleDictionary = require('style-dictionary');
const yaml = require('yaml');

const transformer = StyleDictionary.transform['attribute/cti'].transformer;

const lightenColor = (col, amt) => {
  var usePound = false;
  if ( col[0] == "#" ) {
      col = col.slice(1);
      usePound = true;
  }

  var num = parseInt(col,16);

  var r = (num >> 16) + amt;

  if ( r > 255 ) r = 255;
  else if  (r < 0) r = 0;

  var b = ((num >> 8) & 0x00FF) + amt;

  if ( b > 255 ) b = 255;
  else if  (b < 0) b = 0;

  var g = (num & 0x0000FF) + amt;

  if ( g > 255 ) g = 255;
  else if  ( g < 0 ) g = 0;

  return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
}

const propertiesToCTI = {
  'width': {category: 'size', type: 'dimension'},
  'min-width': {category: 'size', type: 'dimension'},
  'max-width': {category: 'size', type: 'dimension'},
  'height': {category: 'size', type: 'dimension'},
  'min-height': {category: 'size', type: 'dimension'},
  'max-height': {category: 'size', type: 'dimension'},
  'border-width': {category: 'size', type: 'border', item: 'width'},
  'border-radius': { category: 'size', type: 'border', item: 'width' },
  'border-color': {category: 'color', type: 'border'},
  'background-color': {category: 'color', type: 'background'},
  'color': {category: 'color', type: 'font'},
  'text-color': { category: 'color', type: 'font' },
  'padding': {category: 'size', type: 'padding'},
  'padding-vertical': {category: 'size', type: 'padding'},
  'padding-horizontal': {category: 'size', type: 'padding'},
  'icon': {category: 'content', type: 'icon'},
  'font-size': {category: 'size', type: 'font'},
  'line-height': { category: 'size', type: 'line-height' },
  'size': {category: 'size', type: 'icon'}
}

const CTITransform = {
  type: `attribute`,
  transformer: (prop) => {
    // Only do this custom functionality in the 'component' top-level namespace.
    if (prop.path[0] === 'component') {
      // When defining component tokens, the key of the token is the relevant CSS property
      // The key of the token is the last element in the path array
      return propertiesToCTI[prop.path[prop.path.length - 1]];
    } else {
      // Fallback to the original 'attribute/cti' transformer
      return transformer(prop);
    }
  }
}

const ColorLightTransform = {
  type: `attribute`,
  matcher: (token) => token.attributes.category === 'color' &&
  ('darken' in token.original || 'lighten' in token.original),
  transformer: (token) => {
    const amount = token.original.darken ? -(token.original.darken * 100) : token.original.lighten * 100;
    const color = lightenColor(token.value, amount);

    switch (color.length) {
      case 2:
        token.value = color.padEnd(7, color.substring(1));
        break;
      case 4:
        token.value = `${color}${color.substring(1)}`;
        break;
      case 7:
        token.value = color;
        break;
      default:
        token.value = color.padEnd(7, 'f');
        break;
    }

    return token;
  }
}


const deepAssign = (target, ...sources) => {
  if (sources.length === 0) return target;
  const source = sources.shift();
  if (source !== undefined && source !== null) {
    for (const key in source) {
      if (source.hasOwnProperty(key)) {
        if (source[key] && typeof source[key] === 'object') {
          target[key] = target[key] || {};
          deepAssign(target[key], source[key]);
        } else {
          target[key] = source[key];
        }
      }
    }
  }
  return deepAssign(target, ...sources);
}

module.exports = {
  parsers: [
    {
      pattern: /\.yaml$/,
      parse: ({contents, filePath}) => {
        const isBaseTheme = filePath.includes('themes/metaverse');
        if (isBaseTheme) {
          return yaml.parse(contents);
        }

        const [, themePath] = filePath.split('/themes/');
        const [themeName] = themePath.split('/');

        const baseThemeFilePath = filePath.replace(`themes/${themeName}`, `themes/metaverse`);

        const baseThemeContent = readFileSync(baseThemeFilePath, 'utf8');

        const { original, themed } = {
          original: yaml.parse(baseThemeContent),
          themed: yaml.parse(contents)
        }

        if (themeName === 'matrix' && themed.color) {
          const result = deepAssign({}, original, themed);
        }

        return deepAssign({}, original, themed);
      }
    }
  ],
  transform: {
    'attribute/cti': CTITransform,
    'color/light': ColorLightTransform,
  }
}
