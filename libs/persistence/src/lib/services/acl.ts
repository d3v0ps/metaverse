import { Injectable } from '@angular/core';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {
  PermissionCollection,
  PermissionDocument,
} from '@central-factory/permissions/__generated__/collections/permission';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {
  Permission,
  PermissionKind,
  PermissionMode,
} from '@central-factory/permissions/__generated__/models';
import { defer, from, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ACL {
  private collection?: PermissionCollection;

  private isInitialized = false;

  initialize(collection: PermissionCollection) {
    if (this.isInitialized) {
      return;
    }

    this.collection = collection;
    this.isInitialized = true;
  }

  requestPermissions(permissions: Permission[]): Observable<boolean> {
    return defer(() => {
      if (!this.isInitialized || !this.collection) {
        return throwError(
          () => new Error('PermissionsService not initialized')
        );
      }

      return from(
        this.collection.bulkInsert(permissions as PermissionDocument[])
      ).pipe(map(({ success }) => !!success));
    });
  }

  hasPermission(permission: {
    appId: string;
    kind: PermissionKind;
    mode: PermissionMode;
    target: string;
  }): Observable<boolean> {
    return defer(() => {
      if (!this.isInitialized || !this.collection) {
        return throwError(
          () => new Error('PermissionsService not initialized')
        );
      }

      const query = this.collection.findOne({
        selector: {
          id: `${permission.appId}:${permission.kind}:${permission.mode}:${permission.target}`,
        },
      });

      // TODO: Fix permissions issue
      return from(
        this.collection
          .find()
          .exec()
          .then((data) => {
            return data.length > 0;
          })
      );

      return from(query.exec()).pipe(map((doc) => !!doc));
    });
  }
}
