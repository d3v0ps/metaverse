import { Asset } from '../asset';
import { AssetKind } from '../value-objects/asset-kind';
import { Machine } from '../value-objects/asset-kinds/machine';

export const isMachine = (asset: Asset): asset is Asset<Machine> => {
  return asset.kind === AssetKind.Machine;
};
