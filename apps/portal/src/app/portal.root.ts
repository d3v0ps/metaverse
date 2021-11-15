import { Component } from '@angular/core';
import { environment } from '../environments/environment';

/** Metaverse's Portal root component */
@Component({
  selector: 'cf-portal-root',
  template: `
    <div style="text-align: center">
      <svg-icon [svgStyle]="{ 'width.px': 144, 'height.px': 144 }" src="assets/logo.svg"></svg-icon>
      <h1>Metaverse Portal</h1>
    </div>

    <router-outlet></router-outlet>

    <div *ngIf="!environment.production" class="devtools">
      <div class="card" style="width: 200px;">
        <svg-icon src="assets/icons/mdi/web.svg"></svg-icon>
        <a [href]="environment.webUrl">Website</a>
      </div>
      <div class="card" style="width: 200px;">
        <svg-icon src="assets/icons/mdi/text-box-search-outline.svg"></svg-icon>
        <a [href]="environment.documentationUrl">Documentation</a>
      </div>
      <div class="card" style="width: 200px;">
        <svg-icon src="assets/icons/mdi/post-outline.svg"></svg-icon>
        <a [href]="environment.blogUrl">Blog</a>
      </div>
      <div class="card" style="width: 200px;">
        <svg-icon src="assets/icons/mdi/code-tags.svg"></svg-icon>
        <a [href]="environment.developersUrl">Developers</a>
      </div>
    </div>
  `,
  styles: [
    `
      .devtools {

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
      }

      .card {
        margin: 1em;
        padding: 1em;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        width: 100%;
        height: 100%;

        border-radius: 0.5em;
        box-shadow: 0 0.25em 0.5em 0 rgba(0, 0, 0, 0.2);

        background-color: #fafafa;

        color: #333;

        font-size: 1.5em;

        font-family: 'Roboto', sans-serif;

        text-align: center;

        cursor: pointer;

        transition: all 0.2s ease-in-out;

        &:hover {
          transform: scale(1.05);

          box-shadow: 0 0.5em 1em 0 rgba(0, 0, 0, 0.2);

          background-color: #f5f5f5;

          color: #333;

          font-size: 1.75em;

          font-family: 'Roboto', sans-serif;

          text-align: center;

          cursor: pointer;
        }

        ::ng-deep svg-icon > svg {
          fill: #706fd3;
        }

        a {
          text-decoration: none;
          color: #706fd3;
        }
      }
    `,
  ],
})
export class PortalRoot {
  environment = environment;
}
