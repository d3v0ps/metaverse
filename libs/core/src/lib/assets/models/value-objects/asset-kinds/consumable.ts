import { Physics } from '../../../../physics';

/** A Consumable */
export interface Consumable extends Physics {
  /** The amount of usages this consumable can be used */
  usages?: number;

  /** The amount of usages this consumable has left */
  usagesLeft?: number;

  /** The amount of time this consumable can be used */
  time?: number;

  /** The amount of time this consumable has left */
  timeLeft?: number;
}
