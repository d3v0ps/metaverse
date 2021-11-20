import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'cf-header',
  template: `
    <div block="header">
      <div fxLayout="row" fxFlexFill fxLayoutAlign="space-between center">
        <div block="header" mod="left" fxFlex="50">
          <h1 elem="title" (click)="onTitleClick()">
            <svg-icon
              elem="icon"
              [svgClass]="'icon__svg'"
              src="assets/logo.svg"
            ></svg-icon>

            <span elem="text">{{ title }}</span>
          </h1>
        </div>

        <div fxFlex="50">
          <div block="header" mod="right">
            <ul block="list" mod="horizontal">
              <li elem="item">
                <svg-icon
                  src="assets/icons/mdi/web.svg"
                  elem="icon"
                  [svgClass]="'icon__svg'"
                ></svg-icon>
                <a [href]="environment?.webUrl" elem="link">Website</a>
              </li>
              <li elem="item">
                <svg-icon
                  src="assets/icons/mdi/text-box-search-outline.svg"
                  elem="icon"
                  [svgClass]="'icon__svg'"
                ></svg-icon>
                <a [href]="environment?.documentationUrl" elem="link"
                  >Documentation</a
                >
              </li>
              <li elem="item">
                <svg-icon
                  src="assets/icons/mdi/post-outline.svg"
                  elem="icon"
                  [svgClass]="'icon__svg'"
                ></svg-icon>
                <a [href]="environment?.blogUrl" elem="link">Blog</a>
              </li>
              <li elem="item">
                <svg-icon
                  src="assets/icons/mdi/code-tags.svg"
                  elem="icon"
                  [svgClass]="'icon__svg'"
                ></svg-icon>
                <a [href]="environment?.developersUrl" elem="link"
                  >Developers</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class HeaderComponent {
  @Input() environment: any;
  @Input() title = 'CF Portal';

  @Output() titleClick = new EventEmitter();

  onTitleClick() {
    this.titleClick.emit();
  }
}
