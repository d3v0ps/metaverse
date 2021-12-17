import { Physics } from '@central-factory/core';
import { Space } from './space';

/** A Building, such as houses, offices, factories, castles... */
export interface Building extends Physics {
  /** The space where this building is placed */
  space?: Space;
}
