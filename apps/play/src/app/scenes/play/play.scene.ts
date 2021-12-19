import { Component } from '@angular/core';

/** Play main scene */
@Component({
  selector: 'cf-play',
  template: `
    <div cfBlock="scene-content">
      <div fxLayout="column" fxFlexFill>
        <div fxFlex="40">Play</div>
      </div>
    </div>
  `,
})
export class PlayScene {}
