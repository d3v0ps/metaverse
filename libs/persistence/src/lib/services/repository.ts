/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {
  PermissionKind,
  PermissionMode,
} from '@central-factory/permissions/__generated__/models';
import {
  BlobBuffer,
  MangoQuery,
  RxCollection,
  RxDocument,
} from 'rxdb/dist/types/types';
import {
  forkJoin,
  from,
  map,
  Observable,
  of,
  switchMap,
  throwError,
} from 'rxjs';
import { ACL } from './acl';

export type Query<Type> = MangoQuery<Type> | undefined;
export type Update = any;

export type Attachment = {
  id: string;
  data: BlobBuffer;
  type: string;
};

export class Repository<
  RxDocumentType = any & { _attachments?: any },
  OrmMethods = any,
  StaticMethods = any
> {
  constructor(
    private readonly appId: string,
    private readonly collection: RxCollection<
      RxDocumentType,
      OrmMethods,
      StaticMethods
    >,
    private readonly acl: ACL
  ) {}

  insert(doc: RxDocumentType): Observable<RxDocumentType> {
    return this.requestPermission(PermissionMode.Write).pipe(
      switchMap(() => this.collection.insert(doc)),
      map((doc) => this.docToJSON(doc))
    );
  }

  upsert(doc: RxDocumentType): Observable<RxDocumentType> {
    return this.requestPermission(PermissionMode.Write).pipe(
      switchMap(() => this.collection.upsert(doc)),
      map((doc) => this.docToJSON(doc))
    );
  }

  findOne(query?: Query<RxDocumentType>): Observable<RxDocumentType | null> {
    return this.requestPermission(PermissionMode.Read).pipe(
      switchMap(() => this.collection.findOne(query).exec()),
      map((doc) => (doc ? this.docToJSON(doc) : null))
    );
  }

  find(query?: Query<RxDocumentType>): Observable<RxDocumentType[]> {
    return this.requestPermission(PermissionMode.Read).pipe(
      switchMap(() => this.collection.find(query).exec()),
      map((docs) => docs.map((doc) => this.docToJSON(doc)))
    );
  }

  observe(query?: Query<RxDocumentType>): Observable<RxDocumentType[]> {
    return this.requestPermission(PermissionMode.Read).pipe(
      switchMap(() => this.collection.find(query).$),
      map((docs) => docs.map((doc) => this.docToJSON(doc)))
    );
  }

  observeOne(query?: Query<RxDocumentType>): Observable<RxDocumentType | null> {
    return this.observe(query).pipe(
      map((docs) => (docs.length > 0 ? docs[0] : null))
    );
  }

  update(
    where?: Query<RxDocumentType>,
    update?: Update
  ): Observable<RxDocumentType[]> {
    return this.requestPermission(PermissionMode.Write).pipe(
      switchMap(() => this.collection.find(where).update(update)),
      map((docs) => docs.map((doc) => this.docToJSON(doc)))
    );
  }

  remove(query?: Query<RxDocumentType>): Observable<RxDocumentType[]> {
    return this.requestPermission(PermissionMode.Write).pipe(
      switchMap(() => this.collection.find(query).remove()),
      map((docs) => docs.map((doc) => this.docToJSON(doc)))
    );
  }

  putAttachment(
    docId: string,
    attachment: Attachment,
    skipIfSame: boolean = false
  ): Observable<string> {
    return this.requestPermission(PermissionMode.Write).pipe(
      switchMap(() =>
        this.collection
          .findOne({
            selector: {
              id: docId,
            },
          })
          .exec()
      ),
      switchMap((doc) => {
        if (!doc) {
          return throwError(
            () => new Error('No document found for id ' + docId)
          );
        }

        return doc.putAttachment(attachment, skipIfSame);
      }),
      map((attachment) => attachment.id)
    );
  }

  getAttachment(docId: string, attachmentId: string): Observable<Attachment> {
    return this.requestPermission(PermissionMode.Read).pipe(
      switchMap(() =>
        this.collection
          .findOne({
            selector: {
              id: docId,
            },
          })
          .exec()
      ),
      switchMap((doc) => {
        if (!doc) {
          return throwError(
            () => new Error('No document found for id ' + docId)
          );
        }

        return of(doc.getAttachment(attachmentId));
      }),
      switchMap((attachment) => {
        if (!attachment) {
          return throwError(
            () => new Error('No attachment found for id ' + attachmentId)
          );
        }

        return from(attachment.getData()).pipe(
          map((data) => ({
            id: attachment.id,
            data,
            type: attachment.type,
          }))
        );
      })
    );
  }

  getAllAttachments(docId: string): Observable<Attachment[]> {
    return this.requestPermission(PermissionMode.Read).pipe(
      switchMap(() =>
        this.collection
          .findOne({
            selector: {
              id: docId,
            },
          })
          .exec()
      ),
      switchMap((doc) => {
        if (!doc) {
          return throwError(
            () => new Error('No document found for id ' + docId)
          );
        }

        return of(doc.allAttachments());
      }),
      switchMap((attachments) => {
        if (attachments.length <= 0) {
          return of([]);
        }

        return forkJoin(
          attachments.map((attachment) =>
            from(attachment.getData()).pipe(
              map((data) => ({
                id: attachment.id,
                data,
                type: attachment.type,
              }))
            )
          )
        );
      })
    );
  }

  removeAttachment(docId: string, attachmentId: string): Observable<void> {
    return this.requestPermission(PermissionMode.Write).pipe(
      switchMap(() =>
        this.collection
          .findOne({
            selector: {
              id: docId,
            },
          })
          .exec()
      ),
      switchMap((doc) => {
        if (!doc) {
          return throwError(
            () => new Error('No document found for id ' + docId)
          );
        }

        const attachment = doc.getAttachment(attachmentId);

        if (!attachment) {
          return throwError(
            () => new Error('No attachment found for id ' + attachmentId)
          );
        }

        return attachment.remove();
      })
    );
  }

  observeAttachments(docId: string): Observable<Attachment[]> {
    return this.requestPermission(PermissionMode.Read).pipe(
      switchMap(() =>
        this.collection
          .findOne({
            selector: {
              id: docId,
            },
          })
          .exec()
      ),
      switchMap((doc) => {
        if (!doc) {
          return throwError(
            () => new Error('No document found for id ' + docId)
          );
        }

        return doc.allAttachments$;
      }),
      switchMap((attachments) => {
        return forkJoin(
          attachments.map((attachment) =>
            from(attachment.getData()).pipe(
              map((data) => ({
                id: attachment.id,
                data,
                type: attachment.type,
              }))
            )
          )
        );
      })
    );
  }

  private requestPermission(mode: PermissionMode): Observable<boolean> {
    return this.acl
      .hasPermission({
        appId: this.appId,
        kind: PermissionKind.Collection,
        mode,
        target: this.collection.name,
      })
      .pipe(
        switchMap((hasPermission) => {
          if (!hasPermission) {
            return throwError(
              () =>
                new Error(
                  `No permission to perform action ${mode} on ${this.collection.name} with appId ${this.appId}`
                )
            );
          }

          return of(hasPermission);
        })
      );
  }

  private docToJSON(
    doc: RxDocument<RxDocumentType, OrmMethods>
  ): RxDocumentType {
    const result = JSON.parse(JSON.stringify(doc));
    result._attachments = (doc as any)._attachments;

    return result;
  }
}
