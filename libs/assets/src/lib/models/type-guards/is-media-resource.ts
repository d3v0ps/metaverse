import { Asset } from '../asset';
import { AssetKind } from '../value-objects/asset-kind';
import { MediaResource } from '../value-objects/asset-kinds/media-resource';

export const isMediaResource = (
  asset: Asset
): asset is Asset<MediaResource> => {
  return asset.kind === AssetKind.MediaResource;
};
