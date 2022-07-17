/* eslint-disable @typescript-eslint/no-explicit-any */
// import * as PouchdbAdapterIdb from 'pouchdb-adapter-idb';
import * as PouchdbAdapterIdb from 'pouchdb-adapter-idb';
import { ENTITY_MANAGER_DB_ADAPTER_TOKEN } from '../../entity-manager';

export const ENTITY_MANAGER_IDB_ADAPTER_PROVIDER = {
  provide: ENTITY_MANAGER_DB_ADAPTER_TOKEN,
  useValue: {
    name: 'idb',
    adapter: PouchdbAdapterIdb,
  },
};
