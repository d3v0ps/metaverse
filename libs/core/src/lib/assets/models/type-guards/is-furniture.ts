import { Asset } from '../asset';
import { AssetKind } from '../value-objects/asset-kind';
import { Furniture } from '../value-objects/asset-kinds/furniture';

export const isFurniture = (asset: Asset): asset is Asset<Furniture> => {
  return asset.kind === AssetKind.Furniture;
};
