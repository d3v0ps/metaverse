import { Physics } from '@central-factory/physics/models/physics';
import { Space } from './space';

/** A material */
export interface Material extends Physics {
  /** The material's kind */
  kind?: string;
  /** The space where this material is placed */
  space?: Space;
}
