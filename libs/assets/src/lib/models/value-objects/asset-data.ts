import {
  Building,
  Consumable,
  Currency,
  Equipment,
  Furniture,
  Land,
  Machine,
  Material,
  MediaResource,
  Other,
  Vehicle,
} from './asset-kinds';

/** The Asset Data */
export type AssetData =
  | Currency
  | Land
  | Material
  | Building
  | Equipment
  | Furniture
  | Machine
  | Vehicle
  | MediaResource
  | Consumable
  | Other
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  | any;

/** The Asset Data default type */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AssetDataDefault = any;
