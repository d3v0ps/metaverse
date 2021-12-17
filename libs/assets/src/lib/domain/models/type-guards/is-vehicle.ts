import { Asset } from '../asset';
import { AssetKind } from '../value-objects/asset-kind';
import { Vehicle } from '../value-objects/asset-kinds/vehicle';

export const isVehicle = (asset: Asset): asset is Asset<Vehicle> => {
  return asset.kind === AssetKind.Vehicle;
};
