import { Asset, Avatar } from '@central-factory/core';

export interface PortalStateModel {
  avatars: Avatar[];
  selectedAvatar: Avatar;
  inventory: Asset[];
  assets: Asset[];
}
