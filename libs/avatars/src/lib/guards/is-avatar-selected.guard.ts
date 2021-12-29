import { Inject, Injectable, InjectionToken } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { EntityManager } from '@central-factory/persistence/services/entity-manager';
import type { UserPreferenceDocType } from '@central-factory/preferences/collections/user-preferences.collection';
import { map, Observable, switchMap, tap } from 'rxjs';

export const ON_AVATAR_SELECTED_GUARD_FAILURE_REDIRECT_TOKEN =
  new InjectionToken<string>(
    'ON_DATABASE_CREATED_GUARD_FAILURE_REDIRECT_TOKEN',
    {
      providedIn: 'root',
      factory: () => '/select-avatar',
    }
  );

@Injectable({
  providedIn: 'root',
})
export class IsAvatarSelectedGuard implements CanActivate {
  constructor(
    private entityManager: EntityManager,
    private router: Router,
    @Inject(ON_AVATAR_SELECTED_GUARD_FAILURE_REDIRECT_TOKEN)
    private failureRedirectTo: string
  ) {}

  public canActivate(): Observable<boolean> {
    return this.entityManager
      .getRepository<UserPreferenceDocType>(
        'userpreferences',
        'com.central-factory.user-avatars'
      )
      .pipe(
        switchMap((repository) =>
          repository.findOne({
            selector: {
              id: 'userAvatars.selectedAvatar',
            },
          })
        ),
        map((userPreference) =>
          userPreference && userPreference.value ? true : false
        ),
        tap((isAvatarSelected) => {
          if (!isAvatarSelected) {
            this.router.navigate([this.failureRedirectTo]);
          }
        })
      );
  }
}
