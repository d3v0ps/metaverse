/* eslint-disable @typescript-eslint/ban-types */

export type GameObject = {
  layers: GameLayer[];
  position?: {
    x: number;
    y: number;
    z?: number;
  }
};

export enum GameLayerType {
  Background = 'Background',
  Sprite = 'Sprite',
  Sound = 'Sound',
  Animation = 'Animation',
  AnimationGroup = 'AnimationGroup',
  Action = 'Action',
  Activity = 'Activity',
  Service = 'Service',
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type GameLayer<TProperties = any> = {
  id: string;
  type: GameLayerType;
  name: string;
  description?: string;
  position?: {
    x: number;
    y: number;
    z?: number;
  }
  dimensions?: {
    width?: number;
    height?: number;
    scale?: number;
  }
  properties: TProperties;
};

export type GameLayerProperties = Resource | Sprite | Animation | Sound | Action | Activity | Service;

export type Resource = { src?: string, name?: string; type?: string };

export type Sprite = Resource & {};

export const isSprite = (layer: GameLayer): layer is GameLayer<Sprite> => {
  return layer.type === GameLayerType.Sprite;
};

export type Animation = Resource & {
  duration?: number;
  frames: AnimationFrame[];
  textureKey: string;
  row?: number;
  cols?: number;
  steps?: number;
  frameRate?: number;
  repeat?: number;
};

export const isAnimation = (layer: GameLayer): layer is GameLayer<Animation> => {
  return layer.type === GameLayerType.Animation;
};

export type AnimationGroup = Resource & {
  animations: Animation[];
  name: string;
  textureKey: string;
  row: number;
  cols: number;
  steps: number;
}

export const isAnimationGroup = (layer: GameLayer): layer is GameLayer<AnimationGroup> => {
  return layer.type === GameLayerType.AnimationGroup;
};

export type AnimationFrame = {
  frame: number;
  duration?: number;
}
export type Sound = Resource & {};

export const isSound = (layer: GameLayer): layer is GameLayer<Sound> => {
  return layer.type === GameLayerType.Sound;
};

export type Action = {};

export const isAction = (layer: GameLayer): layer is GameLayer<Action> => {
  return layer.type === GameLayerType.Action;
};
export type Activity = {};
export const isActivity = (layer: GameLayer): layer is GameLayer<Activity> => {
  return layer.type === GameLayerType.Activity;
};
export type Service = {};
export const isService = (layer: GameLayer): layer is GameLayer<Service> => {
  return layer.type === GameLayerType.Service;
};
