/* eslint-disable no-prototype-builtins */

import { Loader } from 'phaser';

const FILE_POPULATED = Loader.FILE_POPULATED;


export class AwaitFile extends Loader.File {
  constructor(loader: any, fileConfig: any) {
    if (!fileConfig.hasOwnProperty('type')) {
      fileConfig.type = 'await';
    }
    if (!fileConfig.hasOwnProperty('url')) {
      fileConfig.url = '';
    }
    if (!fileConfig.hasOwnProperty('key')) {
      fileConfig.key = (new Date()).getTime().toString();
    }
    super(loader, fileConfig);
  }

  load() {
    if (this.state === FILE_POPULATED) {
      //  Can happen for example in a JSONFile if they've provided a JSON object instead of a URL
      this.loader.nextFile(this, true);
    } else {
      // start loading task
      const config = this.config;
      const callback = config.callback;
      const scope = config.scope;
      const successCallback = this.onLoad.bind(this);
      const failureCallback = this.onError.bind(this);
      if (callback) {
        if (scope) {
          callback.call(scope, successCallback, failureCallback);
        } else {
          callback(successCallback, failureCallback);
        }
      } else {
        this.onLoad();
      }
    }
  }

  onLoad() {
    this.loader.nextFile(this, true);
  }

  onError() {
    this.loader.nextFile(this, false);
  }
}
