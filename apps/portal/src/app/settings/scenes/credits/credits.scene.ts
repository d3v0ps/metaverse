import { Component } from '@angular/core';

@Component({
  selector: 'cf-credits',
  template: `
    <div>
      <h4>Technologies</h4>
      <p>This app was built with the following technologies:</p>
      <ul>
        <li>
          <a href="https://www.typescriptlang.org/">TypeScript v4.3.5</a>
          <p></p>
        </li>
        <li>
          <a href="https://angular.io/">Angular v13</a>
          <p></p>
        </li>
        <li>
          <a href="https://angular.io/">ng-selet v8.1.1</a>
          <p></p>
        </li>
        <li>
          <a href="https://rxjs.io/">RxJS v6.6.0</a>
          <p></p>
        </li>
        <li>
          <a href="https://rxdb.io/">RxDB v10.5.4</a>
          <p></p>
        </li>
      </ul>
    </div>
    <div>
      <h4>Visual Assets</h4>
      <p>This app uses the following assets:</p>
      <ul>
        <li>
          <a href="https://materialdesignicons.com/"
            >Material Design Icons v6.4.95</a
          >
          <p></p>
        </li>
      </ul>
    </div>
  `,
})
export class CreditsScene {}
