/* eslint-disable @typescript-eslint/no-explicit-any */
// import * as PouchdbAdapterIdb from 'pouchdb-adapter-idb';
import { RxDBAttachmentsPlugin } from 'rxdb/plugins/attachments';
import {
  addRxPlugin,
  createRxDatabase,
  RxCollection,
  RxCollectionCreator,
  RxDatabase,
} from 'rxdb/plugins/core';
import { RxDBDevModePlugin } from 'rxdb/plugins/dev-mode';
import { RxDBEncryptionPlugin } from 'rxdb/plugins/encryption';
import { addPouchPlugin, getRxStoragePouch } from 'rxdb/plugins/pouchdb';
import { RxDBQueryBuilderPlugin } from 'rxdb/plugins/query-builder';
import { RxDBUpdatePlugin } from 'rxdb/plugins/update';
import { RxDBValidatePlugin } from 'rxdb/plugins/validate';
import {
  defer,
  forkJoin,
  from,
  map,
  Observable,
  of,
  ReplaySubject,
  switchMap,
  tap,
  throwError,
} from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { ACL } from './acl';
import { RepositoryAdapterProvider } from './adapter';
import { RxDbRepositoryAdapter } from './adapters/rxdb.adapter';
import { Repository } from './repository';

export const ENTITY_MANAGER_REPOSITORY_ADAPTER_TOKEN =
  'ENTITY_MANAGER_REPOSITORY_ADAPTER_TOKEN';
export const ENTITY_MANAGER_DB_ADAPTER_TOKEN =
  'ENTITY_MANAGER_DB_ADAPTER_TOKEN';

export const ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN =
  'ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN';

export const ENTITY_MANAGER_INITIAL_DATA_TOKEN =
  'ENTITY_MANAGER_INITIAL_DATA_TOKEN';

export const ENTITY_MANAGER_ACL_ENABLED_TOKEN =
  'ENTITY_MANAGER_ACL_ENABLED_TOKEN';
export const ENTITY_MANAGER_ACL_ENABLED_PROVIDER = {
  provide: ENTITY_MANAGER_ACL_ENABLED_TOKEN,
  useValue: false,
};

export class EntityManager<
  DatabaseCollections extends {
    permission: RxCollection;
    [collectionName: string]: RxCollection;
  } = {
    permission: RxCollection;
    [collectionName: string]: RxCollection;
  }
