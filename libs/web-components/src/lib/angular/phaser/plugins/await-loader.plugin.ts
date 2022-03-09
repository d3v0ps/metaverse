import { AwaitFile } from "./await-loader.file";

const isPlainObject = (obj: any) => {
  // Not plain objects:
  // - Any object or value whose internal [[Class]] property is not "[object Object]"
  // - DOM nodes
  // - window
  if (typeof (obj) !== 'object' || obj.nodeType || obj === obj.window) {
    return false;
  }

  // Support: Firefox <20
  // The try/catch suppresses exceptions thrown when attempting to access
  // the "constructor" property of certain host objects, ie. |window.location|
  // https://bugzilla.mozilla.org/show_bug.cgi?id=814622
  try {
    if (obj.constructor && !({}).hasOwnProperty.call(obj.constructor.prototype, 'isPrototypeOf')) {
      return false;
    }
  }
  catch (e) {
    return false;
  }

  // If the function hasn't returned already, we're confident that
  // |obj| is a plain object, created by {} or constructed with new Object
  return true;
};

const loaderCallback = function (this: any, key: any, config: any) {
  if (key && typeof (key) === 'function') {
    const callback = key;
    const scope = config;
    config = {
      config: {
        callback: callback,
        scope: scope,
      }
    };
  } else if (isPlainObject(key)) {
    config = key;
    // eslint-disable-next-line no-prototype-builtins
    if (!config.hasOwnProperty('config')) {
      config = {
        config: config
      };
    }
  } else {
    config = {
      key: key,
      config: config
    };
  }
  this.addFile(new AwaitFile(this, config));

  return this;
}

export class AwaitLoaderPlugin extends Phaser.Plugins.BasePlugin {
  constructor(pluginManager: Phaser.Plugins.PluginManager) {
    super(pluginManager);

    pluginManager.registerFileType('AwaitFile', loaderCallback);
  }

  addToScene(scene: any) {
    scene.sys.load['AwaitFile'] = loaderCallback;
  }
}
