import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'cf-navbar',
  template: `
    <div cfBlock="navbar">
      <div cfBlock="navbar-section" cfMod="left">
        <h1 cfElem="title" (click)="onTitleClick()">
          <cf-svg-icon
            cfElem="icon"
            [svgClass]="'icon__svg'"
            src="assets/logo.svg"
          ></cf-svg-icon>

          <span cfElem="text">{{ title }}</span>
        </h1>
      </div>

      <div cfBlock="navbar-section" cfMod="right">
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
  `,
})
export class NavbarComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() environment: any;
  @Input() title = 'CF Portal';

  @Output() titleClick = new EventEmitter();

  onTitleClick() {
    this.titleClick.emit();
  }
}
