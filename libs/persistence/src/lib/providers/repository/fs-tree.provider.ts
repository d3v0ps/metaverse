import { FSTreeRepositoryAdapter } from '@central-factory/persistence/adapters/fs-tree.adapter';
import { ENTITY_MANAGER_REPOSITORY_ADAPTER_TOKEN } from '@central-factory/persistence/entity-manager';

export const ENTITY_MANAGER_FS_TREE_REPOSITORY_ADAPTER_PROVIDER = {
  provide: ENTITY_MANAGER_REPOSITORY_ADAPTER_TOKEN,
  useValue: {
    name: 'fs-tree',
    adapter: FSTreeRepositoryAdapter,
  },
  multi: true,
};
