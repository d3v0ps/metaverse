import { Component, ElementRef, Input, ViewChild } from "@angular/core";
import { forkJoin, Observable, tap } from "rxjs";

export type SpritesheetLayer = {
  url: string;
  row: number;
  col: number;
};

@Component({
  selector: 'cf-layered-spritesheet',
  template: `
    <div cfBlock="layered-spritesheet">
      <canvas #canvas [attr.width]="width + 'px'" [attr.height]="height + 'px'"
        [ngStyle]="{
          transform: 'scale(' + scale + ')'
        }"></canvas>
    </div>
  `,
  styles: [
    `
      .layered-spritesheet {
      }
    `
  ]
})
export class LayeredSpritesheetComponent {

  @ViewChild('canvas', { static: true, read: ElementRef }) set canvas(
    canvas: ElementRef<HTMLCanvasElement> | undefined
  ) {
    this._canvas = canvas;
    this.render();
  }
  get canvas(): ElementRef<HTMLCanvasElement> | undefined {
    return this._canvas;
  }


  @Input() set layers(value: SpritesheetLayer[]) {
    this._layers = value;
    this.render();
  }
  get layers(): SpritesheetLayer[] {
    return this._layers;
  }
  @Input() animated = false;

  @Input() width = 64;
  @Input() height = 64;
  @Input() scale = 1;

  private _canvas?: ElementRef<HTMLCanvasElement>;
  private _layers: SpritesheetLayer[] = [];

  private render() {
    if (!this.canvas) {
      return;
    }

    const context = this.canvas.nativeElement.getContext("2d") as CanvasRenderingContext2D;
    context.clearRect(0, 0, this.width, this.height);

    this.preloadImages(this.layers)
      .pipe(
        tap(layers => {
          layers.forEach(
            ({ layer, image }) => {

              const spriteX = layer.col * this.width;
              const spriteY = layer.row * this.height;

              context.drawImage(image,
                spriteX,
                spriteY,
                this.width,
                this.height,
                0,
                0,
                this.width,
                this.height,
              );

            }
          )

        })
      );

    this.layers.forEach(
      layer => {
        const image = new Image();
        image.src = layer.url;

        const spriteX = layer.col * this.width;
        const spriteY = layer.row * this.height;

        context.drawImage(image,
          spriteX,
          spriteY,
          this.width,
          this.height,
          0,
          0,
          this.width,
          this.height,
        );

      }
    );
  }

  private preloadImages(layers: SpritesheetLayer[]): Observable<{
    layer: SpritesheetLayer,
    image: HTMLImageElement
  }[]> {
    return forkJoin(layers.map(layer => {

      return new Observable<{
        layer: SpritesheetLayer,
        image: HTMLImageElement
      }>((subscriber) => {
        const image = new Image();
        image.src = layer.url;

        image.onload = () => {
          subscriber.next({
            layer,
            image
          });
          subscriber.complete();
        };
      })
    }));
  }
}
