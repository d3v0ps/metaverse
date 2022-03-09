
import { HttpClient } from '@angular/common/http';
import { Logger, LogLevel } from '@central-factory/logger/logger';
import { SceneConfig } from '@central-factory/web-components/angular/phaser/phaser-renderer.component';
import { GameObjects, Scene } from 'phaser';
import { BehaviorSubject, catchError, filter, forkJoin, map, of, switchMap, tap } from 'rxjs';
import { v4 as uuid } from 'uuid';
import { Animation, AnimationGroup, GameLayer, GameLayerType, isAnimation, isAnimationGroup, isSprite } from '../models/game-object';
import { Scene as BaseScene } from '../models/scene';

export class PhaserScene extends Scene implements BaseScene {

  private layers: { id?: string, url: string }[] = [];
  private sprites: Phaser.GameObjects.Sprite[] = [];
  private spriteLayers: GameLayer[] = [];
  private animationLayers: GameLayer[] = [];
  private loading$ = new BehaviorSubject<boolean>(true);

  constructor(
    public config: SceneConfig,
    private http: HttpClient,
    public sceneLayers: GameLayer[],
    private animationId = 'walk/south',
    private logger = new Logger(),
  ) {
    super(config);
    this.layers = sceneLayers
      .map(layer => isSprite(layer) ? { id: layer.id, url: layer.properties.src } : null
      ).filter(layer => layer ? true : false) as { id?: string, url: string }[];

  }

  onDestroy() {
    this.sprites.forEach(sprite => sprite.destroy());
  }


  preload() {
    const awaitLoader: any = this.plugins.get('AwaitLoader');
    if (!awaitLoader) {
      return;
    }
    awaitLoader.addToScene(this);

    (this.load as any).AwaitFile((successCallback: () => void, failureCallback: () => void) => {
      // this.load.image('ground', 'assets/tilemaps/tiles/kenny_ground_64x64.png');
      // this.load.image('items', 'assets/tilemaps/tiles/kenny_items_64x64.png');
      // this.load.image('platformer', 'assets/tilemaps/tiles/kenny_platformer_64x64.png');

      // this.load.tilemapTiledJSON('map', 'assets/tilemaps/maps/multi-tileset-v12.json');

      forkJoin(
        this.sceneLayers.filter(layer => layer.properties.src).map(layer =>
          this.resourceExists(layer.properties.src).pipe(
            map(exists => {
              return exists ? layer : null;
            })
          )
        )
      ).pipe(
        map(layers => layers.filter(layer => layer !== null) as GameLayer[]),
        tap((layers) => {
          this.spriteLayers = layers.filter(layer => isSprite(layer));
          this.animationLayers = this.sceneLayers.filter(layer => isAnimation(layer) || isAnimationGroup(layer));
        }),
        switchMap((layers) => this.loadSpritesheets(this.spriteLayers))
      ).subscribe(() => successCallback());
    });
  }

  create() {
    if (this.load.isLoading()) {
      return;
    }

    this.addSprites(this.spriteLayers);
    this.addAnimations(this.animationLayers);

    this.spriteLayers.forEach(layer => isSprite(layer) ? this.playLayerAnimation(layer, this.animationId) : null);
  }

  private loadSpritesheets(layers: GameLayer[]) {
    return forkJoin(
      layers.map(
        (spriteLayer, i) => this.resourceExists(spriteLayer.properties.src)
          .pipe(
            map(exists => exists ? spriteLayer : undefined),
            filter(exists => exists ? true : false),
            tap((layer: any) => {
              try {
                this.load.spritesheet(layer.id || `layer-${i}`, layer.properties.src, {
                  frameWidth: layer.dimensions?.width || 64,
                  frameHeight: layer.dimensions?.height || 64
                });
                this.logger.log('Phaser/SpriteSheet/Loaded', { name: layer.properties.name, src: layer.properties.src }, LogLevel.Info);
              } catch (err) {
                this.logger.log('Phaser/SpriteSheet/LoadedError', { name: layer.properties.name, src: layer.properties.src, error: err }, LogLevel.Error);
              }
            })

          )
      )
    )
  }

