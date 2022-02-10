import { Injectable } from '@angular/core';
import { CustomizationSettingsState } from '@central-factory/preferences/states/customization/customization-settings.state';
import { distinctUntilChanged, map, Subscription, tap } from 'rxjs';

export type MatrixColumn = {
  x: number;
  stackHeight: number;
  stackCounter: number;
};

export type MatrixBackground = {
  tileSize: number;
  fadeFactor: number;
  columns: MatrixColumn[];
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  maxStackHeight: number;
};

/**
 * Matrix renderer from https://pingpoli.de/matrix.html
 */
@Injectable({
  providedIn: 'root',
})
export class BackgroundRenderer {
  private renderProcessRunning = false;
  private renderTimeout?: number;
  private currentTheme?: string;
  private textColor = '#22b455';

  private themeChangeSubscription?: Subscription;

  constructor(private customizationSettingsState: CustomizationSettingsState) {
    this.initialize();
  }

  initialize() {
    if (this.themeChangeSubscription) {
      this.themeChangeSubscription.unsubscribe();
    }

    this.themeChangeSubscription =
      this.customizationSettingsState.customizationSettings$
        .pipe(
          map((settings) => settings?.theme.name),
          distinctUntilChanged((prev, curr) => prev === curr),
          tap((name) => this.onThemeChange(name))
        )
        .subscribe();
  }

  private onThemeChange(name?: string) {
    const application = document.getElementsByClassName('application')[0];

    if (!application || !name) {
      setTimeout(() => this.initialize(), 1000);
      return;
    }

    if (this.currentTheme === name) {
      return;
    }

    this.currentTheme = name;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.contentBoxSize) {
          const canvas = document.getElementById(
            'bgcanvas'
          ) as HTMLCanvasElement;
          // Firefox implements `contentBoxSize` as a single content rect, rather than an array
          const contentBoxSize = Array.isArray(entry.contentBoxSize)
            ? entry.contentBoxSize[0]
            : entry.contentBoxSize;

          canvas.width = contentBoxSize.inlineSize;
          canvas.height = window.innerHeight;

          const matrix = this.initializeMatrix();

          this.renderTick(() => this.renderMatrix(matrix));
        }
      }
    });

    switch (name) {
      case 'Matrix':
        this.textColor = '#22b455';
        application.classList.add('application--no-background-color');
        resizeObserver.observe(document.documentElement);
        break;
      case 'Metaverse':
        this.textColor = '#9575cd';
        application.classList.add('application--no-background-color');
        resizeObserver.observe(document.documentElement);
        break;
      default:
        resizeObserver.unobserve(document.documentElement);
        clearTimeout(this.renderTimeout);
        delete this.renderTimeout;
        this.renderProcessRunning = false;
        application.classList.remove('application--no-background-color');
        break;
    }
  }

  private initializeMatrix(): MatrixBackground {
    const tileSize = 20;
    const fadeFactor = 0.05;
    const canvas = document.getElementById('bgcanvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    const columns: MatrixColumn[] = [];

    const maxStackHeight = Math.ceil(canvas.height / tileSize);

    for (let i = 0; i < canvas.width / tileSize; ++i) {
      columns.push({
        x: i * tileSize,
        stackHeight: 10 + Math.random() * maxStackHeight,
        stackCounter: 0,
      });
    }

    return {
      tileSize,
      fadeFactor,
      canvas,
      ctx,
      maxStackHeight,
      columns,
    };
  }

  private renderTick(renderFn: () => void, interval = 50) {
    if (this.renderProcessRunning) {
      return;
    }

    this.renderProcessRunning = true;

    renderFn();
    this.renderTimeout = window.setTimeout(() => {
      this.renderProcessRunning = false;
      this.renderTick(renderFn, interval);
    }, interval);
  }

  private renderMatrix({
    ctx,
    fadeFactor,
    canvas,
    tileSize,
    maxStackHeight,
    columns,
  }: MatrixBackground) {
    // draw a semi transparent black rectangle on top of the scene to slowly fade older characters
    ctx.fillStyle = 'rgba( 0 , 0 , 0 , ' + fadeFactor + ' )';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // pick a font slightly smaller than the tile size
    ctx.font = tileSize - 2 + 'px monospace';
    // ctx.fillStyle = 'rgb( 0 , 255 , 0 )';
    ctx.fillStyle = this.textColor;

    for (let i = 0; i < columns.length; ++i) {
      // pick a random ascii character (change the 94 to a higher number to include more characters)
      const randomCharacter = String.fromCharCode(
        33 + Math.floor(Math.random() * 94)
      );
      // const randomCharacter = Math.random() > 0.5 ? '0' : '1';
      ctx.fillText(
        randomCharacter,
        columns[i].x,
        columns[i].stackCounter * tileSize + tileSize
      );

      // if the stack is at its height limit, pick a new random height and reset the counter
      if (++columns[i].stackCounter >= columns[i].stackHeight) {
        columns[i].stackHeight = 10 + Math.random() * maxStackHeight;
        columns[i].stackCounter = 0;
      }
    }
  }
}
