/** Geographic data structure */
export interface GeoJSON {
  type: 'Feature' | 'FeatureCollection';
  geometry?: {
    type: 'Point' | 'LineString' | 'Polygon';
    coordinates?: number[][][];
  };
  properties?: {
    name?: string;
    id?: string;
  };
}

/** A Geometric object */
export type Geometry = GeoJSON;
