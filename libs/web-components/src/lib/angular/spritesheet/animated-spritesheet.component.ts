import { Component, Input } from "@angular/core";

export type SpritesheetAnimation = {
  steps: number;
  colStart: number;
  rowStart: number;
  stepDuration: number;
}

@Component({
  selector: 'cf-animated-spritesheet',
  template: `
    <cf-spritesheet [src]="src" [col]="currentCol" [row]="currentRow" [scale]="scale"></cf-spritesheet>

  `
})
export class AnimatedSpritesheetComponent {

  @Input() set src(value: string) {
    if (!value || value === this._src) {
      return;
    }
    this._src = value;
    if (this.autoplay) {
      this.start();
    }
  };
  get src(): string {
    return this._src;
  }

  @Input() scale = 1;

  @Input() autoplay = true;
  @Input() loop = true;

  @Input() steps = 0;
  @Input() stepDuration = 3000;

  @Input() colStart = 0;
  @Input() rowStart = 0;


  currentCol = 0;
  currentRow = 0;

  private _playing = false;
  private _src = '';

  start() {
    if (this._playing) {
      return;
    }

    this._playing = true;
    this.tick();
  }

  private tick() {
    this.currentCol++;

    const isLast = this.colStart + this.steps <= this.currentCol;

    const keepRunning = (!isLast || this.loop);

    if (!keepRunning) {
      this._playing = false;
      return;
    }

    setTimeout(() => {
      if (isLast) {
        this.currentCol = this.colStart;
        this.currentRow = this.rowStart;
      }

      this.tick();
    }, this.stepDuration);
  }
}