> {
  public initialize$ = new ReplaySubject<void>(0);

  public get app() {
    return this._dbExpressApp;
  }

  private _dbInstance?: RxDatabase<DatabaseCollections>;
  private _dbServer?: any;
  private _dbPouchApp?: any;
  private _dbExpressApp?: any;

  constructor(
    private readonly baseCollections: {
      name: string;
      creator: RxCollectionCreator;
    }[] = [],
    private readonly initialData: {
      name: string;
      data: any[];
      upsert?: boolean;
    }[] = [],
    private readonly dbAdapter: {
      name: string;
      adapter: string;
    },
    private readonly repositoryAdapters: RepositoryAdapterProvider[] = [],
    private readonly aclEnabled = ENTITY_MANAGER_ACL_ENABLED_PROVIDER.useValue,
    private readonly acl: ACL = new ACL()
  ) {
    console.debug('adapters', repositoryAdapters);
  }

  private async addPlugins(server = false) {
    if (server) {
      const { RxDBServerPlugin } = await import('rxdb/plugins/server');
      addRxPlugin(RxDBServerPlugin);
    }
    addRxPlugin(RxDBDevModePlugin);
    addRxPlugin(RxDBValidatePlugin);
    addRxPlugin(RxDBEncryptionPlugin);
    addRxPlugin(RxDBQueryBuilderPlugin);
    addRxPlugin(RxDBUpdatePlugin);
    addRxPlugin(RxDBAttachmentsPlugin);

    addPouchPlugin(this.dbAdapter.adapter);
  }

  public setupDatabase(
    name: string,
    password: string,
    createServer = false
  ): Observable<void> {
    const mockAclFn = this.aclEnabled ? undefined : () => true;

    return from(this.addPlugins(createServer)).pipe(
      switchMap(() => this.createDatabase(name, password)),
      switchMap((db) => this.addBaseCollections(db)),
      tap((db) => this.acl.initialize(db.userpermission, mockAclFn)),
      switchMap((db) => this.addInitialData(db).pipe(map(() => db))),
      switchMap((db) => {
        if (!createServer || !this._dbInstance?.server) {
          return of(db);
        }

        return from(
          this._dbInstance.server({
            startServer: false,
          })
        ).pipe(
          map(({ app, pouchApp, server }) => {
            this._dbExpressApp = app;
            this._dbPouchApp = pouchApp;
            this._dbServer = server;

            return db;
          })
        );
      }),
      tap(() => this.initialize$.next()),
      map(() => undefined)
    );
  }

  public isDatabaseCreated() {
    return this._dbInstance !== undefined;
  }

  public getRepository<
    RxDocumentType = any,
    OrmMethods = any,
    StaticMethods = any
  >(
    collectionName: keyof DatabaseCollections,
    appId: string
  ): Observable<Repository<RxDocumentType>> {
    if (!this._dbInstance) {
      return throwError(() => new Error('Database not initialized'));
    }

    const collection = this._dbInstance.collections[
      collectionName
    ] as unknown as RxCollection<RxDocumentType, OrmMethods, StaticMethods>;

    if (!collection) {
      return throwError(() => new Error('Collection not initialized'));
    }

    const adapter = this.repositoryAdapters.find(
      (adapter) => adapter.name === 'rxdb'
    ) as RepositoryAdapterProvider<RxDbRepositoryAdapter<RxDocumentType, any>>;

    if (!adapter) {
      return throwError(() => new Error('Adapter not initialized'));
    }

    const adapterInstance = new adapter.adapter<RxDocumentType>(
      appId,
      collection,
      this.acl
    );

    const repository = new Repository(adapterInstance);

    return of(repository);
  }

  private createDatabase(
    name: string,
    password: string
  ): Observable<RxDatabase<DatabaseCollections>> {
    return defer(() =>
      from(
        createRxDatabase<RxDatabase<DatabaseCollections>>({
          name,
          password,
          storage: getRxStoragePouch(this.dbAdapter.name),
        })
      ).pipe(tap((db) => (this._dbInstance = db)))
    );
  }

  private addBaseCollections(
    db: RxDatabase<DatabaseCollections>
  ): Observable<RxDatabase<DatabaseCollections>> {
    const baseCollections: {
      [key: string]: RxCollectionCreator;
    } = this.baseCollections.reduce(
      (result, current) =>
        Object.assign(result, { [current.name]: current.creator }),
      {}
    );

    return defer(() =>
      from(
        db.addCollections(baseCollections) as unknown as Promise<
          RxDatabase<DatabaseCollections>
        >
      ).pipe(
        tap((db) => {
          Object.values(db).forEach((collection) => {
            collection.preInsert((data: any) => {
              const now = new Date().toISOString();
              data.id = data.id || uuidv4();
              data.createdAt = data.createdAt || now;
              data.updatedAt = data.updatedAt || now;
            }, false);
            collection.preSave((data: any, document: any) => {
              const now = new Date().toISOString();
              data.createdAt = document.createdAt || now;
              data.updatedAt = now;
            }, false);
          });
        })
      )
    );
  }

  private addInitialData(db: RxDatabase<DatabaseCollections>): Observable<any> {
    if (!this.initialData.length) {
      return of([]);
    }

    return forkJoin(
      this.initialData.map((data) => {
        const collection = db[data.name];
        const upsert = 'upsert' in data ? data.upsert : true;

        return forkJoin(
          data.data.map((doc) => {
            const shouldInsert$ = upsert
              ? of(true)
              : from(
                  collection.findOne({ selector: { id: doc.id } }).exec()
                ).pipe(map((result) => !result));

            return shouldInsert$.pipe(
              switchMap((shouldInsert) => {
                if (!shouldInsert) {
                  return of(undefined);
                }

                return from(collection.upsert(doc)).pipe(
                  switchMap(() => {
                    if (data.name !== 'userapplication') {
                      return of(undefined);
                    }

                    if (!this.aclEnabled) {
                      return of(undefined);
                    }

                    const permissions = (
                      doc.additionalProperties?.permissions || []
                    ).map((permission: any) => ({
                      ...permission,
                      appId: doc.id,
                      id: `${doc.id}:${permission.kind}:${permission.mode}:${permission.target}`,
                    }));

                    if (!permissions.length) {
                      return of(undefined);
                    }

                    return forkJoin(
                      permissions.map((permission: any) =>
                        db.userpermission.upsert(permission)
                      )
                    );
                  })
                );
              })
            );
          })
        );
      })
    );
  }
}
