import { Component, Input } from "@angular/core";

export type SpritesheetLayer = {
  url: string;
  row: number;
  col: number;
  scale: number;
};

@Component({
  selector: 'cf-layered-spritesheet',
  template: `
    <div cfBlock="layered-spritesheet">
      <ng-container *ngFor="let layer of layers">
        <cf-spritesheet [src]="layer.url"
          *ngIf="!animated"
          [row]="layer.row"
          [col]="layer.col"
          [scale]="layer.scale">
        </cf-spritesheet>
        <cf-animated-spritesheet
          *ngIf="animated"
          [src]="layer.url"
          [scale]="layer.scale"
          [rowStart]="layer.row"
          [colStart]="layer.col"
          [steps]="2">
        </cf-animated-spritesheet>
      </ng-container>
    </div>
  `,
  styles: [
    `
      .layered-spritesheet {
        position: relative;
        /* left: 0; */
        /* top: 0; */
        /* width: 100%; */
        /* height: 100%; */
        margin: 0 auto;
        width: 64px;
        height: 64px;

        cf-spritesheet, cf-animated-spritesheet {
          position: absolute;
          margin: 0 auto;
          left: 0;
          top: 0;
        }
      }
    `
  ]
})
export class LayeredSpritesheetComponent {

  @Input() layers: SpritesheetLayer[] = [];
  @Input() animated = false;
}
