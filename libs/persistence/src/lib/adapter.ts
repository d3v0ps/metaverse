/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { BlobBuffer } from 'rxdb/dist/types/types';
import { Observable } from 'rxjs';
import { RxDbRepositoryAdapter } from './adapters/rxdb.adapter';

export type Query<Type> = any;
export type Update = any;

export type Attachment = {
  id: string;
  data: BlobBuffer;
  type: string;
};

export const REPOSITORY_ADAPTER_TOKEN = 'REPOSITORY_ADAPTER';

export type RepositoryAdapterProvider<
  Adapter extends RepositoryAdapter = RepositoryAdapter
> = {
  name: string;
  adapter: new <TEntity = any, TQuery = Query<TEntity>>(
    ...params: any
  ) => Adapter;
};

export const REPOSITORY_ADAPTER_PROVIDER = {
  provide: REPOSITORY_ADAPTER_TOKEN,
  useValue: RxDbRepositoryAdapter,
  multi: true,
};

export interface RepositoryAdapter<TEntity = any, TQuery = Query<TEntity>> {
  insert?(doc: TEntity): Observable<TEntity>;

  upsert?(doc: TEntity): Observable<TEntity>;

  findOne?(query?: TQuery): Observable<TEntity | null>;

  find?(query?: TQuery): Observable<TEntity[]>;

  observe?(query?: TQuery): Observable<TEntity[]>;

  observeOne?(query?: TQuery): Observable<TEntity | null>;

  update?(query?: TQuery, update?: Update): Observable<TEntity[]>;

  remove?(query?: TQuery): Observable<TEntity[]>;

  putAttachment?(
    docId: string,
    attachment: Attachment,
    skipIfSame?: boolean
  ): Observable<string>;

  getAttachment?(docId: string, attachmentId: string): Observable<Attachment>;

  getAllAttachments?(docId: string): Observable<Attachment[]>;

  removeAttachment?(docId: string, attachmentId: string): Observable<void>;

  observeAttachments?(docId: string): Observable<Attachment[]>;
}
