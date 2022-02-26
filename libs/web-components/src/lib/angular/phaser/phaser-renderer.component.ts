import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Game, Scene } from 'phaser';

export type SceneConfig = string | Phaser.Types.Scenes.SettingsConfig;

@Component({
  selector: 'cf-phaser-renderer',
  template: `
  <div style="display: contents;" #container></div> `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class PhaserRendererComponent {


  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() set scenes(value: Record<string, (new (config: string | SceneConfig) => Scene) | Scene>) {
    this._scenes = value;
    this.render();
  };
  get scenes(): Record<string, (new (config: SceneConfig) => Scene) | Scene> {
    return this._scenes;
  }

  @Input() set config(value: any) {
    if (JSON.stringify(value) === JSON.stringify(this._config)) {
      return;
    }

    this._config = value;
    this.render();
  }
  get config(): any {
    return this._config;
  }

  @Input() width = 64 * 3;
  @Input() height = 64 * 3;
  @Input() transparent = true;

  @ViewChild('container', { static: true, read: ElementRef }) set container(
    container: ElementRef<HTMLDivElement> | undefined
  ) {
    this._container = container;
    this.render();
  }
  get container(): ElementRef<HTMLDivElement> | undefined {
    return this._container;
  }

  private _container?: ElementRef<HTMLDivElement>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private _scenes: Record<string, (new (config: SceneConfig) => Scene) | Scene> = {};
  private _config: any = {};

  private _game?: Game;

  private render() {
    if (!this.container || !this.scenes) {
      return;
    }

    if (this._game) {
      this._game.destroy(true);
    }

    this._game = new Game({
      type: Phaser.AUTO,
      width: this.width || this.container.nativeElement.clientWidth,
      height: this.height || this.container.nativeElement.clientHeight,
      parent: this.container.nativeElement, // this.container.nativeElement,
      transparent: this.transparent,
      // physics: {
      //   default: 'arcade',
      //   arcade: {
      //     gravity: { y: 300 },
      //     debug: false
      //   }
      // },
      pixelArt: true,
      scene: this.scenes['room'],
      ...this.config

    });
  }
}
