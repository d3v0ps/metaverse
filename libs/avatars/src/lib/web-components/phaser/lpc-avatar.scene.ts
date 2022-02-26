
import { SceneConfig } from '@central-factory/web-components/angular/phaser/phaser-renderer.component';
import { Scene } from 'phaser';

export class LPCAvatarScene extends Scene {

  private cols = 13;
  private animations = [
    {
      name: 'cast',
      steps: 7,
    },
    {
      name:
        'dual-wield',
      steps: 8
    },
    {
      name:
        'walk',
      steps: 9
    },
    {
      name:
        'right-arm',
      steps: 6
    },
    {
      name:
        'bow',
      steps: 13
    },
    {
      name:
        'fall',
      steps: 6
    }
  ];

  constructor(
    config: SceneConfig,
    private layers: { id?: string, url: string }[],
    private animationId = 'walk/south',
  ) {
    super(config);
  }


  preload() {
    this.layers.forEach(
      (layer, i) => this.load.spritesheet(layer.id || `layer-${i}`, layer.url, { frameWidth: 64, frameHeight: 64 })
    );
  }

  create() {
    if (this.load.isLoading()) {
      return;
    }

    this.layers.forEach(
      (layer, i) => {
        const layerId = layer.id || `layer-${i}`;
        this.generateAnimationsForLayer(layerId);
        const sprite = this.add.sprite(this.game.canvas.width / 2, this.game.canvas.height / 2, layerId, 0);
        sprite.setScale(3);
        sprite.play(`${layerId}/${this.animationId}`);
      }
    );
  }

  private generateAnimationsForLayer(layerId: string, animations = this.animations, cols = this.cols) {
    animations.forEach(
      (animation, i) => {
        const startNorthFramePos = (i * cols * 4);
        const startLeftFramePos = startNorthFramePos + cols;
        const startSouthPosition = startLeftFramePos + cols;
        const startRightPosition = startSouthPosition + cols;

        this.anims.create({
          key: `${layerId}/${animation.name}/north`,
          frames: this.anims.generateFrameNumbers(layerId, { start: startNorthFramePos, end: startNorthFramePos + (animation.steps - 1) }),

          frameRate: 8,
          repeat: -1
        });

        this.anims.create({
          key: `${layerId}/${animation.name}/left`,
          frames: this.anims.generateFrameNumbers(layerId, { start: startLeftFramePos, end: startLeftFramePos + (animation.steps - 1) }),

          frameRate: 8,
          repeat: -1
        });

        this.anims.create({
          key: `${layerId}/${animation.name}/south`,
          frames: this.anims.generateFrameNumbers(layerId, { start: startSouthPosition + 1, end: startSouthPosition + (animation.steps - 1) }),

          frameRate: 8,
          repeat: -1
        });

        this.anims.create({
          key: `${layerId}/${animation.name}/right`,
          frames: this.anims.generateFrameNumbers(layerId, { start: startRightPosition + 1, end: startRightPosition + (animation.steps - 1) }),

          frameRate: 8,
          repeat: -1
        });
      }
    );
  }

}

export const ROOM_SCENE_PROVIDER = {
  provide: Scene,
  useClass: LPCAvatarScene
}
