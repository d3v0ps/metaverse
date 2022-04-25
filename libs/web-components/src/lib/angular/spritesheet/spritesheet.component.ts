import { Component, Input } from '@angular/core';

@Component({
  selector: 'cf-spritesheet',
  template: `
    <div cfBlock="spritesheet" [ngStyle]="{
      'background-image': 'url(' + src + ')',
      'background-position': '-' + (col * width) + 'px ' + '-' + (row * height) + 'px',
      transform: 'scale(' + scale + ')',
      width: width + 'px',
      height: height + 'px'
    }">
    </div>`,
  styles: [
    `
      .spritesheet {
        background-repeat: no-repeat;
      }
    `
  ]
})
export class SpritesheetComponent {

  @Input() row = 0;
  @Input() col = 0;
  @Input() width = 64;
  @Input() height = 64;
  @Input() scale = 1;

  @Input() src = `assets/avatars/lpc/bases/Human/Child/Universal.png`;
}
