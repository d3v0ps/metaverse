/* eslint-disable @typescript-eslint/no-explicit-any */
import { Inject, Injectable, InjectionToken } from '@angular/core';
import * as PouchdbAdapterIdb from 'pouchdb-adapter-idb';
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
import { Repository } from './repository';

addPouchPlugin(PouchdbAdapterIdb);
addRxPlugin(RxDBDevModePlugin);
addRxPlugin(RxDBValidatePlugin);
addRxPlugin(RxDBEncryptionPlugin);
addRxPlugin(RxDBQueryBuilderPlugin);

export const ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN = new InjectionToken<
  {
    name: string;
    creator: RxCollectionCreator;
  }[]
>('ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN');

export const ENTITY_MANAGER_INITIAL_DATA_TOKEN = new InjectionToken<
  {
    name: string;
    data: any[];
    upsert?: boolean;
  }[]
>('ENTITY_MANAGER_INITIAL_DATA_TOKEN');

@Injectable({
  providedIn: 'root',
})
export class EntityManager<
  DatabaseCollections extends {
    applicationpermissions: RxCollection;
    [collectionName: string]: RxCollection;
  } = {
    applicationpermissions: RxCollection;
    [collectionName: string]: RxCollection;
  }
> {
  public initialize$ = new ReplaySubject<void>(0);

  private _dbInstance?: RxDatabase<DatabaseCollections>;

  constructor(
    private readonly acl: ACL,
    @Inject(ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN)
    private readonly baseCollections: {
      name: string;
      creator: RxCollectionCreator;
    }[],
    @Inject(ENTITY_MANAGER_INITIAL_DATA_TOKEN)
    private readonly initialData: {
      name: string;
      data: any[];
      upsert?: boolean;
    }[]
  ) {}

  public setupDatabase(name: string, password: string): Observable<void> {
    return this.createDatabase(name, password).pipe(
      switchMap((db) => this.addBaseCollections(db)),
      tap((db) => this.acl.initialize(db.applicationpermissions)),
      switchMap((db) => this.addInitialData(db)),
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
  ): Observable<Repository<RxDocumentType, OrmMethods, StaticMethods>> {
    if (!this._dbInstance) {
      return throwError(() => new Error('Database not initialized'));
    }

    const collection = this._dbInstance.collections[
      collectionName
    ] as unknown as RxCollection<RxDocumentType, OrmMethods, StaticMethods>;

    if (!collection) {
      return throwError(() => new Error('Collection not initialized'));
    }

    const repository = new Repository<
      RxDocumentType,
      OrmMethods,
      StaticMethods
    >(appId, collection, this.acl);

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
          storage: getRxStoragePouch('idb'),
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
                    if (data.name !== 'userapplications') {
                      return of(undefined);
                    }

                    const permissions = (
                      doc.additionalProperties?.permissions || []
                    ).map((permission: any) => ({
                      ...permission,
                      appId: doc.id,
                      id: `${doc.id}:${permission.kind}:${permission.mode}:${permission.target}`,
                    }));

                    return forkJoin(
                      permissions.map((permission: any) =>
                        db.applicationpermissions.upsert(permission)
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
