import { IMAPRepositoryAdapter } from '@central-factory/persistence/adapters/imap.adapter';
import { ENTITY_MANAGER_REPOSITORY_ADAPTER_TOKEN } from '@central-factory/persistence/entity-manager';

export const ENTITY_MANAGER_IMAP_REPOSITORY_ADAPTER_PROVIDER = {
  provide: ENTITY_MANAGER_REPOSITORY_ADAPTER_TOKEN,
  useValue: {
    name: 'imap',
    adapter: IMAPRepositoryAdapter,
  },
  multi: true,
};
