import { RxDbRepositoryAdapter } from '@central-factory/persistence/adapters/rxdb.adapter';
import { ENTITY_MANAGER_REPOSITORY_ADAPTER_TOKEN } from '@central-factory/persistence/entity-manager';

export const ENTITY_MANAGER_RXDB_REPOSITORY_ADAPTER_PROVIDER = {
  provide: ENTITY_MANAGER_REPOSITORY_ADAPTER_TOKEN,
  useValue: {
    name: 'rxdb',
    adapter: RxDbRepositoryAdapter,
  },
  multi: true,
};
