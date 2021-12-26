import { Asset } from '../asset';
import { AssetKind } from '../value-objects/asset-kind';
import { Land } from '../value-objects/asset-kinds/land';

export const isLand = (asset: Asset): asset is Asset<Land> => {
  return asset.kind === AssetKind.Land;
};
