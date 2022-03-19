import { collectionsProviders } from './collections.providers';
import { demoDataProviders } from './demo-data.providers';
import { initialDataProviders } from './initial-data.providers';

export const dataProviders = [
  ...collectionsProviders,
  ...initialDataProviders,
  ...demoDataProviders,
];
