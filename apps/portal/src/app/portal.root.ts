import { Component } from '@angular/core';
import { environment } from '../environments/environment';

/** Metaverse's Portal root component */
@Component({
  selector: 'cf-portal-root',
  template: ` <router-outlet></router-outlet> `,
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

        ::ng-deep cf-svg-icon > svg {
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
