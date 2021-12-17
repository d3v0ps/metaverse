import { Physics } from '../../../../physics';
import { Space } from './space';

/** A portion of space such as regions, countries... */
export interface Land extends Physics {
  /** The space where this land is placed */
  space?: Space;
}
