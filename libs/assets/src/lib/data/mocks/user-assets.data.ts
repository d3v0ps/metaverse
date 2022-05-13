import { Provider } from '@angular/core';
import { ENTITY_MANAGER_INITIAL_DATA_TOKEN } from '@central-factory/persistence/entity-manager';
import { Asset } from '../../models/asset';
import { equipmentsMocks } from '../storybook/equipments';

export const userAssets: Asset[] = [...equipmentsMocks];

export const USER_ASSETS_MOCKS_DATA_PROVIDER: Provider = {
  provide: ENTITY_MANAGER_INITIAL_DATA_TOKEN,
  useValue: {
    name: 'userassets',
    upsert: true,
    data: userAssets,
  },
  multi: true,
};
