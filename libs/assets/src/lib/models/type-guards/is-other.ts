import { Asset } from '../asset';
import { AssetKind } from '../value-objects/asset-kind';
import { Other } from '../value-objects/asset-kinds/other';

export const isOther = (asset: Asset): asset is Asset<Other> => {
  return asset.kind === AssetKind.Other;
};
