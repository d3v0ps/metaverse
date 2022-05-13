import { collectionsProviders } from './collections.providers';
import { demoDataProviders } from './demo-data.providers';
import { entityManagerProviders } from './entity-manager.providers';
import { initialDataProviders } from './initial-data.providers';

export const dataProviders = [
  ...entityManagerProviders,
  ...collectionsProviders,
  ...initialDataProviders,
  ...demoDataProviders,
];
