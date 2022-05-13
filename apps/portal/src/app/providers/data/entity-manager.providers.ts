import { Provider } from '@angular/core';
import { ACL } from '@central-factory/persistence/acl';
import {
  EntityManager,
  ENTITY_MANAGER_ACL_ENABLED_TOKEN,
  ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN,
  ENTITY_MANAGER_DB_ADAPTER_TOKEN,
  ENTITY_MANAGER_INITIAL_DATA_TOKEN,
  ENTITY_MANAGER_REPOSITORY_ADAPTER_TOKEN,
} from '@central-factory/persistence/entity-manager';
import { ENTITY_MANAGER_CLIENT_DEFAULT_ADAPTER_PROVIDER } from '@central-factory/persistence/providers/database/client.provider';
import { ENTITY_MANAGER_RXDB_REPOSITORY_ADAPTER_PROVIDER } from '@central-factory/persistence/providers/repository/rxdb.provider';

export const entityManagerProviders: Provider[] = [
  ENTITY_MANAGER_CLIENT_DEFAULT_ADAPTER_PROVIDER,
  ENTITY_MANAGER_RXDB_REPOSITORY_ADAPTER_PROVIDER,
  {
    provide: ENTITY_MANAGER_ACL_ENABLED_TOKEN,
    useValue: false,
  },
  {
    provide: ACL,
    useClass: ACL,
  },
  {
    provide: EntityManager,
    useClass: EntityManager,
    deps: [
      ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN,
      ENTITY_MANAGER_INITIAL_DATA_TOKEN,
      ENTITY_MANAGER_DB_ADAPTER_TOKEN,
      ENTITY_MANAGER_REPOSITORY_ADAPTER_TOKEN,
      ENTITY_MANAGER_ACL_ENABLED_TOKEN,
    ],
  },
];
