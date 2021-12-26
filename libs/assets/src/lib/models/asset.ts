import { AssetData, AssetDataDefault } from './value-objects/asset-data';
import { AssetKind } from './value-objects/asset-kind';
import { Permission } from './value-objects/permission';

/** An Asset */
export interface Asset<TAssetData extends AssetData = AssetDataDefault> {
  /** The id of the asset */
  id: string;
  /** The name of the asset */
  name: string;
  /** The producer's model of the asset */
  model: string;
  /** The description of the asset */
  description: string;
  /** Whether the asset is digital or not */
  digital: boolean;
  /** Whether the asset is private or not */
  private: boolean;
  /** The kind of the asset */
  kind: AssetKind;
  /** The url of the asset */
  url: string;
  /** The preview url of the asset */
  previewUrl: string;
  /** The asset current market value */
  currentValue: number;
  /** The asset purchase market value */
  purchaseValue: number;
  /** The asset purchase date */
  purchaseDate: Date;
  /** The asset data */
  data?: TAssetData;
  /** The owner of the asset */
  owner: string;
  /** The producer of the asset */
  producer: string;
  /** The permissions of the asset */
  permissions?: Permission[];
}
