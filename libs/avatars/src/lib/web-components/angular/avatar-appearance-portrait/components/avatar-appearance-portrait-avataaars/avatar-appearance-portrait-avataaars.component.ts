import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import Avatars from 'avataaars';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

@Component({
  selector: 'cf-avatar-appearance-portrait-avataaars',
  template: ` <div style="display: contents;" #container></div> `,
})
export class AvatarAppearancePortraitAvataaarsComponent {
  @Input() set properties(value: Record<string, string>) {
    this._properties = value;
    this.render();
  }
  get properties(): Record<string, string> {
    return this._properties;
  }

  @ViewChild('container', { static: true, read: ElementRef }) set container(
    container: ElementRef<HTMLDivElement> | undefined
  ) {
    this._container = container;
    this.render();
  }
  get container(): ElementRef<HTMLDivElement> | undefined {
    return this._container;
  }

  private _container?: ElementRef<HTMLDivElement>;
  private _properties: Record<string, string> = {};

  private render() {
    if (!this.container) {
      return;
    }

    ReactDOM.render(
      React.createElement(Avatars, {
        avatarStyle: 'Circle',
        ...this.properties,
        style: { width: '90%', height: '90%', margin: '0 5%' },
      }),
      this.container.nativeElement
    );
  }
}
