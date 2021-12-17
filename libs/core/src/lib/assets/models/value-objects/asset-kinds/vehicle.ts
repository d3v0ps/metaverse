import { Physics } from '../../../../physics';

/** The kind of terrain */
export type TerrainKind = 'grass' | 'sand' | 'water';

/** A Vehicle */
export interface Vehicle extends Physics {
  /** Terrains where this vehicle can move  */
  alllowedTerrains: TerrainKind[];
  /** Max speed in optimum circustances */
  maxSpeed: number;
}
