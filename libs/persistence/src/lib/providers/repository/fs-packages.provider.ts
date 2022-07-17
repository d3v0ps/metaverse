import { FSPackagesRepositoryAdapter } from '@central-factory/persistence/adapters/fs-packages.adapter';
import { ENTITY_MANAGER_REPOSITORY_ADAPTER_TOKEN } from '@central-factory/persistence/entity-manager';

export const ENTITY_MANAGER_FS_PACKAGES_REPOSITORY_ADAPTER_PROVIDER = {
  provide: ENTITY_MANAGER_REPOSITORY_ADAPTER_TOKEN,
  useValue: {
    name: 'fs-packages',
    adapter: FSPackagesRepositoryAdapter,
  },
  multi: true,
};
