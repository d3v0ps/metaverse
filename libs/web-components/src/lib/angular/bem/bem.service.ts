/* eslint-disable @typescript-eslint/no-explicit-any */
import { ElementRef, Injectable, Renderer2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BemService {
  separators = {
    el: '__',
    mod: '--',
    val: '-',
  };
  ignoreValues = false;
  modCase = 'kebab';

  setMods(
    blockName: string,
    elemName: string,
    mods: any,
    oldMods: any,
    element: ElementRef,
    renderer: Renderer2
  ) {
    Object.keys(mods).forEach((key) => {
      if (oldMods[key]) {
        if (mods[key] === oldMods[key]) {
          return;
        }

        renderer.removeClass(
          element.nativeElement,
          this.generateClass(blockName, elemName, key, oldMods[key])
        );
      }

      if (mods[key]) {
        renderer.addClass(
          element.nativeElement,
          this.generateClass(blockName, elemName, key, mods[key])
        );
      }
    });

    Object.keys(oldMods).forEach((key) => {
      if (!(key in mods) && oldMods[key]) {
        renderer.removeClass(
          element.nativeElement,
          this.generateClass(blockName, elemName, key, oldMods[key])
        );
      }
    });
  }

  generateClass(
    blockName: string,
    elemName?: string,
    modName?: string,
    modValue?: boolean | string
  ): string {
    if (this.ignoreValues) {
      modValue = !!modValue;
    }

    if (typeof modValue !== 'string' && typeof modValue !== 'boolean') {
      modValue = !!modValue;
    }

    let cls = blockName;

    if (elemName) {
      cls += this.separators.el + elemName;
    }

    if (modName) {
      modName = this.modNameHandler(modName);
      cls += this.separators.mod + modName;
      if (typeof modValue !== 'boolean' && modValue != null) {
        cls += this.separators.val + modValue;
      }
    }

    return cls;
  }

  parseMods(mods: string | string[] | any) {
    if (typeof mods === 'string') {
      mods = mods.split(/\s+/);
    }

    if (Array.isArray(mods)) {
      const arr = mods.filter((mod) => mod);

      mods = {};

      arr.forEach((key) => {
        mods[key] = true;
      });
    } else if (typeof mods !== 'object') {
      return {};
    }

    return mods;
  }

  private modNameHandler(str: string): string {
    switch (this.modCase) {
      case 'kebab':
        return str
          ? str
              .replace(/[A-Z]/g, function (s) {
                return '-' + s.toLowerCase();
              })
              // eslint-disable-next-line no-useless-escape
              .replace(/$\-/, '')
          : '';
      case 'snake':
        return str
          ? str
              .replace(/[A-Z]/g, function (s) {
                return '_' + s.toLowerCase();
              })
              // eslint-disable-next-line no-useless-escape
              .replace(/$\-/, '')
          : '';
      default:
        return str;
    }
  }
}
