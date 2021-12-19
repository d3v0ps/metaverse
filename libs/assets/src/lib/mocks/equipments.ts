import { Asset } from '../domain/models/asset';
import { AssetKind } from '../domain/models/value-objects/asset-kind';
import {
  Equipment,
  EquipmentSlot,
} from '../domain/models/value-objects/asset-kinds/equipment';

export const ravensCloackAssetMock: Asset<Equipment> = {
  id: '1',
  name: "Raven's Cloak",
  model: "Raven's Cloak",
  producer: 'Shop5363155 Store',
  owner: 'Metam',
  description: 'Microfiber hooded cloak with fleece lining',
  kind: AssetKind.Equipment,
  previewUrl: 'https://i.imgur.com/ukcsu1q.png',
  url: 'https://es.aliexpress.com/item/1005001952208453.html',
  currentValue: 23.62,
  purchaseValue: 23.62,
  purchaseDate: new Date(),
  digital: false,
  private: true,
  data: {
    allowedSlots: [EquipmentSlot.Back],
    colors: ['#ff0000', '#00ff00', '#0000ff'],
    isEquipped: false,
  },
};

export const foundationsCoatAssetMock: Asset<Equipment> = {
  id: '2',
  name: "Foundation's Coat",
  model: "Foundation's Coat",
  producer: 'Shop1948549 Store',
  owner: 'Metam',
  description: 'Hooded coat with thick fleece lining',
  kind: AssetKind.Equipment,
  previewUrl: 'https://i.imgur.com/w1XmjIj.png',
  url: 'https://es.aliexpress.com/item/1005003209038453.html',
  currentValue: 43.9,
  purchaseValue: 43.9,
  purchaseDate: new Date(),
  digital: false,
  private: true,
  data: {
    allowedSlots: [EquipmentSlot.Chest],
    colors: ['#ff0000', '#00ff00', '#0000ff'],
    isEquipped: false,
  },
};

export const scarfAssetMock: Asset<Equipment> = {
  id: '4',
  name: 'Asset 4',
  model: 'Scarf 1',
  producer: 'Central Factory',
  owner: 'John Doe',
  description: 'This is the first asset',
  kind: AssetKind.Equipment,
  previewUrl: 'https://picsum.photos/id/758/200/200',
  url: 'https://picsum.photos/id/758/200/200',
  currentValue: 150,
  purchaseValue: 100,
  purchaseDate: new Date(),
  digital: true,
  private: true,
};

export const equipmentsMocks = [
  ravensCloackAssetMock,
  foundationsCoatAssetMock,
];
