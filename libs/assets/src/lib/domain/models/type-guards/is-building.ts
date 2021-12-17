import { Asset } from '../asset';
import { AssetKind } from '../value-objects/asset-kind';
import { Building } from '../value-objects/asset-kinds/building';

export const isBuilding = (asset: Asset): asset is Asset<Building> => {
  return asset.kind === AssetKind.Building;
};
