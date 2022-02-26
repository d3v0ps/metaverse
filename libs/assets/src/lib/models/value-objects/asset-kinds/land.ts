import { Physics } from '@central-factory/physics/models/physics';
import { Space } from './space';

/** A portion of space such as regions, countries... */
export interface Land extends Physics {
  /** The space where this land is placed */
  space?: Space;
}
