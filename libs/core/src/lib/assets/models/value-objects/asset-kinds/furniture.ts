import { Physics } from '@central-factory/core';
import { Space } from './space';

/** A Furniture, such as wardrobes, tables... */
export interface Furniture extends Physics {
  /** Whether this equipments has slots or not  */
  hasSlots: boolean;
  /** The furniture slots  */
  slots?: FurnitureSlot[];
  /** The space where this building is placed */
  space?: Space;
}

/** A furniture slot */
export interface FurnitureSlot extends Physics {
  /** The asset placed in that slot  */
  assetId: string;
}
