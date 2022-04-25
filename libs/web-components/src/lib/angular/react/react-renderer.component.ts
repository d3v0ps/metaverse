import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

@Component({
  selector: 'cf-react-renderer',
  template: ` <div style="display: contents;" #container></div> `,
})
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class ReactRendererComponent<TProps = any> {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() set component(value: any) {
    this._component = value;
    this.render();
  };
  get component() {
    return this._component;
  }

  @Input() set props(value: TProps | undefined) {
    this._props = value;
    this.render();
  }
  get props(): TProps | undefined {
    return this._props;
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
  private _component?: any;
  private _props?: TProps;

  private render() {
    if (!this.container || !this.component) {
      return;
    }

    ReactDOM.render(
      React.createElement(this.component, this.props),
      this.container.nativeElement
    );
  }
}
