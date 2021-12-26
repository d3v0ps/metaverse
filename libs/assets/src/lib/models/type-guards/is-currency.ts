import { Asset } from '../asset';
import { AssetKind } from '../value-objects/asset-kind';
import { Currency } from '../value-objects/asset-kinds/currency';

export const isCurrency = (asset: Asset): asset is Asset<Currency> => {
  return asset.kind === AssetKind.Currency;
};
