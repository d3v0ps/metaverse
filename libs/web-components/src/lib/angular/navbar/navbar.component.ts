import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'cf-navbar',
  template: `
    <div block="navbar">
      <div fxLayout="row" fxFlexFill fxLayoutAlign="space-between center">
        <div block="navbar" mod="left" fxFlex="50">
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
          <div block="navbar" mod="right">
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
export class NavbarComponent {
  @Input() environment: any;
  @Input() title = 'CF Portal';

  @Output() titleClick = new EventEmitter();

  onTitleClick() {
    this.titleClick.emit();
  }
}
