import { Consumable } from '@central-factory/systems/energetic/models/consumable';
import { Asset } from '../../models/asset';
import { AssetKind } from '../../models/value-objects/asset-kind';

export const coffeeAssetMock: Asset<Consumable> = {
  id: '0',
  name: 'Caffè Latte',
  model: 'Caffè Latte',
  digital: false,
  private: true,
  producer: 'Shop1948549 Store',
  owner: 'Metam',
  description: 'A cold latte',
  kind: AssetKind.Consumable,
  previewUrl: 'https://i.imgur.com/w1XmjIj.png',
  purchaseDate: new Date().toISOString(),
  purchaseValue: {
    eur: '2',
  },
  url: 'https://i.imgur.com/w1XmjIj.png',
  data: {
    props: {
      kcal: 61,
      ml: 230,
    },
    consumedAt: new Date('2022-04-09T16:13:13.415Z'),
  },
};
