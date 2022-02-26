import { Component, Input } from '@angular/core';

@Component({
  selector: 'cf-avatar-appearance-spritesheet',
  template: `
    <div cfBlock="avatar-appearance-spritesheet" [ngStyle]="{
      'background-image': 'url(' + src + ')',
      'background-position': '-' + (col * width) + 'px ' + '-' + (row * height) + 'px',
      transform: 'scale(' + scale + ')',
      width: width + 'px',
      height: height + 'px'
    }">
    </div>`,
  styles: [
    `
      .avatar-appearance-spritesheet {
        background-repeat: no-repeat;
      }
    `
  ]
})
export class AvatarAppearanceSpritesheetComponent {

  @Input() row = 0;
  @Input() col = 0;
  @Input() width = 64;
  @Input() height = 64;
  @Input() scale = 1;

  @Input() src = `assets/avatars/lpc/bases/Human/Child/Universal.png`;
  backgroundPosition = `${this.col * this.width}px ${this.row * this.height}px`;
  transform = `scale(${this.scale})`;


}
