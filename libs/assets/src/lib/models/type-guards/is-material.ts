import { Material } from '..';
import { Asset } from '../asset';
import { AssetKind } from '../value-objects/asset-kind';

export const isMaterial = (asset: Asset): asset is Asset<Material> => {
  return asset.kind === AssetKind.Material;
};
