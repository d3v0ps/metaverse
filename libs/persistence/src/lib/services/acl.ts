import { Injectable } from '@angular/core';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { ApplicationPermissionsCollection } from '@central-factory/permissions/collections/application-permissions.collection';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {
  Permission,
  PermissionKind,
  PermissionMode,
} from '@central-factory/permissions/models/permission';
import { defer, from, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ACL {
  private collection?: ApplicationPermissionsCollection;

  private isInitialized = false;

  initialize(collection: ApplicationPermissionsCollection) {
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

      return from(this.collection.bulkInsert(permissions)).pipe(
        map(({ success }) => !!success)
      );
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

      return from(query.exec()).pipe(map((doc) => !!doc));
    });
  }
}
