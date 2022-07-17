/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { BlobBuffer } from 'rxdb/dist/types/types';
import { Observable, throwError } from 'rxjs';
import { RepositoryAdapter } from './adapter';

export type Query<Type> = any;
export type Update = any;

export type Attachment = {
  id: string;
  data: BlobBuffer;
  type: string;
};

export type Tag = {
  name: string;
  aliases?: string[];
  icon?: string;
};

export const TAGS_PROVIDER_INJECTION_TOKEN = 'tags';

export class Repository<TEntity = any, TQuery = Query<TEntity>> {
  constructor(protected adapter: RepositoryAdapter<TEntity, TQuery>) {}

  getAdapter<
    TRepository extends RepositoryAdapter<TEntity, TQuery> = RepositoryAdapter<
      TEntity,
      TQuery
    >
  >(): TRepository {
    return this.adapter as TRepository;
  }

  insert(doc: TEntity): Observable<TEntity> {
    return this.adapter.insert
      ? this.adapter.insert(doc)
      : throwError(() => new Error('This adapter does not support inserting'));
  }

  upsert(doc: TEntity): Observable<TEntity> {
    return this.adapter.upsert
      ? this.adapter.upsert(doc)
      : throwError(() => new Error('This adapter does not support upserting'));
  }

  findOne(query?: TQuery): Observable<TEntity | null> {
    return this.adapter.findOne
      ? this.adapter.findOne(query)
      : throwError(
          () => new Error('This adapter does not support finding one')
        );
  }

  find(query?: TQuery): Observable<TEntity[]> {
    return this.adapter.find
      ? this.adapter.find(query)
      : throwError(() => new Error('This adapter does not support finding'));
  }

  observe(query?: TQuery): Observable<TEntity[]> {
    return this.adapter.observe
      ? this.adapter.observe(query)
      : throwError(() => new Error('This adapter does not support observing'));
  }

  observeOne(query?: TQuery): Observable<TEntity | null> {
    return this.adapter.observeOne
      ? this.adapter.observeOne(query)
      : throwError(
          () => new Error('This adapter does not support observing one')
        );
  }

  update(query?: TQuery, update?: Update): Observable<TEntity[]> {
    return this.adapter.update
      ? this.adapter.update(query, update)
      : throwError(() => new Error('This adapter does not support update'));
  }

  remove(query?: TQuery): Observable<TEntity[]> {
    return this.adapter.remove
      ? this.adapter.remove(query)
      : throwError(() => new Error('This adapter does not support removal'));
  }

  putAttachment?(
    docId: string,
    attachment: Attachment,
    skipIfSame?: boolean
  ): Observable<string> {
    return this.adapter.putAttachment
      ? this.adapter.putAttachment(docId, attachment, skipIfSame)
      : throwError(
          () => new Error('This adapter does not support adding attachments')
        );
  }

  getAttachment?(docId: string, attachmentId: string): Observable<Attachment> {
    return this.adapter.getAttachment
      ? this.adapter.getAttachment(docId, attachmentId)
      : throwError(
          () =>
            new Error('This adapter does not support getting one attachment')
        );
  }

  getAllAttachments?(docId: string): Observable<Attachment[]> {
    return this.adapter.getAllAttachments
      ? this.adapter.getAllAttachments(docId)
      : throwError(
          () => new Error('This adapter does not support getting attachments')
        );
  }

  removeAttachment?(docId: string, attachmentId: string): Observable<void> {
    return this.adapter.removeAttachment
      ? this.adapter.removeAttachment(docId, attachmentId)
      : throwError(
          () => new Error('This adapter does not support removing attachments')
        );
  }

  observeAttachments?(docId: string): Observable<Attachment[]> {
    return this.adapter.observeAttachments
      ? this.adapter.observeAttachments(docId)
      : throwError(
          () => new Error('This adapter does not support observing attachments')
        );
  }
}
