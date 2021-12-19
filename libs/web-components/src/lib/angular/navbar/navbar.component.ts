import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'cf-navbar',
  template: `
    <div cfBlock="navbar">
      <div fxLayout="row" fxFlexFill fxLayoutAlign="space-between center">
        <div cfBlock="navbar" cfMod="left" fxFlex="50">
          <h1 cfElem="title" (click)="onTitleClick()">
            <cf-svg-icon
              cfElem="icon"
              [svgClass]="'icon__svg'"
              src="assets/logo.svg"
            ></cf-svg-icon>

            <span cfElem="text">{{ title }}</span>
          </h1>
        </div>

        <div fxFlex="50">
          <div cfBlock="navbar" cfMod="right">
            <ul cfBlock="list" cfMod="horizontal">
              <li cfElem="item">
                <cf-svg-icon
                  src="assets/icons/mdi/web.svg"
                  cfElem="icon"
                  [svgClass]="'icon__svg'"
                ></cf-svg-icon>
                <a [href]="environment?.webUrl" cfElem="link">Website</a>
              </li>
              <li cfElem="item">
                <cf-svg-icon
                  src="assets/icons/mdi/text-box-search-outline.svg"
                  cfElem="icon"
                  [svgClass]="'icon__svg'"
                ></cf-svg-icon>
                <a [href]="environment?.documentationUrl" cfElem="link"
                  >Documentation</a
                >
              </li>
              <li cfElem="item">
                <cf-svg-icon
                  src="assets/icons/mdi/post-outline.svg"
                  cfElem="icon"
                  [svgClass]="'icon__svg'"
                ></cf-svg-icon>
                <a [href]="environment?.blogUrl" cfElem="link">Blog</a>
              </li>
              <li cfElem="item">
                <cf-svg-icon
                  src="assets/icons/mdi/code-tags.svg"
                  cfElem="icon"
                  [svgClass]="'icon__svg'"
                ></cf-svg-icon>
                <a [href]="environment?.developersUrl" cfElem="link">
                  Developers
                </a>
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
