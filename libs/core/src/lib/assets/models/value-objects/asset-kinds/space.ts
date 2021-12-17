import { Physics } from '../../../../physics';

/** The Space kind */
export type SpaceKind = 'land' | 'building' | 'unknown';

/** An Spatial object */
export interface Space {
  /** The id of the space */
  id: string;
  /** The kind of the space */
  kind: SpaceKind;
  /** The physics of the space */
  physics?: Physics;
}
