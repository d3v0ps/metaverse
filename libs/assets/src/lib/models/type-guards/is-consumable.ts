import { Asset } from '../asset';
import { AssetKind } from '../value-objects/asset-kind';
import { Consumable } from '../value-objects/asset-kinds/consumable';

export const isConsumable = (asset: Asset): asset is Asset<Consumable> => {
  return asset.kind === AssetKind.Consumable;
};
