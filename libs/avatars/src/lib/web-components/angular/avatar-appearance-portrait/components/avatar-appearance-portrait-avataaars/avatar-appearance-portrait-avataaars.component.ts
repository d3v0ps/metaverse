import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import Avatars from 'avataaars';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

@Component({
  selector: 'cf-avatar-appearance-portrait-avataaars',
  template: `<cf-react-renderer [component]="component" [props]="properties"></cf-react-renderer>`,
})
export class AvatarAppearancePortraitAvataaarsComponent {

  component = Avatars;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() set properties(value: Record<string, any>) {
    this._properties = {
      avatarStyle: 'Circle',
      ...value,
      style: { width: '90%', height: '90%', margin: '0 5%' }
    };
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private _properties: Record<string, any> = {};

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
