import { Coordinates } from './value-objects/coordinates';
import { Dimensions } from './value-objects/dimensions';
import { Geometry } from './value-objects/geometry';

/** A Physical object */
export interface Physics {
  /** The coordinates of the physical object */
  coordinates?: Coordinates;
  /** The dimensions of the physical object */
  dimensions?: Dimensions;
  /** The geometry of the physical object */
  geometry?: Geometry;
}
