import { Asset } from '../asset';
import { AssetKind } from '../value-objects/asset-kind';
import { Equipment } from '../value-objects/asset-kinds/equipment';

export const isEquipment = (asset: Asset): asset is Asset<Equipment> => {
  return asset.kind === AssetKind.Equipment;
};
