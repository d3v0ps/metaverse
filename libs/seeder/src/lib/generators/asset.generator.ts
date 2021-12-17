import {
  Asset,
  AssetKind,
  EquipmentSlot,
  isBuilding,
  isConsumable,
  isCurrency,
  isEquipment,
  isFurniture,
  isLand,
  isMachine,
  isMaterial,
  isMediaResource,
  isOther,
  isVehicle,
} from '@central-factory/assets';
import { MediaResourceKind } from '@central-factory/core';
import * as faker from 'faker';
import { Generator } from '../models/generator';

export const equipmentSampleData = [
  {
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
  },
  {
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
  },
];

export class AssetGenerator implements Generator<Asset> {
  generate(overrides: Partial<Asset>): Asset {
    let asset = {} as Asset;

    asset.kind = faker.random.arrayElement(Object.values(AssetKind));
    asset.currentValue = faker.datatype.number({ min: 100, max: 1000 });
    asset.owner = faker.datatype.uuid();
    asset.digital = faker.datatype.boolean();
    asset.private = faker.datatype.boolean();

    asset = this.generateAssetData(asset);

    return {
      ...asset,
      ...overrides,
    } as Asset;
  }

  private generateAssetData(asset: Asset): Asset {
    if (isBuilding(asset)) {
      asset.name = faker.random.words();
      asset.model = faker.random.words();
      asset.previewUrl = faker.random.image();
      asset.url = faker.random.image();
      asset.data = {
        coordinates: {
          x: faker.datatype.number(),
          y: faker.datatype.number(),
          z: faker.datatype.number(),
        },
        dimensions: {
          width: faker.datatype.number(),
          height: faker.datatype.number(),
        },
      };
    }

    if (isConsumable(asset)) {
      asset.name = faker.random.words();
      asset.model = faker.random.words();
      asset.previewUrl = faker.random.image();
      asset.url = faker.random.image();
      asset.data = {
        time: faker.datatype.number(),
        timeLeft: faker.datatype.number(),
        usages: faker.datatype.number(),
        usagesLeft: faker.datatype.number(),
      };
    }

    if (isCurrency(asset)) {
      asset.name = faker.random.words();
      asset.model = faker.random.words();
      asset.previewUrl = faker.random.image();
      asset.url = faker.random.image();
      asset.data = {
        amount: faker.datatype.number(),
        kind: faker.random.arrayElement(['gold', 'silver', 'bronze']),
      };
    }

    if (isEquipment(asset)) {
      Object.assign(asset, faker.random.arrayElement(equipmentSampleData));
    }

    if (isFurniture(asset)) {
      asset.name = faker.random.words();
      asset.model = faker.random.words();
      asset.previewUrl = faker.random.image();
      asset.url = faker.random.image();
      asset.data = {
        hasSlots: faker.random.boolean(),
        slots: [
          {
            assetId: faker.random.uuid(),
          },
        ],
      };
    }

    if (isLand(asset)) {
      asset.name = faker.random.words();
      asset.model = faker.random.words();
      asset.previewUrl = faker.random.image();
      asset.url = faker.random.image();
      asset.data = {
        coordinates: {
          x: faker.datatype.number(),
          y: faker.datatype.number(),
          z: faker.datatype.number(),
        },
        dimensions: {
          width: faker.datatype.number(),
          height: faker.datatype.number(),
        },
      };
    }

    if (isMachine(asset)) {
      asset.name = faker.random.words();
      asset.model = faker.random.words();
      asset.previewUrl = faker.random.image();
      asset.url = faker.random.image();
      asset.data = {
        state: faker.random.arrayElement(['on', 'off']),
        functions: [
          {
            name: faker.random.arrayElement(['mining', 'crafting']),
            kind: faker.random.arrayElement(['command', 'query']),
            description: faker.lorem.sentence(),
            key: faker.lorem.word(),
            parameterDefinitions: [
              {
                key: faker.lorem.word(),
                type: faker.random.arrayElement(['string', 'number']),
              },
            ],
          },
        ],
      };
    }

    if (isMaterial(asset)) {
      asset.name = faker.random.words();
      asset.model = faker.random.words();
      asset.previewUrl = faker.random.image();
      asset.url = faker.random.image();
      asset.data = {
        kind: faker.random.arrayElement(['metal', 'wood', 'stone']),
      };
    }

    if (isMediaResource(asset)) {
      asset.name = faker.random.words();
      asset.model = faker.random.words();
      asset.previewUrl = faker.random.image();
      asset.url = faker.random.image();
      asset.data = {
        kind: faker.random.arrayElement(Object.values(MediaResourceKind)),
      };
    }

    if (isOther(asset)) {
      asset.name = faker.random.words();
      asset.model = faker.random.words();
      asset.previewUrl = faker.random.image();
      asset.url = faker.random.image();
      asset.data = {};
    }

    if (isVehicle(asset)) {
      asset.name = faker.random.words();
      asset.model = faker.random.words();
      asset.previewUrl = faker.random.image();
      asset.url = faker.random.image();
      asset.data = {
        maxSpeed: faker.datatype.number(),
        fuel: faker.datatype.number(),
        maxFuel: faker.datatype.number(),
        alllowedTerrains: faker.random.arrayElements([
          'grass',
          'sand',
          'water',
        ]),
      };
    }

    return asset;
  }
}
