import { SceneConfig } from "@central-factory/web-components/angular/phaser/phaser-renderer.component";
import { GameLayer } from "./game-object";

export type Scene = {
  config: SceneConfig;
  sceneLayers: GameLayer[];

  preload: () => void;
  create: () => void;

}