  private addSprites(layers: GameLayer[]) {
    return layers
      .forEach(
        (layer, i) => {
          if (!isSprite(layer) || !layer.properties.src) {
            return;
          }

          const layerId = layer.id || `layer-${i}`;

          const exists = this.sprites.find(sprite => sprite.texture.key === layerId);

          if (exists) {
            return;
          }

          try {
            const sprite = this.add.sprite(this.game.canvas.width / 2, this.game.canvas.height / 2, layerId, 0);
            this.sprites.push(sprite);
            sprite.setScale(layer.dimensions?.scale || 1);

            this.logger.log('Phaser/Sprite/Added', { layerId, name: layer.properties.name, x: this.game.canvas.width / 2, y: this.game.canvas.height / 2 });
          } catch (err) {
            this.logger.log('Phaser/Sprite/AddedError', { layerId, name: layer.properties.name, error: err }, LogLevel.Error);
          }
        }
      );
  }

  private resourceExists(resource: string) {
    return this.http.get(resource, { responseType: 'text' }).pipe(catchError(err => of(false)), map((result) => result ? true : false));
  }

  private addAnimations(layers: GameLayer[]) {
    layers
      .forEach(
        (layer, i) => {
          if (isAnimationGroup(layer)) {
            layer.properties.animations.forEach((animation, i) => {
              this.createAnimation({
                id: uuid(),
                type: GameLayerType.Animation,
                name: `${animation.name}`,
                properties: {
                  row: animation.row || layer.properties.row + i || 0,
                  cols: animation.cols || layer.properties.cols || 0,
                  name: `${layer.properties.name}/${animation.name}`,
                  textureKey: animation.textureKey || layer.properties.textureKey,
                  frames: []
                }
              });
              this.logger.log('Phaser/AnimationGroup/Created', { group: layer.name, animation: animation.name });
            })
          }

          if (isAnimation(layer)) {

            this.createAnimation(layer);
          }
        }
      );
  }

  private createAnimation({
    id,
    name,
    properties
  }: GameLayer<Animation>, parent?: GameLayer<AnimationGroup>) {

    const row = properties.row || 13;
    const cols = properties.cols || 13;
    const steps = properties.steps || 6;

    const start = (row * cols);
    const end = start + (steps - 1);

    const textureLayer = this.sceneLayers.find(layer => layer?.name === properties.textureKey);

    if (!textureLayer || !textureLayer.id) {
      throw new Error(`Texture not found ${properties.textureKey}`);
    }

    const animationKey = `${textureLayer.id}/${parent?.properties.name ? parent.properties.name + '/' : ''}${properties.name}`;



    this.anims.create({
      key: animationKey,
      frames: this.anims.generateFrameNumbers(textureLayer.id, { start, end }),

      frameRate: properties.frameRate || 6,
      repeat: properties.repeat || -1,
    });
    this.logger.log('Phaser/Animation/Created', { key: animationKey, start, end, row, cols, steps });
  }

  private playLayerAnimation(layer: GameLayer, animation: string) {
    if (!isSprite(layer)) {
      throw new Error('Animation not found');
    }

    const sprite = this.sprites.find(sprite => sprite.texture.key === layer.id);

    if (!sprite) {
      throw new Error(`Sprite not found ${layer.name} ${layer.id}`);
    }

    this.playAnimation(sprite, `${layer.id}/${animation}`);
    this.logger.log('Phaser/Animation/Started', { layer: layer.id, key: animation });
  }

  private playAnimation(sprite: GameObjects.Sprite, animation: string) {
    if (!((this.anims as any).anims.entries[animation])) {
      throw new Error(`Animation ${animation} not found`);
    }

    sprite.play(animation);
  }

}

export const PHASER_SCENE_PROVIDER = {
  provide: Scene,
  useClass: PhaserScene
}
