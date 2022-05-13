import { GoogleSearchRepositoryAdapter } from '@central-factory/persistence/adapters/google-search.adapter';
import { ENTITY_MANAGER_REPOSITORY_ADAPTER_TOKEN } from '@central-factory/persistence/entity-manager';

export const ENTITY_MANAGER_GOOGLE_SEARCH_REPOSITORY_ADAPTER_PROVIDER = {
  provide: ENTITY_MANAGER_REPOSITORY_ADAPTER_TOKEN,
  useValue: {
    name: 'google-search',
    adapter: GoogleSearchRepositoryAdapter,
  },
  multi: true,
};
